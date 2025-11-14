import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, CheckCircle, TrendingUp, Shield, Users, Briefcase, Puzzle, Handshake, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import rellatechLogo from "@/assets/rellatech-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[85vh] px-4 py-20 bg-gradient-to-br from-primary/90 via-primary to-primary/80 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-accent/20 blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-accent/20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-primary-foreground/10 blur-lg"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Text Content */}
            <div className="space-y-8 text-primary-foreground">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase">
                Welcome to<br />Rellatech
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold uppercase leading-tight">
                Fractional Operations, Business Management and Virtual Executive Assistance
              </h2>
              
              <p className="text-lg md:text-xl italic opacity-90 max-w-lg">
                Experience the synergy of organization and growth - where your vision gets the powerhouse support it deserves. Serving Canadian businesses coast to coast.
              </p>

              <div className="pt-4">
                <Button size="lg" asChild className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">Book a Call Today</Link>
                </Button>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center items-center">
              <img
                src={rellatechLogo}
                alt="Rellatech - Smart Support, Real Result"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-12 text-center">
            <p className="text-primary-foreground text-xl md:text-2xl italic opacity-90">
              "Rellatech is largely becoming my secret ingredient in my business!"
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-accent mx-auto flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground uppercase">Professional</h3>
              <p className="text-muted-foreground">Expert support tailored to your business needs</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-accent mx-auto flex items-center justify-center">
                <Puzzle className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground uppercase">Holistic</h3>
              <p className="text-muted-foreground">Comprehensive solutions for every aspect of your operations</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-accent mx-auto flex items-center justify-center">
                <Handshake className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground uppercase">Authentic</h3>
              <p className="text-muted-foreground">Genuine partnership and trusted collaboration</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-accent mx-auto flex items-center justify-center">
                <LineChart className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground uppercase">Progressive</h3>
              <p className="text-muted-foreground">Forward-thinking strategies for sustainable growth</p>
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
