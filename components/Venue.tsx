export default function Venue() {
  return (
    <section id="venue" className="venue-section">
      <div className="section-container">
        <h2 className="section-title">Wedding Venue</h2>
        <p className="section-subtitle">A beautiful morning where we say our vows</p>
        <div className="venue-content">
          <div className="venue-preview" />
          <div className="venue-info glass-card">
            <h3 className="venue-name">Jnana Bharathi Samudaya Bhavana</h3>
            <div className="venue-details">
              <div className="venue-detail-item">
                <div>
                  <strong>Venue</strong>
                  <p>Jnana Bharathi Samudaya Bhavana</p>
                </div>
              </div>
              <div className="venue-detail-item">
                <div>
                  <strong>Muhurtham</strong>
                  <p>March 8, 2026 at 10:30 AM IST</p>
                </div>
              </div>
              <div className="venue-detail-item">
                <div>
                  <strong>Reception</strong>
                  <p>March 7, 2026 at 7:00 PM IST onwards</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/oVkbKv6EER28A5m69"
              target="_blank"
              rel="noopener noreferrer"
              className="venue-map-button"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
