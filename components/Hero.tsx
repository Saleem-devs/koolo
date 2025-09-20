import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[70vh] md:min-h-screen">
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] min-h-[70vh] md:min-h-screen h-full">
        <div className="pt-16 pb-8 px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold max-w-[700px] mx-auto text-[#193f36] md:leading-[50px]">
            Saving for the <span className="text-primary italic">Life</span> you
            Want. One app, one save at a time!
          </h1>
          <p className="text-lg md:text-xl text-[#193f36] mt-4 max-w-[600px] mx-auto">
            ( A Casestudy by <span className="font-semibold">Ella James</span> x{" "}
            <span className="font-semibold">GlobalLola</span> x{" "}
            <span className="font-semibold">Seleem</span> )
          </p>
        </div>

        <div className="max-w-7xl mx-auto self-end">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={1000}
            height={600}
            className="w-full object-fill"
            priority
          />
        </div>
      </div>
    </section>
  );
}
