import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  firstName: string;
  lastName: string;
  email: string;
  businessName?: string;
  supportType: string;
  timeline: string;
  message: string;
  consent: boolean;
  website?: string; // Honeypot
  formStartTime: number;
}

// Simple in-memory rate limiting (resets on function cold start)
const submissionTracker = new Map<string, number[]>();

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const submissions = submissionTracker.get(ip) || [];
  
  // Remove submissions older than 1 hour
  const recentSubmissions = submissions.filter(time => now - time < 3600000);
  
  // Allow max 3 submissions per hour
  if (recentSubmissions.length >= 3) {
    return true;
  }
  
  recentSubmissions.push(now);
  submissionTracker.set(ip, recentSubmissions);
  return false;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormRequest = await req.json();
    
    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limiting
    if (isRateLimited(clientIp)) {
      console.log("Rate limit exceeded for IP:", clientIp);
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    console.log("Received contact form submission:", {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      ip: clientIp,
    });

    // Honeypot validation - if website field is filled, it's a bot
    if (formData.website && formData.website.trim() !== "") {
      console.log("Honeypot triggered - spam detected");
      return new Response(
        JSON.stringify({ success: true }), // Fake success to fool bots
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Time validation - form should take at least 2 seconds to fill
    const timeSpent = Date.now() - formData.formStartTime;
    if (timeSpent < 2000) {
      console.log("Form submitted too quickly - likely a bot");
      return new Response(
        JSON.stringify({ error: "Please take your time to fill out the form" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.consent) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate field lengths
    if (formData.firstName.length > 50 || formData.lastName.length > 50) {
      return new Response(
        JSON.stringify({ error: "Name fields too long" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (formData.email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Email too long" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (formData.message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message too long" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const currentDate = new Date();
    const dateStr = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const timeStr = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    // Send notification email to valentinaakpan@gmail.com
    const notificationResponse = await resend.emails.send({
      from: "Rellatech Contact Form <onboarding@resend.dev>",
      replyTo: formData.email,
      to: ["valentinaakpan@gmail.com"],
      subject: `New Rellatech Inquiry from ${formData.firstName} ${formData.lastName}, ${dateStr} at ${timeStr}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5f7c;">New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Business Name:</strong> ${formData.businessName || "Not provided"}</p>
            <p><strong>Support Type:</strong> ${formData.supportType}</p>
            <p><strong>Timeline:</strong> ${formData.timeline}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #2c5f7c;">Message:</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Submitted on ${dateStr} at ${timeStr}
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationResponse);
    
    // Note: Auto-reply email to user removed - requires domain verification at resend.com/domains

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Thank you for your message. I will be in touch shortly."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
