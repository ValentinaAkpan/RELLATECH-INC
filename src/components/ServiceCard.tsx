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
        <div className={`absolute w-full h-full backface-hidden ${colorClass} bg-opacity-10 border-2 border-opacity-30 ${colorClass.replace('bg-', 'border-')} rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm`}>
          <div className={`w-16 h-16 rounded-full ${colorClass} flex items-center justify-center shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        </div>
        
        {/* Back of card */}
        <div className={`absolute w-full h-full backface-hidden ${colorClass} bg-opacity-20 border-2 ${colorClass.replace('bg-', 'border-')} border-opacity-40 rounded-xl p-6 flex flex-col justify-center rotate-y-180 shadow-lg backdrop-blur-sm`}>
          <div className="space-y-3">
            <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mx-auto shadow-md`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
            <p className="text-sm text-white/90 leading-relaxed text-center">{detailedDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
