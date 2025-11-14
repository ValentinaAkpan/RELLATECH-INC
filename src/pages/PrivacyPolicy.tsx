import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-foreground/90">
          <section>
            <p className="text-lg">
              At Rellatech Virtual Assistant Services, we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, business name</li>
              <li><strong>Business Information:</strong> Details about your business, industry, and service needs</li>
              <li><strong>Account Credentials:</strong> Login information for platforms we manage on your behalf (stored securely)</li>
              <li><strong>Project Details:</strong> Files, documents, and content you share for project completion</li>
              <li><strong>Communication Records:</strong> Emails, messages, and notes from our interactions</li>
              <li><strong>Payment Information:</strong> Billing details and payment history (processed through secure third-party payment processors)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our virtual assistant services</li>
              <li>Communicate with you about projects, updates, and service-related matters</li>
              <li>Process payments and maintain financial records</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send occasional newsletters and service announcements (with your consent)</li>
              <li>Comply with legal obligations and protect our business interests</li>
              <li>Analyze and improve our service offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p>
              We respect your privacy and do not sell or rent your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service Providers:</strong> With trusted third-party tools and platforms necessary to deliver our services (e.g., project management software, email services)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our legal rights</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (with notice to affected users)</li>
            </ul>
            <p className="mt-4">
              All third-party service providers are required to maintain the confidentiality and security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure data storage and encrypted communications</li>
              <li>Access controls limiting who can view your information</li>
              <li>Regular security assessments and updates</li>
              <li>Secure password management systems for account credentials</li>
              <li>Secure file transfer protocols for sensitive documents</li>
            </ul>
            <p className="mt-4">
              While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. 
              We cannot guarantee absolute security but are committed to maintaining industry-standard protections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide our services to you</li>
              <li>Comply with legal, accounting, or reporting requirements</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Maintain business records as required by law</li>
            </ul>
            <p className="mt-4">
              When information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Your Rights and Choices</h2>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request your data in a commonly used format</li>
              <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:valentina@rellatech.io" className="text-primary hover:underline">
                valentina@rellatech.io
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve user experience</li>
              <li>Enable certain website features</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected information from a child, we will 
              take steps to delete that information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. International Data Transfers</h2>
            <p>
              While we are based in Canada, we work with clients internationally. Your information may be transferred to 
              and processed in countries outside your country of residence. We ensure appropriate safeguards are in place 
              for any international data transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. 
              We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:valentina@rellatech.io" className="text-primary hover:underline">
                  valentina@rellatech.io
                </a>
              </p>
              <p>
                <strong>Website:</strong> www.rellatech.io
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Last Updated: November 2025
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Your privacy matters to us. We are committed to maintaining the trust you place in us when you share your information.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
