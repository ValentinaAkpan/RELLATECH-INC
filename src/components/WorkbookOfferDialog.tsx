import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const WorkbookOfferDialog = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const hasSeenOffer = localStorage.getItem("hasSeenWorkbookOffer");
    if (!hasSeenOffer) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => setOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenWorkbookOffer", "true");
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-workbook-lead", {
        body: { name: name.trim(), email: email.trim() },
      });

      if (error) throw error;

      toast.success("Thank you! Your workbook is downloading now.");
      
      // Create a download link that works on mobile
      const link = document.createElement('a');
      link.href = "/The-Clarity-Reset-Workbook.pdf";
      link.download = "The-Clarity-Reset-Workbook.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-none bg-gradient-to-br from-primary/5 via-background to-secondary/5 shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
        
        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-2 justify-center">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Free Download
            </DialogTitle>
          </div>
          <DialogDescription className="text-base text-center leading-relaxed">
            Get your free copy of{" "}
            <span className="font-semibold text-foreground">
              The Clarity Reset Workbook
            </span>
            {" "}a practical guide to help you organize your thoughts and streamline your workflow.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Get Your Free Workbook
                </>
              )}
            </Button>
          </div>
        </form>

        <p className="text-xs text-center text-muted-foreground pt-2">
          We respect your privacy. Your information will never be shared.
        </p>
      </DialogContent>
    </Dialog>
  );
};
