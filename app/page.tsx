import Countdown from '@/components/Countdown'
import Hero from '@/components/Hero'
import PhotoGallery from '@/components/PhotoGallery'
import OurStory from '@/components/OurStory'
import Venue from '@/components/Venue'
import Events from '@/components/Events'
import CalendarReminder from '@/components/CalendarReminder'
import { readdirSync } from 'fs'
import { join } from 'path'

export default function Home() {
  const weddingDate = '2026-03-08T04:35:00Z'
  const photos = readdirSync(join(process.cwd(), 'public', 'images'))
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => `/images/${file}`)

  return (
    <main className="main-shell">
      <Hero />
      <section id="countdown" className="countdown-section">
        <div className="section-container">
          <h2 className="section-title">Countdown to Our Special Day</h2>
          <p className="section-subtitle">March 8, 2026 at 10:05 AM</p>
          <Countdown weddingDate={weddingDate} />
        </div>
      </section>
      <Events />
      <OurStory />
      <PhotoGallery photos={photos} />
      <Venue />
      <CalendarReminder />
    </main>
  )
}
