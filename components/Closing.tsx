import Image from "next/image";

export default function Closing() {
  return (
    <section className="py-24 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Your Story Starts Here
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Every thriving business, every family milestone, every personal
              dream begins with the discipline to save. But discipline alone
              isn't enough when the system works against you.
            </p>
            <p>
              In volatile economies, where you save matters as much as how much
              you save.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-secondary mt-12">
              With Koōlo, you save for the life you want.
            </p>
            <p className="text-xl text-accent">One app, one save at a time.</p>
          </div>

          {/* Logo watermark */}
          <div className="mt-16 flex justify-center opacity-30">
            <Image
              width={100}
              height={100}
              src="/logo.png"
              alt="Koōlo Logo"
              className="h-16 md:h-20 w-auto logo-watermark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
