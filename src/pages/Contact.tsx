import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
    businessName: "",
    supportType: "",
    timeline: "",
    message: "",
    consent: false
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

    // Check consent
    if (!formData.consent) {
      toast({
        title: "Error",
        description: "Please agree to be contacted regarding your inquiry",
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
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { data, error } = await supabase.functions.invoke('send-contact-form', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Thank you for reaching out",
        description: "Your message has been received and I will reply as soon as I can. Take a moment to breathe and know that support is on the way.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        businessName: "",
        supportType: "",
        timeline: "",
        message: "",
        consent: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try emailing hello@rellatech.io directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-white/70 dark:bg-background/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Reaching out for support should feel simple and welcoming. If you are carrying a heavy workload or you are not sure where to start, I am here to listen. Share a little about what you need, and I will guide you through the next steps with clarity and calm. Your message will come directly to me and will be held with care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
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

            {/* Right Side - Contact Form */}
            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
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
                  <Label htmlFor="businessName" className="text-base">Business Name</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Your business (optional)"
                    maxLength={100}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supportType" className="text-base">What kind of support are you looking for?</Label>
                  <Select value={formData.supportType} onValueChange={(value) => setFormData({ ...formData, supportType: value })}>
                    <SelectTrigger id="supportType" className="h-12 bg-background">
                      <SelectValue placeholder="Select support type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="administrative">Administrative support</SelectItem>
                      <SelectItem value="inbox-scheduling">Inbox and scheduling</SelectItem>
                      <SelectItem value="project-management">Project management</SelectItem>
                      <SelectItem value="marketing">Marketing help</SelectItem>
                      <SelectItem value="systems-automations">Systems and automations</SelectItem>
                      <SelectItem value="website-updates">Website updates</SelectItem>
                      <SelectItem value="one-time">One time project</SelectItem>
                      <SelectItem value="not-sure">I am not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-base">How soon do you need support?</Label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                    <SelectTrigger id="timeline" className="h-12 bg-background">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="two-weeks">Within 2 weeks</SelectItem>
                      <SelectItem value="one-month">Within a month</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Tell me a little about what you need help with *</Label>
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
