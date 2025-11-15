import { Mail, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Rellatech</h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional virtual assistant services helping entrepreneurs and businesses grow with confidence.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/administrative-support" className="text-muted-foreground hover:text-primary transition-colors">
                Administrative Support
              </Link>
              <Link to="/services/inbox-calendar" className="text-muted-foreground hover:text-primary transition-colors">
                Inbox & Calendar
              </Link>
              <Link to="/services/social-media-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                Social Media
              </Link>
              <Link to="/services/crms-automation" className="text-muted-foreground hover:text-primary transition-colors">
                CRMs & Automation
              </Link>
            </nav>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
            <a 
              href="mailto:valentina@rellatech.io" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">valentina@rellatech.io</span>
            </a>
            
            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/rellatech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://ca.linkedin.com/company/rellatech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rellatech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
