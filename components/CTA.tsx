import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="bg-primary rounded-3xl px-4 md:px-10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="w-full text-white pb-16 col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why are we Different?
              </h2>
              <p className="text-base md:text-lg mb-8 leading-relaxed max-w-[460px]">
                While others focus on interest rates, we focus on protecting
                your purchasing power. At Koōlo, saving is flexible,
                disciplined, and rewarding. We are more than an app. We are your
                financial shield, designed to adapt and grow with you.
              </p>

              <div className="flex items-center space-x-1">
                <Link href="#" className="inline-flex items-center">
                  <Image
                    src="/images/apple.svg"
                    alt="Download on App Store"
                    width={24}
                    height={24}
                    className=""
                  />
                </Link>
                <div className="w-[1px] h-6 bg-white"></div>
                <Link href="#" className="inline-flex items-center">
                  <Image
                    src="/images/play-store.svg"
                    alt="Get it on Google Play"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                </Link>
                <span className="text-white font-medium text-lg">
                  Download Now
                </span>
              </div>
            </div>

            <div className="w-full col-span-1">
              <Image
                src="/images/cta.png"
                alt="Koōlo App Screenshot"
                width={350}
                height={600}
                className="object-fill w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
