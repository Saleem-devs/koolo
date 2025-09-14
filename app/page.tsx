import Hero from "@/components/Hero";
import TextSection from "@/components/TextSection";
import CardGrid from "@/components/CardGrid";
import FeatureCard from "@/components/FeatureCard";
import ValuesGrid from "@/components/ValuesGrid";
import ValueCard from "@/components/ValueCard";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <TextSection background="background" maxWidth="3xl">
        <div className="animate-delay-200">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In a world where traditional savings accounts lose value faster
              than you can fill them, saving for your premium soft life or japa
              plans feels almost impossible.
            </p>
            <p>
              Today it's urgent 2k, tomorrow it's inflation. Either way, money
              keeps slipping away, leaving you little room for building the
              future you want. The future you deserve.
            </p>
            <p className="text-xl">
              But saving was never meant to be this complicated.
            </p>
            <p>
              Breaking fees, rigid systems and endless complicated processes
              that leave you unmotivated to grow your savings to meet your big
              dreams.
            </p>
            <p className="text-xl font-bold text-foreground uppercase mt-8 ">
              Koōlo was born to change that.
            </p>
          </div>
        </div>
      </TextSection>

      <TextSection title="The Koōlo Story" background="card" maxWidth="3xl">
        <div className="animate-delay-400">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Koōlo dream was launched in 2025, when founder Emmanuella
              James grew tired of watching as friends and family worked
              tirelessly to save, only to see their hard-earned money lose value
              due to inflation and currency devaluation.
            </p>
            <p>
              Existing savings platforms only offered rigid terms, minimal
              returns, and zero protection against economic volatility. For
              someone with deep expertise in product development, this wasn't
              just frustrating. It was a problem that needed to be solved.
            </p>
            <p>
              Inspired by the cultural concept of the "kolo", a Yoruba word for
              piggy banks, Koōlo reimagines that trusted habit for today's
              digital world.
            </p>
            <p className="text-xl font-bold text-card-foreground mt-8">
              This is a savings platform that doesn't just store your money but
              protects and grows it with you in control.
            </p>
          </div>
        </div>
      </TextSection>

      <CardGrid background="background" maxWidth="6xl" gridCols="3">
        <FeatureCard
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          }
          title="Mission"
          description="To empower every Nigerian to achieve financial freedom through smarter savings."
          color="secondary"
        />

        <FeatureCard
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          }
          title="Vision"
          description="To become the most trusted financial savings platform across Nigeria—where anyone, anywhere, can create the life they want with smarter savings."
          color="accent"
        />

        <FeatureCard
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          }
          title="Purpose"
          description="Working together to help you build a secure financial future, so you can create the life you deserve."
          color="primary"
        />
      </CardGrid>

      <ValuesGrid>
        <ValueCard
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          title="Integrity"
          description="We are honest, ethical, principled and trustworthy."
          color="secondary"
        />

        <ValueCard
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          }
          title="Transparency"
          description="No hidden fees. No tricks. We keep things clear, honest, and easy to understand."
          color="accent"
        />

        <ValueCard
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          }
          title="Empowerment Through Simplicity"
          description="Saving in both local currency and cryptocurrency doesn't have to be complicated. We turn complex money systems into simple, intuitive tools that help you take control."
          color="primary"
        />

        <ValueCard
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
          title="Accountability"
          description="We take full responsibility for our actions and results."
          color="secondary"
        />

        <ValueCard
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
          title="Respect"
          description="We understand the power of inclusion and operate fully recognizing the opinions of others and valuing everyone's contribution."
          color="accent"
        />

        <ValueCard
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          }
          title="Service"
          description="We put the people and businesses we serve at the center of what we do at all times."
          color="primary"
        />
      </ValuesGrid>

      <CardGrid
        title="Our Revolutionary Approach"
        background="background"
        maxWidth="6xl"
        gridCols="3"
      >
        <FeatureCard
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          }
          title="Smart Currency Protection"
          tagline="Naira down? Your savings do not have to be."
          description="Koōlo automatically secures part of your savings by converting to stablecoins. No blockchain stress. Just one app with AI protecting your financial future."
          color="secondary"
        />

        <FeatureCard
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          }
          title="Emergency Access With No Fee"
          tagline="Life's emergencies can strike anytime."
          description="Instead of breaking your savings, Koōlo gives you instant micro-credit from your locked funds. Handle the problem today, keep your goals safe for tomorrow."
          color="accent"
        />

        <FeatureCard
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          }
          title="Gamified Growth"
          tagline="Who says saving has to be boring?"
          description="With Koōlo, every milestone becomes a win. Earn badges, unlock achievement NFTs, join group challenges, and track your journey with visuals that turn every naira saved into a victory."
          color="primary"
        />
      </CardGrid>

      <TextSection
        title="What Makes Us Different"
        background="card"
        maxWidth="4xl"
      >
        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            While others focus on interest rates, we focus on protecting your
            purchasing power. At Koōlo, saving is flexible, disciplined, and
            rewarding.
          </p>
          <p className="text-xl font-bold text-card-foreground">
            We are more than an app. We are your financial shield, designed to
            adapt and grow with you.
          </p>
        </div>
      </TextSection>

      <Closing />
    </main>
  );
}
