import { Mail, MapPin, ArrowUp, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import flagCanada from "@/assets/flag-canada.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary text-primary-foreground py-16 px-4 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-accent/20" style={{ transform: 'translate(-50%, -50%)' }}></div>
      <div className="absolute top-20 left-0 w-20 h-20 rounded-full bg-accent/20" style={{ transform: 'translateX(-50%)' }}></div>
      <div className="absolute top-40 left-0 w-16 h-16 rounded-full bg-accent/20" style={{ transform: 'translateX(-50%)' }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-accent/20" style={{ transform: 'translate(50%, 50%)' }}></div>
      <div className="absolute bottom-20 right-0 w-24 h-24 rounded-full bg-accent/20" style={{ transform: 'translateX(50%)' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Location */}
          <div className="border-l-4 border-accent pl-4 sm:pl-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Where I Work
            </h3>
            <p className="text-sm sm:text-base opacity-90 mb-3 sm:mb-4">
              I work with clients locally and internationally.
            </p>
            <p className="text-xs sm:text-sm opacity-75">
              Based in Canada and serving entrepreneurs, business owners, teams, coaches, and professionals globally.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-2xl font-bold mb-4">
              Contact Me
            </h3>
            <a 
              href="mailto:valentina@rellatech.io" 
              className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2 mb-6"
            >
              <Mail className="w-5 h-5" />
              valentina@rellatech.io
            </a>
            
            <h4 className="text-xl font-bold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/rellatech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://ca.linkedin.com/company/rellatech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Access */}
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-2xl font-bold mb-4">
              Quick Access
            </h3>
            <nav className="space-y-2">
              <a href="/about" className="block opacity-90 hover:opacity-100 transition-opacity">
                About
              </a>
              <a href="/services" className="block opacity-90 hover:opacity-100 transition-opacity">
                Services
              </a>
              <a href="/testimonials" className="block opacity-90 hover:opacity-100 transition-opacity">
                Testimonials
              </a>
              <a href="/blog" className="block opacity-90 hover:opacity-100 transition-opacity">
                Blog
              </a>
              <a href="/faq" className="block opacity-90 hover:opacity-100 transition-opacity">
                FAQ
              </a>
              <a href="/contact" className="block opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </a>
            </nav>
          </div>

          {/* Back to Top */}
          <div className="flex items-end justify-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 gap-2 w-full md:w-auto font-bold"
            >
              BACK TO THE TOP
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <span className="text-sm font-semibold text-accent-foreground">Made in Canada</span>
                <img src={flagCanada} alt="Canada flag" className="h-6 rounded-sm shadow-md" />
              </div>
            </div>
            <p className="text-sm opacity-75">
              © 2025 Rellatech Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
