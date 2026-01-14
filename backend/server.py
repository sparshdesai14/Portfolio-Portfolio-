from fastapi import FastAPI, APIRouter, HTTPException
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

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Sparsh Desai Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


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

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)

class ContactMessageResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None


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
async def submit_contact_form(input: ContactMessageCreate):
    """
    Submit a contact form message.
    Stores the message in MongoDB for later retrieval.
    """
    try:
        contact_dict = input.model_dump()
        contact_obj = ContactMessage(**contact_dict)
        
        doc = contact_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.contact_messages.insert_one(doc)
        
        logging.info(f"Contact form submitted: {contact_obj.email} - {contact_obj.subject}")
        
        return ContactMessageResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon.",
            id=contact_obj.id
        )
    except Exception as e:
        logging.error(f"Error submitting contact form: {str(e)}")
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
        logging.error(f"Error tracking visit: {str(e)}")
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
        "title": "Senior Data Analyst & Business Intelligence Lead",
        "subtitle": "Enterprise Systems | Data Management Team @ Advait",
        "department": "CMAC Team | Corporate Monitoring and Control Department",
        "company": "Advait Energy Transitions Limited",
        "email": "sparshdesai14@gmail.com",
        "phone": "+91-9409460879",
        "location": "Ahmedabad, Gujarat, India",
        "linkedin": "https://www.linkedin.com/in/sparsh-desai-b0b81446"
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

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
