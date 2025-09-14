import { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

export default function ValueCard({
  icon,
  title,
  description,
  color,
}: ValueCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          gradient: "from-primary/5",
          bg: "bg-primary/10",
          bgHover: "group-hover:bg-primary/20",
          text: "text-primary",
        };
      case "secondary":
        return {
          gradient: "from-secondary/5",
          bg: "bg-secondary/10",
          bgHover: "group-hover:bg-secondary/20",
          text: "text-secondary",
        };
      case "accent":
        return {
          gradient: "from-accent/5",
          bg: "bg-accent/10",
          bgHover: "group-hover:bg-accent/20",
          text: "text-accent",
        };
      default:
        return {
          gradient: "from-primary/5",
          bg: "bg-primary/10",
          bgHover: "group-hover:bg-primary/20",
          text: "text-primary",
        };
    }
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className="group relative overflow-hidden bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-all duration-500">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div className="relative z-10">
        <div
          className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-6 ${colorClasses.bgHover} transition-colors duration-300`}
        >
          <div className={colorClasses.text}>{icon}</div>
        </div>
        <h4 className="text-xl font-bold text-card-foreground mb-4">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
