import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function Story() {
  return (
    <section
      className="bg-white pb-12 pt-16 md:pt-24 md:pb-16 relative overflow-hidden"
      id="story"
    >
      <div className="absolute -left-[200px] md:-left-16 top-4">
        <AnimatedSection direction="left" delay={200}>
          <Image
            src="/images/pattern-left-2.png"
            alt="pattern"
            width={400}
            height={300}
          />
        </AnimatedSection>
      </div>
      <div className="absolute -right-[200px] md:-right-16 top-10">
        <AnimatedSection direction="right" delay={200}>
          <Image
            src="/images/pattern-right-2.png"
            alt="pattern"
            width={400}
            height={300}
          />
        </AnimatedSection>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="w-full max-w-[600px]">
            <AnimatedSection delay={300}>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6 font-serif">
                The Koōlo Story
              </h2>
            </AnimatedSection>
            <div className="space-y-4 text-paragraph">
              <AnimatedSection delay={400}>
                <p className="text-base md:text-lg leading-relaxed">
                  The Koōlo dream was launched in 2025, when founder Emmanuella
                  James grew tired of watching as friends and family worked
                  tirelessly to save, only to see their hard-earned money lose
                  value due to inflation and currency devaluation.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={500}>
                <p className="text-base md:text-lg leading-relaxed">
                  Existing savings platforms only offered rigid terms, minimal
                  returns, and zero protection against economic volatility. For
                  someone with deep expertise in product development, this
                  wasn't just frustrating. It was a problem that needed to be
                  solved.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={600}>
                <p className="text-base md:text-lg leading-relaxed">
                  Inspired by the cultural concept of the "kolo", a Yoruba word
                  for piggy banks, Koōlo reimagines that trusted habit for
                  today's digital world.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={700}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold">
                    This is a savings platform that doesn't just store your
                    money but protects and grows it with you in control.
                  </span>
                </p>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection direction="up" delay={800}>
            <div className="w-full max-w-4xl">
              <Image
                src="/images/story.png"
                alt="Hand holding money and coins, representing financial growth and savings"
                width={700}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
