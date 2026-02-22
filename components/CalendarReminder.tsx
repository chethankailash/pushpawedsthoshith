'use client'

export default function CalendarReminder() {
  const receptionDate = new Date('2026-03-07T13:30:00Z')
  const muhurthamDate = new Date('2026-03-08T04:35:00Z')

  const formatDateForCalendar = (date: Date) => {
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const day = String(date.getUTCDate()).padStart(2, '0')
    const hours = String(date.getUTCHours()).padStart(2, '0')
    const minutes = String(date.getUTCMinutes()).padStart(2, '0')
    return `${year}${month}${day}T${hours}${minutes}00Z`
  }

  const generateGoogleCalendarURL = (title: string, date: Date, description: string, location: string) => {
    const start = formatDateForCalendar(date)
    const end = formatDateForCalendar(new Date(date.getTime() + 2 * 60 * 60 * 1000)) // 2 hours later
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      dates: `${start}/${end}`,
      details: description,
      location: location,
    })
    return `https://calendar.google.com/calendar/render?${params.toString()}`
  }

  const generateICSContent = (title: string, date: Date, description: string, location: string) => {
    const start = formatDateForCalendar(date)
    const end = formatDateForCalendar(new Date(date.getTime() + 2 * 60 * 60 * 1000))
    
    return `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Wedding Calendar//EN\r\nBEGIN:VEVENT\r\nDTSTART:${start}\r\nDTEND:${end}\r\nSUMMARY:${title}\r\nDESCRIPTION:${description}\r\nLOCATION:${location}\r\nEND:VEVENT\r\nEND:VCALENDAR`
  }

  const downloadICS = (title: string, date: Date, description: string, location: string, filename: string) => {
    const icsContent = generateICSContent(title, date, description, location)
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const venue = 'Jnana Bharathi Samudaya Bhavana'

  return (
    <section id="calendar" className="calendar-section">
      <div className="section-container">
        <h2 className="section-title">Save the Date</h2>
        <p className="section-subtitle">Add our wedding events to your calendar</p>
        <div className="calendar-grid">
          <div className="calendar-card glass-card">
            <h3 className="calendar-event-title">Reception</h3>
            <div className="calendar-event-date">March 7, 2026 at 7:00 PM</div>
            <div className="calendar-buttons">
              <a
                href={generateGoogleCalendarURL(
                  'Pushpa & Thoshith - Reception',
                  receptionDate,
                  'Join us for an evening of celebration and joy',
                  venue
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-button calendar-button-primary"
              >
                Add to Google Calendar
              </a>
              <button
                onClick={() => {
                  downloadICS(
                    'Pushpa & Thoshith - Reception',
                    receptionDate,
                    'Join us for an evening of celebration and joy',
                    venue,
                    'reception.ics'
                  )
                }}
                className="calendar-button calendar-button-secondary"
              >
                Download .ics File
              </button>
            </div>
          </div>
          <div className="calendar-card glass-card">
            <h3 className="calendar-event-title">Muhurtham</h3>
            <div className="calendar-event-date">March 8, 2026 at 10:05 AM</div>
            <div className="calendar-buttons">
              <a
                href={generateGoogleCalendarURL(
                  'Pushpa & Thoshith - Muhurtham',
                  muhurthamDate,
                  'The sacred moment when we become one',
                  venue
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-button calendar-button-primary"
              >
                Add to Google Calendar
              </a>
              <button
                onClick={() => {
                  downloadICS(
                    'Pushpa & Thoshith - Muhurtham',
                    muhurthamDate,
                    'The sacred moment when we become one',
                    venue,
                    'muhurtham.ics'
                  )
                }}
                className="calendar-button calendar-button-secondary"
              >
                Download .ics File
              </button>
            </div>
          </div>
        </div>
        <p className="calendar-note">
          Click &quot;Add to Google Calendar&quot; to add directly, or download the .ics file to import into Apple Calendar, Outlook, or any other calendar app.
        </p>
      </div>
    </section>
  )
}
