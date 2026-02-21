'use client'

import { useState } from 'react'

interface PhotoGalleryProps {
  photos: string[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const normalizedPhotos = photos.map((photo) => encodeURI(photo))

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-container">
        <h2 className="section-title">Our Memories</h2>
        <p className="section-subtitle">Captured moments we will always keep close</p>
        <div className="gallery-grid">
          {normalizedPhotos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              className="gallery-item"
              onClick={() => setSelectedImage(index)}
            >
              <img src={photo} alt={`Memory ${index + 1}`} className="gallery-item-image" />
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
              >
                <img
                  src={normalizedPhotos[selectedImage]}
                  alt={`Selected memory ${selectedImage + 1}`}
                  className="gallery-modal-image-tag"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
