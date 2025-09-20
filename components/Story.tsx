import Image from "next/image";

export default function Story() {
  return (
    <section className="bg-white pb-12 pt-16 md:pt-24 md:pb-16" id="story">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="w-full max-w-[600px]">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6 font-serif">
              The Koōlo Story
            </h2>
            <div className="space-y-4 text-paragraph">
              <p className="text-base md:text-lg leading-relaxed">
                The Koōlo dream was launched in 2025, when founder Emmanuella
                James grew tired of watching as friends and family worked
                tirelessly to save, only to see their hard-earned money lose
                value due to inflation and currency devaluation.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Existing savings platforms only offered rigid terms, minimal
                returns, and zero protection against economic volatility. For
                someone with deep expertise in product development, this wasn't
                just frustrating. It was a problem that needed to be solved.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Inspired by the cultural concept of the "kolo", a Yoruba word
                for piggy banks, Koōlo reimagines that trusted habit for today's
                digital world.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                <span className="font-semibold">
                  This is a savings platform that doesn't just store your money
                  but protects and grows it with you in control.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <Image
              src="/images/story.png"
              alt="Hand holding money and coins, representing financial growth and savings"
              width={700}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
