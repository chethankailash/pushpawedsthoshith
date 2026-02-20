import Countdown from '@/components/Countdown'
import Hero from '@/components/Hero'
import PhotoGallery from '@/components/PhotoGallery'
import OurStory from '@/components/OurStory'
import Venue from '@/components/Venue'
import Events from '@/components/Events'
import CalendarReminder from '@/components/CalendarReminder'

export default function Home() {
  // March 8, 2026 10:30 AM IST (IST is UTC+5:30)
  // Converting to UTC: 10:30 AM IST = 5:00 AM UTC
  const weddingDate = '2026-03-08T05:00:00Z'

  return (
    <main className="main-shell">
      <Hero />
      <section id="countdown" className="countdown-section">
        <div className="section-container">
          <h2 className="section-title">Countdown to Our Special Day</h2>
          <p className="section-subtitle">March 8, 2026 at 10:30 AM IST</p>
          <Countdown weddingDate={weddingDate} />
        </div>
      </section>
      <Events />
      <OurStory />
      <PhotoGallery />
      <Venue />
      <CalendarReminder />
    </main>
  )
}
