import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({ 
  title = "Want to learn how we're closing these gaps?",
  buttonText = "See How We're Taking Action",
  buttonLink = "/contact"
}: CTASectionProps) => {
  return (
    <section 
      className="relative min-h-[60vh] px-4 py-20 overflow-hidden flex items-center justify-center"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-white/85 dark:bg-background/85 backdrop-blur-md p-12 md:p-16 rounded-3xl shadow-2xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] leading-tight">
            {title}
          </h2>
          
          <Link to={buttonLink}>
            <Button 
              size="lg"
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
