import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WorkbookLeadRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: WorkbookLeadRequest = await req.json();
    console.log("Received workbook lead:", { name, email });

    // Send notification to you
    const notificationResult = await resend.emails.send({
      from: "Rellatech <onboarding@resend.dev>",
      to: ["valentinaakpan@gmail.com"],
      subject: "New Workbook Download Lead",
      html: `
        <h2>New Workbook Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Downloaded:</strong> The Clarity Reset Workbook</p>
      `,
    });
    console.log("Notification email result:", notificationResult);

    // Send thank you email to the lead
    const thankYouResult = await resend.emails.send({
      from: "Rellatech <onboarding@resend.dev>",
      to: [email],
      subject: "Your Clarity Reset Workbook is Ready!",
      html: `
        <h1>Thank you, ${name}!</h1>
        <p>Your download of <strong>The Clarity Reset Workbook</strong> is ready.</p>
        <p>We hope this workbook helps you organize your thoughts and streamline your workflow.</p>
        <p>If you have any questions or need assistance, feel free to reach out.</p>
        <br>
        <p>Best regards,<br>Valentina<br>Rellatech Virtual Assistant Services</p>
      `,
    });
    console.log("Thank you email result:", thankYouResult);

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-workbook-lead function:", error);
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
