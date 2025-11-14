import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Award, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CTASectionProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({ 
  title = "Trusted by businesses across industries",
  buttonText = "Work With Me",
  buttonLink = "/contact"
}: CTASectionProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stats = [
    {
      icon: Building2,
      value: 50,
      suffix: "+",
      label: "Companies Served",
      description: "Businesses trust me with their operations"
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently excellent service delivery"
    },
    {
      icon: Users,
      value: 100,
      suffix: "+",
      label: "Projects Completed",
      description: "Successful outcomes delivered"
    },
    {
      icon: TrendingUp,
      value: 5,
      suffix: "+ Years",
      label: "Experience",
      description: "Proven expertise in virtual assistance"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.value;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building lasting partnerships through reliable, professional service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-background border-2 border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to={buttonLink}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
