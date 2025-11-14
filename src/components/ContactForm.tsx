import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState(Date.now());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    supportType: "",
    timeline: "",
    message: "",
    consent: false,
    website: "" // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Honeypot check - if filled, it's a bot
    if (formData.website) {
      setIsSubmitting(false);
      return;
    }

    // Time check - if submitted too fast, likely a bot
    const timeSpent = Date.now() - formStartTime;
    if (timeSpent < 2000) {
      toast({
        title: "Error",
        description: "Please take a moment to review your message",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

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
      const { data, error } = await supabase.functions.invoke('send-contact-form', {
        body: {
          ...formData,
          formStartTime
        }
      });

      if (error) throw error;
      
      // Check if the response indicates success
      if (data && !data.success && data.error) {
        throw new Error(data.error);
      }

      toast({
        title: "Thank you for reaching out",
        description: "Your message has been received and I will reply as soon as I can. Take a moment to breathe and know that support is on the way.",
        duration: 6000,
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
        consent: false,
        website: ""
      });
    } catch (error) {
      console.error('Form submission error:', error);
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
    <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-lg border border-primary/30 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users, but bots will fill it */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        
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
          <Select
            value={formData.supportType}
            onValueChange={(value) => setFormData({ ...formData, supportType: value })}
          >
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
          <Select
            value={formData.timeline}
            onValueChange={(value) => setFormData({ ...formData, timeline: value })}
          >
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
            placeholder="Share what's on your mind..."
            required
            rows={6}
            maxLength={2000}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground">
            {formData.message.length}/2000 characters
          </p>
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            required
          />
          <label
            htmlFor="consent"
            className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
          >
            I agree to be contacted by Rellatech regarding my inquiry. *
          </label>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your information is held with care and will never be shared.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
