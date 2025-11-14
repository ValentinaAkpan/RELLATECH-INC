import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

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
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormRequest = await req.json();
    
    console.log("Received contact form submission:", {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
    });

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

    const currentDate = new Date();
    const dateStr = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const timeStr = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    // Send notification email to hello@rellatech.io
    const notificationResponse = await resend.emails.send({
      from: "Rellatech Contact Form <onboarding@resend.dev>",
      replyTo: formData.email,
      to: ["hello@rellatech.io"],
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

    // Send auto-reply to the user
    const autoReplyResponse = await resend.emails.send({
      from: "Rellatech <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting Rellatech",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2c5f7c;">Thank you for your message</h2>
          
          <p style="line-height: 1.6; color: #374151;">
            Thank you for your message. I have received your inquiry and will review it shortly. 
            I will reach out with next steps as soon as possible.
          </p>
          
          <p style="line-height: 1.6; color: #374151;">
            I hope your day feels a little lighter knowing you no longer have to carry everything alone.
          </p>
          
          <p style="margin-top: 30px; color: #374151;">
            Warmly,<br>
            <strong>Rellatech Virtual Assistant Services</strong>
          </p>
        </div>
      `,
    });

    console.log("Auto-reply email sent:", autoReplyResponse);

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
