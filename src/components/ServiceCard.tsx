import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  href: string;
  className?: string;
  variant?: "default" | "emergency";
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  className,
  variant = "default" 
}: ServiceCardProps) {
  const isEmergency = variant === "emergency";
  
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-card-hover",
        "bg-gradient-card border-0 shadow-card",
        "min-h-[200px] p-6 flex flex-col items-center justify-center text-center",
        isEmergency && "bg-gradient-to-br from-emergency/5 to-emergency/10 border border-emergency/20",
        className
      )}
      onClick={() => window.location.href = href}
    >
      <div className={cn(
        "p-4 rounded-full mb-4 transition-colors duration-300",
        isEmergency 
          ? "bg-emergency/10 text-emergency group-hover:bg-emergency group-hover:text-emergency-foreground" 
          : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
      )}>
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className={cn(
        "text-lg font-semibold mb-2 transition-colors duration-300",
        isEmergency ? "text-emergency" : "text-card-foreground"
      )}>
        {title}
      </h3>
      
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300",
        isEmergency ? "from-emergency to-emergency" : "from-primary to-primary"
      )} />
    </Card>
  );
}