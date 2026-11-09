import { useEffect, useRef } from 'react'
import { ui } from '../data/siteContent'
import Icon from './Icon'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)
  const item = items[index]

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [onClose, onPrev, onNext])

  if (!item) return null

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${item.caption}`}
      onMouseDown={handleBackdropClick}
    >
      <span className="lightbox__counter" aria-hidden="true">
        {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
      </span>

      <button
        ref={closeRef}
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label={ui.closeLightbox}
      >
        <Icon name="close" size={22} />
      </button>

      {items.length > 1 && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={onPrev}
          aria-label={ui.previous}
        >
          <Icon name="chevron-left" size={24} />
        </button>
      )}

      <figure className="lightbox__figure">
        <img
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
        />
        <figcaption>
          <span className="lightbox__cat">{item.categoryLabel}</span>
          <span>{item.caption}</span>
        </figcaption>
      </figure>

      {items.length > 1 && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={onNext}
          aria-label={ui.next}
        >
          <Icon name="chevron-right" size={24} />
        </button>
      )}
    </div>
  )
}
