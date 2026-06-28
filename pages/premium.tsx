import { HeaderHero } from "../components/HeaderHero";
import { Platform, Plans, ProofAndFooter, Services, SystemPreview, Venues } from "../components/PremiumSections";

export default function PremiumPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-fog text-ink">
      <HeaderHero />
      <Platform />
      <Venues />
      <Plans />
      <Services />
      <SystemPreview />
      <ProofAndFooter />
    </main>
  );
}
