from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email configuration
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'sparshdesai14@gmail.com')

# Create the main app without a prefix
app = FastAPI(title="Sparsh Desai Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Contact Form Models
class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    read: bool = False
    email_sent: bool = False

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)

class ContactMessageResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None
    email_sent: bool = False


# Visitor Tracking Model
class VisitorLog(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    page: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    user_agent: Optional[str] = None
    referrer: Optional[str] = None

class VisitorLogCreate(BaseModel):
    page: str
    user_agent: Optional[str] = None
    referrer: Optional[str] = None


# ============== Email Functions ==============

def send_contact_email(name: str, email: str, subject: str, message: str, message_id: str):
    """
    Send email notification for new contact form submission.
    """
    try:
        # Check if SMTP credentials are configured
        if not SMTP_USER or not SMTP_PASSWORD:
            logger.warning("SMTP credentials not configured. Email not sent.")
            return False
        
        # Create email content
        email_subject = f"Portfolio Contact: {subject}"
        
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #f97316, #fb923c); padding: 20px; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
            </div>
            <div style="background: #1a1a1a; color: #e5e5e5; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2 style="color: #f97316; margin-top: 0;">Message Details</h2>
                
                <div style="background: #262626; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <p style="margin: 5px 0;"><strong style="color: #f97316;">From:</strong> {name}</p>
                    <p style="margin: 5px 0;"><strong style="color: #f97316;">Email:</strong> <a href="mailto:{email}" style="color: #fb923c;">{email}</a></p>
                    <p style="margin: 5px 0;"><strong style="color: #f97316;">Subject:</strong> {subject}</p>
                </div>
                
                <h3 style="color: #f97316;">Message:</h3>
                <div style="background: #262626; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
                    {message}
                </div>
                
                <hr style="border: none; border-top: 1px solid #404040; margin: 20px 0;">
                
                <p style="font-size: 12px; color: #737373;">
                    Message ID: {message_id}<br>
                    Received: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} IST
                </p>
                
                <div style="margin-top: 20px;">
                    <a href="mailto:{email}?subject=Re: {subject}" 
                       style="background: #f97316; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                        Reply to {name}
                    </a>
                </div>
            </div>
        </body>
        </html>
        """
        
        plain_content = f"""
        New Contact Form Submission
        ===========================
        
        From: {name}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message}
        
        ---
        Message ID: {message_id}
        Received: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} IST
        """
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = email_subject
        msg['From'] = SMTP_USER
        msg['To'] = RECIPIENT_EMAIL
        msg['Reply-To'] = email
        
        # Attach both plain text and HTML versions
        part1 = MIMEText(plain_content, 'plain')
        part2 = MIMEText(html_content, 'html')
        msg.attach(part1)
        msg.attach(part2)
        
        # Send email
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(SMTP_USER, RECIPIENT_EMAIL, msg.as_string())
        
        logger.info(f"Email sent successfully for message {message_id}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False


async def update_email_status(message_id: str, email_sent: bool):
    """Update the email_sent status in database."""
    await db.contact_messages.update_one(
        {"id": message_id},
        {"$set": {"email_sent": email_sent}}
    )


# ============== API Routes ==============

# Root endpoint
@api_router.get("/")
async def root():
    return {"message": "Sparsh Desai Portfolio API", "version": "1.0.0"}


# Status check endpoints
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ============== Contact Form Endpoints ==============

@api_router.post("/contact", response_model=ContactMessageResponse)
async def submit_contact_form(input: ContactMessageCreate, background_tasks: BackgroundTasks):
    """
    Submit a contact form message.
    Stores the message in MongoDB and sends email notification.
    """
    try:
        contact_dict = input.model_dump()
        contact_obj = ContactMessage(**contact_dict)
        
        doc = contact_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.contact_messages.insert_one(doc)
        
        logger.info(f"Contact form submitted: {contact_obj.email} - {contact_obj.subject}")
        
        # Try to send email
        email_sent = False
        if SMTP_USER and SMTP_PASSWORD:
            email_sent = send_contact_email(
                name=input.name,
                email=input.email,
                subject=input.subject,
                message=input.message,
                message_id=contact_obj.id
            )
            # Update email status in background
            if email_sent:
                background_tasks.add_task(update_email_status, contact_obj.id, True)
        
        return ContactMessageResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon." + (" Email notification sent." if email_sent else ""),
            id=contact_obj.id,
            email_sent=email_sent
        )
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit message. Please try again.")


@api_router.get("/contact/messages", response_model=List[ContactMessage])
async def get_contact_messages():
    """
    Get all contact messages (for admin purposes).
    """
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).to_list(100)
    
    for msg in messages:
        if isinstance(msg['timestamp'], str):
            msg['timestamp'] = datetime.fromisoformat(msg['timestamp'])
    
    return messages


@api_router.patch("/contact/messages/{message_id}/read")
async def mark_message_read(message_id: str):
    """
    Mark a contact message as read.
    """
    result = await db.contact_messages.update_one(
        {"id": message_id},
        {"$set": {"read": True}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Message not found")
    
    return {"success": True, "message": "Message marked as read"}


@api_router.delete("/contact/messages/{message_id}")
async def delete_message(message_id: str):
    """
    Delete a contact message.
    """
    result = await db.contact_messages.delete_one({"id": message_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Message not found")
    
    return {"success": True, "message": "Message deleted"}


# ============== Visitor Tracking Endpoints ==============

@api_router.post("/track/visit")
async def track_visit(input: VisitorLogCreate):
    """
    Track a page visit.
    """
    try:
        visitor_dict = input.model_dump()
        visitor_obj = VisitorLog(**visitor_dict)
        
        doc = visitor_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.visitor_logs.insert_one(doc)
        
        return {"success": True}
    except Exception as e:
        logger.error(f"Error tracking visit: {str(e)}")
        return {"success": False}


@api_router.get("/track/stats")
async def get_visitor_stats():
    """
    Get basic visitor statistics.
    """
    total_visits = await db.visitor_logs.count_documents({})
    total_messages = await db.contact_messages.count_documents({})
    unread_messages = await db.contact_messages.count_documents({"read": False})
    
    return {
        "total_visits": total_visits,
        "total_messages": total_messages,
        "unread_messages": unread_messages
    }


# ============== Portfolio Data Endpoint ==============

@api_router.get("/portfolio/info")
async def get_portfolio_info():
    """
    Get basic portfolio information (public endpoint).
    """
    return {
        "name": "Sparsh Desai",
        "title": "Lead – Data, AI & Analytics (BI)",
        "subtitle": "Enterprise Systems | Data Management Team @ Advait",
        "department": "CMAC Team | Corporate Monitoring and Control Department",
        "company": "Advait Energy Transitions Limited",
        "email": "sparshdesai14@gmail.com",
        "phone": "+91-9409460879",
        "location": "Ahmedabad, Gujarat, India",
        "linkedin": "https://www.linkedin.com/in/sparsh-desai-b0b81446"
    }


@api_router.get("/email/status")
async def get_email_status():
    """
    Check if email is configured.
    """
    is_configured = bool(SMTP_USER and SMTP_PASSWORD)
    return {
        "email_configured": is_configured,
        "recipient": RECIPIENT_EMAIL if is_configured else None
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
