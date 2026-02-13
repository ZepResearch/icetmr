import About from "@/components/About";
import Buttons from "@/components/buttons";
import CPD from "@/components/cpd";
import CtaHighlight from "@/components/CTA-section";
import ConferenceTimeline from "@/components/Dates-Timeline";
import ConferenceFAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import Organizer from "@/components/Organizer";
import { SpeakerSection } from "@/components/speaker-section";
import TrashImagslider from "@/components/TrashImage";
import ConferenceVenue from "@/components/Venue-cta";

export default function Home() {
  return (
    <main>
      
      <Hero/>
      <CPD/>
      <Organizer/>
      <About/>
      <Buttons/>
      <ConferenceTimeline/>
      <SpeakerSection/>
      <CtaHighlight/>
      <TrashImagslider/>
      <ConferenceVenue/>
      <ConferenceFAQ/>
    </main>
  );
}
