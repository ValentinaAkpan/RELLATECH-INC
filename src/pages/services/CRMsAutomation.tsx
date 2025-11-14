import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, CheckCircle } from "lucide-react";

const CRMsAutomation = () => {
  const benefits = [
    "HubSpot setup and management",
    "Keap/Infusionsoft support",
    "Mailchimp campaign coordination",
    "Kartra system organization",
    "Workflow automation setup",
    "Data cleanup and maintenance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-background/90 backdrop-blur-sm p-8 rounded-lg space-y-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <Settings className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  CRMs and Automation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Support with tools like HubSpot, Keap, Mailchimp, and Kartra to keep your systems clean and easy to follow.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Settings className="w-48 h-48 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What's Included
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Streamline your business processes with smart automation and CRM management. Expert support for HubSpot, Keap, Mailchimp, and Kartra. Keep your customer relationships organized, your workflows efficient, and your systems running smoothly. Save hours every week with intelligent automation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's optimize your CRM systems and save hours every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMsAutomation;
