import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, CheckCircle } from "lucide-react";

const AdministrativeSupport = () => {
  const benefits = [
    "Document preparation and formatting",
    "Data entry and database management",
    "Meeting coordination and note-taking",
    "Travel arrangements and expense tracking",
    "File organization and digital filing systems",
    "General office administration"
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
                  <FileText className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Administrative Support
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Reliable help with documents, tasks, planning, and day-to-day organisation.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <FileText className="w-48 h-48 text-white/40" />
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
            Professional administrative support that keeps your business running smoothly. From document preparation to task management, planning coordination to daily organizational needs—everything handled with care and attention to detail. Focus on your core work while the administrative foundation stays solid.
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

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          
          <div className="space-y-6">
            <div className="bg-background border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">1. Initial Consultation</h3>
              <p className="text-muted-foreground">
                We discuss your specific administrative needs, current processes, and pain points to create a customized support plan.
              </p>
            </div>

            <div className="bg-background border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">2. System Setup</h3>
              <p className="text-muted-foreground">
                I learn your preferences, tools, and workflows to provide seamless support that fits naturally into your operations.
              </p>
            </div>

            <div className="bg-background border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">3. Ongoing Support</h3>
              <p className="text-muted-foreground">
                Regular administrative assistance that adapts to your evolving needs, keeping everything organized and running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Simplify Your Admin Work?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how administrative support can lighten your workload.
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

export default AdministrativeSupport;
