import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Story from "@/components/Story";
import RevolutionaryApproach from "@/components/RevolutionaryApproach";
import Principles from "@/components/Principles";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Story />
        <RevolutionaryApproach />
        <CTA />
        <Principles />
      </main>
      <Footer />
    </>
  );
}
