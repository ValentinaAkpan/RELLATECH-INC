import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookConsultCTA } from "@/components/BookConsultCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

const AdministrativeSupport = () => {
  const benefits = [
    "Document preparation and formatting",
    "Data entry and database management",
    "Meeting coordination and note-taking",
    "Travel arrangements and expense tracking",
    "File organization and digital filing systems",
    "General office administration"
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your specific administrative needs, current processes, and pain points to create a customized support plan."
    },
    {
      step: "2",
      title: "System Setup",
      description: "I learn your preferences, tools, and workflows to provide seamless support that fits naturally into your operations."
    },
    {
      step: "3",
      title: "Ongoing Support",
      description: "Regular administrative assistance that adapts to your evolving needs, keeping everything organized and running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-primary-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-accent/10 px-4 py-2 rounded-full">
                <FileText className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">Core Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Administrative Support
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Reliable help with documents, tasks, planning, and day-to-day organisation so you can focus on what matters most.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent-light">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-primary-foreground/5 backdrop-blur-sm rounded-3xl border border-primary-foreground/10 flex items-center justify-center">
                <FileText className="w-48 h-48 text-primary-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional administrative support that keeps your business running smoothly. From document preparation to task management, everything handled with care and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            How It Works
          </h2>
          
          <div className="space-y-6">
            {process.map((item, index) => (
              <div key={index} className="bg-background border-2 border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground hidden lg:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Simplify Your Admin Work?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how administrative support can lighten your workload.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent-light">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <BookConsultCTA />

      <Footer />
    </div>
  );
};

export default AdministrativeSupport;
