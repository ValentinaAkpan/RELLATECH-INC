import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle } from "lucide-react";

const InboxCalendar = () => {
  const benefits = [
    "Email prioritization and organization",
    "Timely responses to inquiries",
    "Calendar scheduling and coordination",
    "Meeting reminders and preparation",
    "Conflict resolution and rescheduling",
    "Follow-up management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-background/90 backdrop-blur-sm p-8 rounded-lg space-y-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-accent-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Inbox and Calendar Management
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Clear scheduling, structured communication, and reminders that keep your day steady.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Calendar className="w-48 h-48 text-white/40" />
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
            Transform your inbox from overwhelming to organized. Professional email management with prioritization, timely responses, and follow-ups. Calendar coordination that eliminates double-booking and ensures you never miss important meetings. Your communication systems working seamlessly.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
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
              <h3 className="text-xl font-bold text-foreground mb-3">1. Access Setup</h3>
              <p className="text-muted-foreground">
                Secure access to your email and calendar systems with clear guidelines on priorities and preferences.
              </p>
            </div>

            <div className="bg-background border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">2. System Organization</h3>
              <p className="text-muted-foreground">
                Create filters, folders, and scheduling systems that bring immediate clarity to your communications.
              </p>
            </div>

            <div className="bg-background border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">3. Daily Management</h3>
              <p className="text-muted-foreground">
                Regular inbox monitoring, email responses, and calendar updates keeping everything flowing smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Reclaim Your Inbox?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's transform your email and calendar chaos into organized systems.
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

export default InboxCalendar;
