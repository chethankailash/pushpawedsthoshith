'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ transform: `translateY(${scrollY * 0.45}px)` }}
      >
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-frame">
          <p className="hero-eyebrow">Save the Date</p>
          <h1 className="hero-title">
            <span className="title-line">We&apos;re getting</span>
            <span className="title-line highlight">Married</span>
          </h1>
          <p className="hero-subtitle">Join us for vows, blessings, and celebration.</p>
          <div className="hero-names">
            <span className="name">Pushpa</span>
            <span className="ampersand">and</span>
            <span className="name">Thoshith</span>
          </div>
          <div className="hero-date">March 8, 2026 | 10:30 AM</div>
          <div className="hero-actions">
            <a href="#countdown" className="hero-action-button">
              See Countdown
            </a>
            <a href="#events" className="hero-action-link">
              View Events
            </a>
          </div>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">v</div>
          </div>
        </div>
      </div>
    </section>
  )
}
