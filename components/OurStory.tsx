export default function OurStory() {
  return (
    <section id="story" className="story-section">
      <div className="section-container">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">A few chapters from our journey</p>
        <div className="story-content">
          <div className="story-text-card glass-card">
            <p className="story-paragraph">
              It started with a chance meeting and one long conversation that neither of us
              wanted to end.
            </p>
            <p className="story-paragraph">
              From quiet evenings to noisy road trips, every memory made us surer that this
              was forever.
            </p>
            <p className="story-paragraph highlight-text">
              On March 8, 2026, we begin our next chapter together.
            </p>
          </div>
          <div className="story-photo-stack">
            <div
              className="story-photo story-photo-large"
              style={{
                backgroundImage: 'url("/images/WhatsApp Image 2026-02-20 at 2.43.47 PM.jpeg")',
              }}
            />
            <div
              className="story-photo story-photo-small"
              style={{
                backgroundImage: 'url("/images/WhatsApp Image 2026-02-20 at 2.43.46 PM.jpeg")',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
