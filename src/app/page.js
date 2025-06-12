import About from "@/components/About";
import Buttons from "@/components/buttons";
import CtaHighlight from "@/components/CTA-section";
import ConferenceTimeline from "@/components/Dates-Timeline";
import ConferenceFAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import { SpeakerSection } from "@/components/speaker-section";
import ConferenceVenue from "@/components/Venue-cta";

export default function Home() {
  return (
    <main>
      
      <Hero/>
      <About/>
      <Buttons/>
      <ConferenceTimeline/>
      <SpeakerSection/>
      <CtaHighlight/>
      <ConferenceVenue/>
      <ConferenceFAQ/>
    </main>
  );
}
