import { Mail, MapPin, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary text-primary-foreground py-16 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-accent/10 blur-xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Where I Work
            </h3>
            <p className="opacity-90 mb-4">
              Rellatech works with clients locally and internationally.
            </p>
            <p className="text-sm opacity-75">
              Based in Canada and serving clients virtually everywhere.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Reach Out
            </h3>
            <a 
              href="mailto:valentina@rellatech.io" 
              className="opacity-90 hover:opacity-100 transition-opacity block mb-2"
            >
              valentina@rellatech.io
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-start md:items-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 gap-2"
            >
              BACK TO THE TOP
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-75 flex items-center justify-center gap-2 flex-wrap">
            © 2024-2025 rellatech. Website by
            <a href="https://rellatech.io" className="hover:opacity-100 transition-opacity">
              rellatech.io
            </a>
            . Made in Canada 🇨🇦 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
