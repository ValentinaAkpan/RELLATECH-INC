import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    topic: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName}`);
      const body = encodeURIComponent(
        `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nCompany: ${formData.company || "Not provided"}\nTopic: ${formData.topic || "Not selected"}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:valentina@rellatech.io?subject=${subject}&body=${body}`;

      toast({
        title: "Success!",
        description: "Your email client will open. Please send the message to complete your submission.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        topic: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try emailing valentina@rellatech.io directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Let's Connect
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to bring calm and clarity to your workload? I'd love to hear about what you're working on and explore how I can support you.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Get In Touch</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Fill out the form and I'll get back to you within 24 hours. Or email me directly at:
                  </p>
                  <a 
                    href="mailto:valentina@rellatech.io" 
                    className="text-2xl font-semibold text-primary hover:underline"
                  >
                    valentina@rellatech.io
                  </a>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Based in Canada</h3>
                  <p className="text-muted-foreground">
                    Serving clients locally and internationally through virtual support.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First name"
                      required
                      maxLength={50}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last name"
                      required
                      maxLength={50}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    maxLength={255}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company (optional)"
                    maxLength={100}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic" className="text-base">What would you like to connect about?</Label>
                  <Select value={formData.topic} onValueChange={(value) => setFormData({ ...formData, topic: value })}>
                    <SelectTrigger className="h-12 bg-background">
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="services">Services & Pricing</SelectItem>
                      <SelectItem value="consultation">Book a Consultation</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your needs and how I can help..."
                    required
                    maxLength={1000}
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full text-lg h-12"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
};

export default Contact;
