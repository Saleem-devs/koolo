import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background border-b border-b-[#3e3e3e35]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/images/small_logo.png"
              alt="Koōlo Logo"
              width={32}
              height={32}
              className="h-5 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#story"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Our Story
            </Link>

            <Link
              href="#values"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Our Values
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
