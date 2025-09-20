import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground py-16 md:py-24 text-white">
      <div className="text-center pb-16 px-4 md:px-8 border-b border-dashed border-b-[#8f8f8f]">
        <h2 className="text-3xl md:text-4xl text-[#8f8f8f] font-bold mb-8">
          Credits
        </h2>
        <div className="space-y-1 font-bold text-lg italic">
          <p>
            Branding, Web Design & Illustration -{" "}
            <Link
              href="https://x.com/the_ellajames"
              target="_blank"
              className="underline hover:text-primary"
            >
              Ella James
            </Link>
          </p>
          <p>
            Content Writing & Story telling -{" "}
            <Link
              href="https://www.linkedin.com/in/ololade-sampson-oladipupo"
              target="_blank"
              className="underline hover:text-primary"
            >
              Sampson-Oladipupo Ololade
            </Link>
          </p>
          <p>
            Web Development -{" "}
            <Link
              href="https://www.linkedin.com/in/saleem-abdulsalam"
              target="_blank"
              className="underline hover:text-primary"
            >
              Seleem Abdulsalam
            </Link>
          </p>
        </div>
      </div>

      <div className="py-16 px-4 md:px-8 w-full max-w-5xl mx-auto">
        <Image
          src="/images/logo.png"
          alt="Koōlo Logo"
          width={500}
          height={150}
          className="w-full h-auto"
        />
      </div>

      {/* Copyright */}
      <div className="px-4 md:px-8 text-center">
        <p>
          (c) 2025 Ella X GlobalLola. All Rights Reserved, All Wrongs Reversed
        </p>
      </div>
    </footer>
  );
}
