import { ReactNode } from "react";

interface TextSectionProps {
  title?: string;
  children: ReactNode;
  background?: "background" | "card";
  maxWidth?: "3xl" | "4xl" | "6xl";
  className?: string;
}

export default function TextSection({
  title,
  children,
  background = "background",
  maxWidth = "4xl",
  className = "",
}: TextSectionProps) {
  const getMaxWidthClass = (maxWidth: string) => {
    switch (maxWidth) {
      case "3xl":
        return "max-w-3xl";
      case "4xl":
        return "max-w-4xl";
      case "6xl":
        return "max-w-6xl";
      default:
        return "max-w-4xl";
    }
  };

  const getBackgroundClass = (background: string) => {
    switch (background) {
      case "background":
        return "bg-background";
      case "card":
        return "bg-card";
      default:
        return "bg-background";
    }
  };

  return (
    <section
      className={`py-24 px-6 ${getBackgroundClass(background)} ${className}`}
    >
      <div className={`${getMaxWidthClass(maxWidth)} mx-auto text-center`}>
        <div className="animate-fade-in-up">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-12">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
