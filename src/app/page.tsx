import Header from "@/components/Header";
import AmbientBackground from "@/components/AmbientBackground";
import HeroSurgical from "@/components/HeroSurgical";
import AboutDoctor from "@/components/AboutDoctor";
import PathologyBentoGrid from "@/components/PathologyBentoGrid";
import SurgicalTriageModal from "@/components/SurgicalTriageModal";
import SurgicalJourney from "@/components/SurgicalJourney";
import ScheduleNotice from "@/components/ScheduleNotice";
import SurgicalFaq from "@/components/SurgicalFaq";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
      <AmbientBackground />
      <Header />
      <HeroSurgical />
      <AboutDoctor />
      <PathologyBentoGrid />
      <SurgicalTriageModal />
      <SurgicalJourney />
      <ScheduleNotice />
      <SurgicalFaq />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
