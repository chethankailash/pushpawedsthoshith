'use client'

import { useState } from 'react'

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const photos = [
    '/images/WhatsApp Image 2026-02-20 at 2.43.42 PM.jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.43 PM.jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.44 PM.jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.45 PM.jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.46 PM (1).jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.46 PM (2).jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.46 PM.jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.47 PM (1).jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.47 PM.jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.48 PM (1).jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.48 PM (2).jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.48 PM.jpeg',
    '/images/WhatsApp Image 2026-02-20 at 2.43.49 PM.jpeg',
  ]

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-container">
        <h2 className="section-title">Our Memories</h2>
        <p className="section-subtitle">Captured moments we will always keep close</p>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              className="gallery-item"
              onClick={() => setSelectedImage(index)}
              style={{
                backgroundImage: `url(${photo})`,
              }}
            >
              <div className="gallery-overlay">
                <span className="gallery-icon">View</span>
              </div>
            </button>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
            <div className="gallery-modal-content">
              <button
                type="button"
                className="gallery-close"
                onClick={() => setSelectedImage(null)}
              >
                x
              </button>
              <div
                className="gallery-modal-image"
                style={{
                  backgroundImage: `url(${photos[selectedImage]})`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
