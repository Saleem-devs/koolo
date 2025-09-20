import RevCard from "./RevCard";

export default function RevolutionaryApproach() {
  return (
    <section className="bg-background pb-12 pt-16 md:pt-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-12 md:mb-16 font-serif">
          Our Revolutionary Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevCard
            title="Smart Currency Protection"
            description="Naira down? Your savings do not have to be. Koōlo automatically secures part of your savings by converting to stablecoins. No blockchain stress. Just one app with AI protecting your financial future."
            icon="/images/currency.svg"
            image="/images/save-box.png"
          />

          <RevCard
            title="Emergency Access With No Fee"
            description="Life's emergencies can strike anytime. Instead of breaking your savings, Koōlo gives you instant micro-credit from your locked funds. Handle the problem today, keep your goals safe for tomorrow."
            icon="/images/emergency.svg"
            image="/images/secure.png"
          />

          <RevCard
            title="Gamified Growth"
            description="Who says saving has to be boring? With Koōlo, every milestone becomes a win. Earn badges, unlock achievement NFTs, join group challenges, and track your journey with visuals that turn every naira saved into a victory."
            icon="/images/growth.svg"
            image="/images/award.png"
          />
        </div>
      </div>
    </section>
  );
}
