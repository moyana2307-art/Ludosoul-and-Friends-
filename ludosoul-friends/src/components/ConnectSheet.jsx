import { useEffect, useRef } from 'react'
import { socials, ui } from '../data/siteContent'
import Icon from './Icon'

export default function ConnectSheet({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open, onClose])

  if (!open) return null

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className="sheet-backdrop" onMouseDown={handleBackdropClick}>
      <section
        className="connect-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="connect-title"
        aria-describedby="connect-description"
      >
        <div className="sheet-grabber" aria-hidden="true" />
        <div className="sheet-head">
          <div>
            <p className="kicker">{ui.connectKicker}</p>
            <h2 id="connect-title" className="connect-sheet__title">
              {ui.connectTitle}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label={ui.close}
          >
            <Icon name="close" size={20} />
          </button>
        </div>
        <p id="connect-description" className="connect-sheet__intro">
          {ui.connectIntro}
        </p>

        <div className="connect-list">
          {socials.map((social) => (
            <a
              key={social.id}
              className="connect-row"
              href={social.href}
              target="_blank"
              rel="noopener"
            >
              <span className="connect-row__icon">
                <Icon name={social.icon} size={20} />
              </span>
              <span className="connect-row__text">
                <span className="connect-row__name">{social.name}</span>
                <span className="connect-row__handle">{social.handle}</span>
              </span>
              <Icon name="arrow-up-right" size={18} className="connect-row__arrow" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
