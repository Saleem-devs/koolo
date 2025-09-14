import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tagline?: string;
  color: "primary" | "secondary" | "accent";
}

export default function FeatureCard({
  icon,
  title,
  description,
  tagline,
  color,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-all duration-500">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div className="relative z-10">
        <div
          className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${color}/20 transition-colors duration-300`}
        >
          <div className={`text-${color}`}>{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-4">{title}</h3>
        {tagline && (
          <p className="text-lg text-card-foreground mb-4">{tagline}</p>
        )}
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
