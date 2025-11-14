import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  colorClass: string;
}

export const ServiceCard = ({ icon: Icon, title, description, detailedDescription, colorClass }: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-card border-2 border-border rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow">
          <div className={`w-16 h-16 rounded-full ${colorClass} flex items-center justify-center shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          <p className="text-xs text-primary font-medium mt-2">Click to learn more</p>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-xl p-6 flex flex-col justify-center rotate-y-180 shadow-lg">
          <div className="space-y-3">
            <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mx-auto shadow-md`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground text-center">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed text-center">{detailedDescription}</p>
            <p className="text-xs text-primary font-medium text-center mt-2">Click to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
};
