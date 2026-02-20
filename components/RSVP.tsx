'use client'

import { useState } from 'react'

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('RSVP submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="section-container">
        <h2 className="section-title">RSVP</h2>
        <p className="section-subtitle">Please let us know if you&apos;ll be joining us</p>
        {submitted ? (
          <div className="rsvp-success glass-card">
            <span className="success-icon">OK</span>
            <h3>Thank you for your response!</h3>
            <p>We&apos;re excited to celebrate with you.</p>
          </div>
        ) : (
          <form className="rsvp-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="attendance">Will you be attending? *</label>
              <select
                id="attendance"
                required
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              >
                <option value="">Please select</option>
                <option value="yes">Yes, I&apos;ll be there.</option>
                <option value="no">Sorry, I can&apos;t make it.</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                placeholder="Including yourself"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your thoughts or special requests."
              />
            </div>
            <button type="submit" className="rsvp-submit-button">
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
