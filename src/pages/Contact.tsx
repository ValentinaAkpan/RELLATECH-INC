import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare, MapPin } from "lucide-react";

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
            Serving Canadian businesses from coast to coast. Get your free guide and take back control of your time.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <ContactForm />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Other Ways to Connect</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
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

            <Card className="border-border text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Serving All of Canada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Remote support for businesses across Canada
                </CardDescription>
                <p className="text-sm font-semibold text-primary">
                  Coast to Coast Coverage
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Why Canadian Businesses Choose Rellatech</CardTitle>
              <CardDescription className="text-base">
                From solo entrepreneurs to scaling teams, I help Canadian businesses reclaim their time and focus on growth.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Response Time:</strong> I respond to all inquiries within 24 hours during business days.
                </p>
                <p>
                  <strong className="text-foreground">Location:</strong> Serving businesses across Canada remotely
                </p>
                <p>
                  <strong className="text-foreground">Team Sizes:</strong> From solo entrepreneurs to teams of 50+
                </p>
                <p>
                  <strong className="text-foreground">Services:</strong> Executive assistance, administrative support, project management, web development, data analysis, automation, and more.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
