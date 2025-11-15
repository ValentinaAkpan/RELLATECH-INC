import { LucideIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  colorClass: string;
}

export const ServiceCard = ({ icon: Icon, title, description, detailedDescription, colorClass }: ServiceCardProps) => {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <div className="group relative h-48 cursor-pointer transition-smooth hover-lift">
          <div className={`w-full h-full ${colorClass} rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 shadow-elegant`}>
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:scale-110 transition-smooth">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white leading-tight">{title}</h3>
            <p className="text-xs text-white/90 leading-relaxed line-clamp-2">{description}</p>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-80 p-6 shadow-xl border-2 bg-card/95 backdrop-blur-xl" 
        side="top"
        sideOffset={5}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center shadow-md`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold text-foreground">{title}</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {detailedDescription}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
