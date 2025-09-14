import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-foreground text-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <Image
              width={100}
              height={100}
              src="/logo.png"
              alt="Koōlo Logo"
              className="h-24 md:h-32 w-auto logo"
            />
          </div>

          <p className="text-xl">Saving for the Life You Want</p>
          <p className="text-lg max-w-2xl mx-auto">
            One app, one save at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
