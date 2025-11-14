import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Let's Work Together
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Ready to streamline your business and reclaim your time? Get in touch today.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email Me</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Send me a message and I'll respond within 24 hours
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:valentina@rellatech.io">
                    valentina@rellatech.io
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Schedule a Call</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Book a free 30-minute consultation call
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:valentina@rellatech.io?subject=Schedule a Call">
                    Book a Call
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Quick Question</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Have a quick question? Drop me a line
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:valentina@rellatech.io?subject=Quick Question">
                    Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Alternative */}
          <Card className="border-border bg-muted/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">What Can I Help You With?</CardTitle>
              <CardDescription className="text-base">
                Whether you need executive support, project management, or technical assistance, I'm here to help streamline your business.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Response Time:</strong> I typically respond to all inquiries within 24 hours during business days.
                </p>
                <p>
                  <strong className="text-foreground">Availability:</strong> Monday - Friday, 9 AM - 5 PM EST
                </p>
                <p>
                  <strong className="text-foreground">Services:</strong> Executive Assistant, Administrative Support, Project Management, Web Development, Data Analysis, and more.
                </p>
              </div>
              <Button asChild size="lg" className="mt-8">
                <a href="mailto:valentina@rellatech.io">
                  Get Started Today
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
