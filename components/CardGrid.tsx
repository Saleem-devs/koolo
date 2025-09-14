import { ReactNode } from "react";

interface CardGridProps {
  title?: string;
  children: ReactNode;
  background?: "background" | "card";
  maxWidth?: "4xl" | "6xl";
  gridCols?: "2" | "3";
}

export default function CardGrid({
  title,
  children,
  background = "background",
  maxWidth = "6xl",
  gridCols = "3",
}: CardGridProps) {
  const getMaxWidthClass = (maxWidth: string) => {
    switch (maxWidth) {
      case "4xl":
        return "max-w-4xl";
      case "6xl":
        return "max-w-6xl";
      default:
        return "max-w-6xl";
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

  const getGridColsClass = (gridCols: string) => {
    switch (gridCols) {
      case "2":
        return "lg:grid-cols-2";
      case "3":
        return "lg:grid-cols-3";
      default:
        return "lg:grid-cols-3";
    }
  };

  return (
    <section className={`py-24 px-6 ${getBackgroundClass(background)}`}>
      <div className={`${getMaxWidthClass(maxWidth)} mx-auto`}>
        <div className="animate-fade-in-up">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              {title}
            </h2>
          )}
          <div className={`grid ${getGridColsClass(gridCols)} gap-8`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
