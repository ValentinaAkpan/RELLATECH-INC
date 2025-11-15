import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const BookConsultCTA = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-primary-dark">
      {/* Decorative curved lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-48 h-48 text-accent opacity-70" viewBox="0 0 200 200">
          <path
            d="M 0,100 Q 50,0 100,100 T 200,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
        <svg className="absolute top-0 right-0 w-96 h-96 text-primary-foreground opacity-20" viewBox="0 0 400 400">
          <path
            d="M 400,0 Q 300,100 400,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
        <svg className="absolute bottom-0 left-0 w-80 h-80 text-primary-foreground opacity-20" viewBox="0 0 300 300">
          <path
            d="M 0,300 Q 100,200 0,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Ready to reclaim your time and focus on what truly matters?
            </h2>
          </div>

          {/* Right side - CTA Card */}
          <div className="flex-shrink-0">
            <div className="bg-background rounded-3xl p-8 sm:p-12 shadow-2xl max-w-md">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
                Let&apos;s work together
              </h3>
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-accent hover:bg-accent-light text-accent-foreground text-lg font-bold py-6 h-auto rounded-xl"
              >
                <Link to="/contact">BOOK A CONSULTATION</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
