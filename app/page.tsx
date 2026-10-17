import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ChangingTheGame, MoveBetterSection, HowItWorksSection, MeetBethSection } from "@/components/HomeSections";
import { PageCta } from "@/components/PageIntro";

export default function Home() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Hero />
        <ChangingTheGame />
        <MoveBetterSection />
        <HowItWorksSection />
        <MeetBethSection />
        <PageCta />
      </main>
      <Footer />
    </>
  );
}
