import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Users, Shield, TrendingUp, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About Valentina
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            I help you reclaim your time with calm, clarity, and expert support so you can focus on what truly matters.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Work With Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional fractional support tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Calm from Chaos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I organize, automate, and streamline your operations for peace of mind. No more scattered processes or missed deadlines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Inbox Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I tame your inbox and set up workflows to save you hours each week. Efficient communication systems that work for you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Trusted Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I work alongside you, so you never feel alone in your business journey. Your success is my priority.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Clarity & Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I bring clarity to your priorities and care deeply about your success. Every task handled with precision and attention.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I help you scale sustainably with systems that grow with you. Build a foundation for long-term success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Time Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cut costs and reclaim your time by reducing hiring overhead by up to 90%. Focus on what you do best.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">My Story</h2>
          </div>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-4 text-lg">
              With years of experience in business support and operations, I understand the challenges that entrepreneurs and business owners face every day. The endless to-do lists, the mounting inbox, and the struggle to find time for strategic growth.
            </p>
            <p className="mb-4 text-lg">
              That's why I created Rellatech – to provide professional, fractional support that truly makes a difference. I combine technical expertise with a personal touch, ensuring that your business runs smoothly while you focus on the big picture.
            </p>
            <p className="text-lg">
              Whether you need help with daily operations, project management, or technical solutions, I'm here to support your journey to success.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
