import { SpeakerSection } from '@/components/speaker-section'

export const metadata = {
  title: 'Keynote Speakers',
  description: 'Meet the keynote speakers and featured thought leaders at ICETMR.',
}

export default function KeySpeakerPage() {
  const keynoteCategory = 'Keynote Speaker'

  return (
    <SpeakerSection
      title="Keynote Speakers"
      description="Meet the keynote speakers and featured thought leaders at ICETMR."
      filterCategories={[keynoteCategory]}
      displayTabs={false}
      defaultCategory={keynoteCategory}
    />
  )
}
