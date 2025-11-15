import { Mail, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-primary-dark text-primary-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        {/* Top Section with Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold">Rellatech</h3>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-md">
              Professional virtual assistant services helping entrepreneurs and businesses focus on what truly matters.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/rellatech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-accent hover:bg-accent-light flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-accent-foreground" />
              </a>
              <a 
                href="https://ca.linkedin.com/company/rellatech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-accent hover:bg-accent-light flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-accent-foreground" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-accent">Services</h4>
              <nav className="flex flex-col space-y-3">
                <Link to="/services/administrative-support" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Administrative Support
                </Link>
                <Link to="/services/inbox-calendar" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Inbox & Calendar
                </Link>
                <Link to="/services/social-media-marketing" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Social Media
                </Link>
                <Link to="/services/crms-automation" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  CRMs & Automation
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-accent">Company</h4>
              <nav className="flex flex-col space-y-3">
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About
                </Link>
                <Link to="/projects" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Projects
                </Link>
                <Link to="/testimonials" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Testimonials
                </Link>
                <Link to="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Blog
                </Link>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-primary-foreground/20 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-accent">Get in Touch</h4>
              <a 
                href="mailto:valentina@rellatech.io" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors group text-lg"
              >
                <Mail className="w-5 h-5" />
                valentina@rellatech.io
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/privacy-policy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden sm:block text-primary-foreground/40">•</span>
              <Link to="/terms-of-service" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <span className="hidden sm:block text-primary-foreground/40">•</span>
              <p className="text-sm text-primary-foreground/60">
                © {new Date().getFullYear()} Rellatech
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
