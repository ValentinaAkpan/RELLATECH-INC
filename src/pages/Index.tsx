import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Are you overwhelmed with business tasks yet underwhelmed with business growth?
            </h1>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground font-medium">
                Get back in the CEO seat!
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                Grab your guide and get relief today.
              </p>
            </div>

            <div className="pt-6">
              <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                <Link to="/contact">Get Your Free Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Message */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Whether you're a <span className="text-primary font-semibold">solo entrepreneur</span>, a <span className="text-primary font-semibold">small team</span>, or <span className="text-primary font-semibold">scaling fast</span> across Canada, Rellatech provides the fractional support you need to focus on what truly matters.
          </p>
        </div>
      </section>

      {/* About Features Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Supporting Canadian Businesses Coast to Coast</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From solo entrepreneurs to growing teams, I help Canadian businesses reclaim their time with calm, clarity, and expert fractional support tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Calm from Chaos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I organize, automate, and streamline your operations for peace of mind.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Inbox Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I tame your inbox and set up workflows to save you hours each week.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Trusted Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I work alongside you, so you never feel alone in your business journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Clarity & Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I bring clarity to your priorities and care deeply about your success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I help you scale sustainably with systems that grow with you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Time Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cut costs and reclaim your time by reducing hiring overhead by up to 90%.
                </CardDescription>
              </CardContent>
            </Card>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Take Back Your Time?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Grab your guide and get relief today. Serving small teams and large teams across Canada.
          </p>
          <Button size="lg" asChild className="text-lg">
            <Link to="/contact">Get Your Free Guide</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
