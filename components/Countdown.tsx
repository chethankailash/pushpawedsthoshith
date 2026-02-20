'use client'

import { useEffect, useState } from 'react'

interface CountdownProps {
  weddingDate: string
}

export default function Countdown({ weddingDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isPast, setIsPast] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const targetDate = new Date(weddingDate).getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        setIsPast(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setIsPast(false)
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [weddingDate])

  if (!mounted) {
    return (
      <div className="countdown-container">
        <div className="countdown">
          {[0, 0, 0, 0].map((_, i) => (
            <div key={i} className="countdown-item">
              <div className="countdown-card">
                <span className="countdown-number">00</span>
                <span className="countdown-label">
                  {['Days', 'Hours', 'Minutes', 'Seconds'][i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="countdown-container">
      {isPast ? (
        <div className="countdown-complete glass-card">
          <h3>The wedding day is here.</h3>
        </div>
      ) : (
        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-card">
              <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="countdown-label">Days</span>
            </div>
          </div>
          <div className="countdown-item">
            <div className="countdown-card">
              <span className="countdown-number">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="countdown-label">Hours</span>
            </div>
          </div>
          <div className="countdown-item">
            <div className="countdown-card">
              <span className="countdown-number">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="countdown-label">Minutes</span>
            </div>
          </div>
          <div className="countdown-item">
            <div className="countdown-card">
              <span className="countdown-number">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
