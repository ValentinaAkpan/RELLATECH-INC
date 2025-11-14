import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">VP</span>
            </div>
            <span className="text-xl font-bold text-foreground">VirtualPea</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild variant="default">
            <a href="mailto:valentina@rellatech.io">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Professional Fractional Support for Your Business
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Welcome to <span className="text-primary font-semibold">VirtualPea</span>. I'm your trusted partner in streamlining the busywork so you can focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <a href="#services">Explore Services</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg">
              <a href="mailto:valentina@rellatech.io">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Features Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I help you reclaim your time with calm, clarity, and expert support so you can focus on what truly matters.
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
              Focus on What Matters. Let Me Handle the Rest.
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover my services tailored to your business needs
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how I can help streamline your business and give you back your time.
          </p>
          <Button size="lg" asChild className="text-lg">
            <a href="mailto:valentina@rellatech.io">Contact Me Today</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} VirtualPea. All Rights Reserved.</p>
          <p className="text-sm mt-2">Smart Support. Real Results.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
