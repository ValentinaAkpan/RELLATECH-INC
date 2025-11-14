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

    // Send notification to valentinaakpan@gmail.com with lead details
    const notificationResult = await resend.emails.send({
      from: "Rellatech <onboarding@resend.dev>",
      to: ["valentinaakpan@gmail.com"],
      subject: "New Workbook Download Lead",
      html: `
        <h2>New Workbook Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Downloaded:</strong> The Clarity Reset Workbook</p>
        <br>
        <p><em>Note: To send thank-you emails to leads, please verify your domain at <a href="https://resend.com/domains">resend.com/domains</a></em></p>
      `,
    });
    console.log("Notification email result:", notificationResult);

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
