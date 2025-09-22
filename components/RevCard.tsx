import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function RevCard({
  title,
  description,
  icon,
  image,
  animationDelay,
}: {
  title: string;
  description: string;
  icon: string;
  image: string;
  animationDelay: number;
}) {
  return (
    <div className="bg-white rounded-2xl px-6 pt-6 pb-0 w-full">
      <AnimatedSection delay={animationDelay} direction="up">
        <div className="flex flex-col h-full justify-between gap-12">
          <div className="space-y-6">
            <div className="flex justify-start ">
              <Image src={icon} alt={title} width={44} height={44} />
            </div>

            <h3 className="text-2xl max-w-[280px] text-heading font-semibold font-serif leading-tight">
              {title}
            </h3>

            <p className="text-paragraph text-base leading-relaxed text-left">
              {description}
            </p>
          </div>

          <div className="flex justify-center pt-4 pb-0 bg-red- max-w-[200px] mx-auto">
            <Image
              src={image}
              alt={`${title} illustration`}
              width={200}
              height={120}
              className="object-contain w-full"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
