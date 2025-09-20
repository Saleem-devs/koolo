import Image from "next/image";

export default function Problem() {
  return (
    <section className="bg-background pb-12 pt-16 md:pt-24 md:pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="w-full max-w-[600px]">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6 font-serif">
              The Problem
            </h2>
            <div className="space-y-4 text-paragraph">
              <p className="text-base md:text-lg leading-relaxed">
                Traditional savings methods are often complicated, intimidating,
                and don't adapt to our modern lifestyle. Many people struggle
                with inconsistent saving habits, lack of financial education,
                and the overwhelming nature of financial planning.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Inflation erodes the value of money over time, making it even
                more challenging to build meaningful wealth. The complexity of
                financial products and services creates barriers that prevent
                people from taking control of their financial future.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                <span className="font-semibold">
                  Koōlo was born to change that.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <Image
              src="/images/problem.png"
              alt="Hand dropping a coin into a savings slot, symbolizing the act of saving money"
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
