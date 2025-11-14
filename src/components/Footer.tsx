import { Mail, MapPin, ArrowUp, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Location */}
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-2xl font-bold mb-4">
              Where We Work
            </h3>
            <p className="opacity-90 mb-4">
              Rellatech works with clients locally and internationally.
            </p>
            <p className="text-sm opacity-75">
              Based in Canada and serving clients virtually everywhere.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-2xl font-bold mb-4">
              Reach Out
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

          {/* Newsletter & Back to Top */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              JOIN OUR CIRCLE
            </h3>
            <div className="flex gap-2 mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6"
              >
                SUBMIT
              </Button>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 gap-2 w-full font-bold"
            >
              BACK TO THE TOP
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-75 flex items-center justify-center gap-2 flex-wrap">
            © 2023-2025 RELLATECH. Website by
            <a href="https://rellatech.io" className="hover:opacity-100 transition-opacity uppercase font-semibold">
              LARKSPUR CREATIVE
            </a>
            . Made in Canada 🇨🇦 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
