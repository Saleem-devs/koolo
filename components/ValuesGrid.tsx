import { ReactNode } from "react";

interface ValuesGridProps {
  children: ReactNode;
}

export default function ValuesGrid({ children }: ValuesGridProps) {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-16 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
