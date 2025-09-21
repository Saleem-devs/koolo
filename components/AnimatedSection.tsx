"use client";

import { ReactNode, useEffect, useState } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref]);

  const getAnimationClass = () => {
    const baseClass = isVisible ? "opacity-100" : "opacity-0";
    const transitionClass = `transition-all duration-1000 ease-out ${
      delay ? `delay-[${delay}ms]` : ""
    }`;

    let transformClass = "";
    switch (direction) {
      case "up":
        transformClass = isVisible ? "translate-y-0" : "translate-y-16";
        break;
      case "down":
        transformClass = isVisible ? "translate-y-0" : "-translate-y-16";
        break;
      case "left":
        transformClass = isVisible ? "translate-x-0" : "translate-x-16";
        break;
      case "right":
        transformClass = isVisible ? "translate-x-0" : "-translate-x-16";
        break;
    }

    return `${baseClass} ${transformClass} ${transitionClass}`;
  };

  return (
    <div ref={setRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
}
