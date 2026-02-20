'use client'

import { useState } from 'react'

interface PhotoGalleryProps {
  photos: string[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
