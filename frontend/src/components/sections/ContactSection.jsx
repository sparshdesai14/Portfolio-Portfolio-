import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { personalInfo } from '@/data/portfolioData';
import { 
  Mail, Phone, MapPin, Linkedin, Send, Download,
  CheckCircle2, ExternalLink, MessageCircle
} from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*
━━━━━━━━━━━━━━━━━━━━━

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

━━━━━━━━━━━━━━━━━━━━━
_Sent from Portfolio Website_
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (without +)
    const whatsappNumber = '919409460879';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Show success toast
    toast.success('Redirecting to WhatsApp!', {
      description: 'Your message is ready to send.'
    });

    // Small delay for toast to show
    setTimeout(() => {
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      action: 'Send Email'
    },
    {
      icon: Phone,
      label: 'Call / Message',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: personalInfo.phone,
      href: `https://wa.me/919409460879`,
      action: 'Chat on WhatsApp'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      action: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
      action: 'View Profile'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="section-title text-foreground mb-4">
            Let&apos;s{' '}
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              target={info.icon === Linkedin || info.icon === MessageCircle ? '_blank' : undefined}
                              rel={info.icon === Linkedin || info.icon === MessageCircle ? 'noopener noreferrer' : undefined}
                              className="text-foreground hover:text-primary transition-colors truncate block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground truncate">{info.value}</p>
                          )}
                        </div>
                        {info.href && (
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a href={`https://wa.me/919409460879`} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full gap-2 border-green-500/30 text-green-500 hover:bg-green-500/10">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="block">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Download CV Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Download My Resume
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a detailed overview of my experience and qualifications
                </p>
                <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="premium" className="w-full gap-2">
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-card border-border">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Send Message via WhatsApp
                    </h3>
                    <p className="text-sm text-muted-foreground">Fill the form and it will open WhatsApp</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        minLength={2}
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion / Opportunity / Other"
                      required
                      minLength={3}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={5}
                      required
                      minLength={10}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Clicking submit will open WhatsApp with your message pre-filled
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
