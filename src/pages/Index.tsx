import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, FileText, TrendingUp, Megaphone, Settings, Globe, GraduationCap, Film, BookOpen, BarChart, Smartphone, Palette, Presentation } from "lucide-react";
import { Link } from "react-router-dom";
import rellatechLogo from "@/assets/rellatech-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] px-4 py-20 bg-gradient-to-br from-primary/90 via-primary to-primary/80 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-accent/20 blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-accent/20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-primary-foreground/10 blur-lg"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Text Content */}
            <div className="space-y-8 text-primary-foreground">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Rellatech Virtual Assistant Services
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed">
                Support that brings calm, clarity and structure back into your work.
              </p>
              
              <p className="text-lg md:text-xl opacity-90">
                Whether you are across the street or across the world, your days can feel lighter and more organised.
              </p>

              <div className="pt-4 space-y-4">
                <Button size="lg" asChild className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
                <p className="text-sm opacity-80">
                  Based in Canada and serving clients virtually everywhere.
                </p>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center items-center">
              <img
                src={rellatechLogo}
                alt="Rellatech Virtual Assistant Services"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Text */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Work becomes easier when you do not carry everything alone. Rellatech is here to support individuals, teams and businesses who want their days to feel more focused and more under control.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I bring a steady presence, thoughtful communication and a traditional sense of care to the work behind the scenes. You receive help that respects your time and strengthens the foundation of your business or personal workload. When your operations flow smoothly, you can lead with a clearer mind and a calmer heart.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Focus on Growing Your Business. Let Me Handle the Rest.
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional fractional services for Canadian businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <CardTitle className="text-primary">Executive Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimizes workflows and handles both personal and professional tasks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <CardTitle className="text-primary">Administrative Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manages inbox, schedules, and daily operations smoothly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <CardTitle className="text-primary">Personal Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Helps with errands, scheduling, and personal tasks to save time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <CardTitle className="text-primary">Data Analyst</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Analyzes data trends to drive smart decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <CardTitle className="text-primary">Website Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creates and maintains professional websites for your business.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <CardTitle className="text-primary">Project Manager</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Keeps your projects on track and team coordinated.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Rellatech */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Clients Choose Rellatech</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              People come to Rellatech because they want support that feels dependable, thoughtful and human. They want someone who listens, understands their rhythm and treats their workload with the same care they would give it themselves.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I become an extension of your team. I help carry the details so you can focus on the future you are building. When your operations are organised, your confidence rises and your days feel more grounded.
            </p>
          </div>
        </div>
      </section>

      {/* How We Begin */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">How We Begin</h2>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Your first step is easy. Book a consultation and share what you need. Together we will shape a plan that lifts the weight from your shoulders and brings steady order to your days.
          </p>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            You do not have to do everything alone. Let your work feel clear. Let your path feel calm.
          </p>
          <div className="space-y-4">
            <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <p className="text-muted-foreground">
              Email: <a href="mailto:hello@rellatech.io" className="text-primary hover:underline">hello@rellatech.io</a>
            </p>
          </div>
        </div>
      </section>

      {/* SEO Closing Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rellatech provides virtual assistant services, administrative support, workflow organisation, marketing assistance, technical setup and creative services for individuals, teams and businesses across many industries. Based in Canada and supporting clients virtually worldwide, Rellatech offers reliable help that brings clarity and calm back into your work.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
