import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import rellatechLogo from "@/assets/rellatech-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Administrative Support", slug: "administrative-support" },
    { name: "Inbox and Calendar Management", slug: "inbox-calendar" },
    { name: "Social Media and Marketing", slug: "social-media-marketing" },
    { name: "CRMs and Automation", slug: "crms-automation" },
    { name: "Web Services", slug: "web-services" },
    { name: "LMS and Online Courses", slug: "lms-courses" },
    { name: "eBook Design", slug: "ebook-design" },
    { name: "Business Reports", slug: "business-reports" },
    { name: "Graphic and Print Design", slug: "graphic-design" },
    { name: "Pitch Decks", slug: "pitch-decks" }
  ];

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={rellatechLogo} alt="Rellatech" className="h-14 w-14 md:h-16 md:w-16" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              HOME
            </Link>
            <Link to="/about" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              ABOUT
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-primary-foreground hover:text-accent transition-colors font-medium">
                SERVICES
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2 max-h-96 overflow-y-auto">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-border my-2"></div>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/testimonials" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              TESTIMONIALS
            </Link>
            <Link to="/blog" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              BLOG
            </Link>
            <Link to="/faq" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              FAQ
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6">
              <Link to="/contact">
                CONTACT US
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            {/* Services Mobile Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/services"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/faq"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/testimonials"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild variant="default" className="w-full">
              <a href="mailto:valentina@rellatech.io">Get Started</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
