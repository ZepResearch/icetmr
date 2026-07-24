import { SpeakerSection } from '@/components/speaker-section'
import { speakerCategories } from '@/components/speaker-categories'

export const metadata = {
  title: 'Distinct Speakers',
  description: 'Explore the conference speakers across all featured categories.',
}

export default function DistinctSpeakersPage() {
  const excludedCategories = ['Keynote Speaker']
  const remainingCategories = speakerCategories
    .filter((category) => !excludedCategories.includes(category.id))
    .map((category) => category.id)

  return (
    <SpeakerSection
      title="Distinct Speakers"
      description="Explore the conference speakers across all featured categories beyond keynote speakers."
      filterCategories={remainingCategories}
      defaultCategory={remainingCategories[0] || 'Organizing Secretary'}
    />
  )
}
