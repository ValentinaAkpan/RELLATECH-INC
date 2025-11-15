import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  colorClass: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative h-48 cursor-pointer transition-all duration-300 hover-lift bg-card hover:bg-primary rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 shadow-elegant">
      <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-md transition-all duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-white leading-tight transition-colors duration-300">{title}</h3>
      <p className="text-xs text-muted-foreground group-hover:text-white/90 leading-relaxed line-clamp-2 transition-colors duration-300">{description}</p>
    </div>
  );
};
