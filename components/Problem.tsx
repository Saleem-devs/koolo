import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function Problem() {
  return (
    <section className="bg-background pb-12 pt-16 md:pt-24 md:pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="w-full max-w-[600px]">
            <AnimatedSection delay={300}>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6 font-serif">
                The Problem
              </h2>
            </AnimatedSection>
            <div className="space-y-4 text-paragraph">
              <AnimatedSection delay={400}>
                <p className="text-base md:text-lg leading-relaxed">
                  In a world where traditional savings accounts lose value
                  faster than you can fill them, saving for your premium soft
                  life or japa plans feels almost impossible. Today it's urgent
                  2k, tomorrow it's inflation. Either way, money keeps slipping
                  away, leaving you little room for building the future you
                  want. The future you deserve.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={500}>
                <p className="text-base md:text-lg leading-relaxed">
                  But saving was never meant to be this complicated. Breaking
                  fees, rigid systems and endless complicated processes that
                  leave you unmotivated to grow your savings to meet your big
                  dreams.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={600}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold">
                    Koōlo was born to change that.
                  </span>
                </p>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection direction="up" delay={700}>
            <div className="w-full max-w-4xl">
              <Image
                src="/images/problem.png"
                alt="Hand dropping a coin into a savings slot, symbolizing the act of saving money"
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
