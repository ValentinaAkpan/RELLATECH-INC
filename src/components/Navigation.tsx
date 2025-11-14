import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-foreground">Rellatech</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About Me
            </Link>
            <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/automation" className="text-muted-foreground hover:text-primary transition-colors">
              Automation
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild variant="default">
              <a href="mailto:valentina@rellatech.io">Get Started</a>
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
              About Me
            </Link>
            <Link
              to="/projects"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/automation"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Automation
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
