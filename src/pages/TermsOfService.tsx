import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using Rellatech Virtual Assistant Services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Services Provided</h2>
            <p>
              Rellatech provides virtual assistant services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Administrative support</li>
              <li>Inbox and calendar management</li>
              <li>Project management</li>
              <li>Marketing assistance</li>
              <li>Systems and automation setup</li>
              <li>Website updates and maintenance</li>
              <li>Graphic design and content creation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Client Responsibilities</h2>
            <p>
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information necessary for service delivery</li>
              <li>Respond to communications in a timely manner</li>
              <li>Provide necessary access to accounts, tools, and platforms required for work</li>
              <li>Make timely payments as agreed upon</li>
              <li>Treat our team with respect and professionalism</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Payment Terms</h2>
            <p>
              Payment terms will be outlined in individual service agreements. Standard terms include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is due according to the agreed schedule (hourly, project-based, or retainer)</li>
              <li>Invoices are typically due within 7 days of receipt</li>
              <li>Late payments may result in suspension of services</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Confidentiality</h2>
            <p>
              We understand the sensitive nature of the information you may share with us. Rellatech commits to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of all client information</li>
              <li>Not sharing client data with third parties without explicit consent</li>
              <li>Using client information solely for the purpose of providing agreed services</li>
              <li>Implementing reasonable security measures to protect client data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Work created for clients becomes the property of the client upon full payment</li>
              <li>Clients retain ownership of all materials and content provided to us</li>
              <li>Rellatech retains the right to use completed work in our portfolio unless otherwise agreed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Service Modifications and Termination</h2>
            <p>
              Either party may terminate services with written notice. Terms include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum 14 days notice for termination of ongoing retainer agreements</li>
              <li>Immediate termination in cases of breach of terms</li>
              <li>All outstanding invoices must be paid upon termination</li>
              <li>We reserve the right to modify services or these terms with reasonable notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              Rellatech strives for excellence in all work, however:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our liability is limited to the amount paid for services in the relevant period</li>
              <li>We are not responsible for third-party platform outages or technical issues beyond our control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Communication</h2>
            <p>
              By using our services, you agree to receive communications from Rellatech regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service updates and project-related matters</li>
              <li>Invoices and payment reminders</li>
              <li>Occasional newsletters and service announcements (you may opt out)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of Canada. Any disputes will be resolved 
              through good faith negotiation or, if necessary, through the courts of competent jurisdiction in Canada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Significant changes will be communicated 
              to active clients. Continued use of services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Last Updated: November 2025
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              If you have questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:hello@rellatech.io" className="text-primary hover:underline">
                hello@rellatech.io
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
