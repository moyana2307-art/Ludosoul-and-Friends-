import { useCallback, useState } from 'react'
import Icon from '../components/Icon'
import Lightbox from '../components/Lightbox'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import { galleryPage, pageMeta } from '../data/siteContent'
import '../styles/gallery.css'

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(null)
  const meta = pageMeta.gallery

  const filteredItems =
    filter === 'all'
      ? galleryPage.items
      : galleryPage.items.filter((item) => item.category === filter)

  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current - 1 + filteredItems.length) % filteredItems.length
    })
  }, [filteredItems.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + 1) % filteredItems.length
    })
  }, [filteredItems.length])

  const changeFilter = (id) => {
    setFilter(id)
    setActiveIndex(null)
  }

  const countLabel = `${filteredItems.length} ${
    filteredItems.length === 1 ? 'image' : 'images'
  }`

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />

      <header className="page-header">
        <div className="container">
          <p className="kicker">{galleryPage.kicker}</p>
          <h1 className="page-header__title">{galleryPage.heading}</h1>
          <p className="page-header__intro">{galleryPage.intro}</p>
        </div>
      </header>

      <section className="section gallery-section" aria-label="Image gallery">
        <div className="container">
          <Reveal className="gallery-toolbar">
            <div
              className="gallery-filters"
              role="group"
              aria-label="Filter gallery"
            >
              {galleryPage.filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`filter-chip${filter === item.id ? ' is-active' : ''}`}
                  aria-pressed={filter === item.id}
                  onClick={() => changeFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="gallery-count" aria-live="polite">
              {countLabel}
            </p>
          </Reveal>

          {filteredItems.length === 0 ? (
            <div className="gallery-empty">
              <p>No images in this category yet.</p>
            </div>
          ) : (
            <div key={filter} className="gallery-grid gallery-grid--enter">
              {filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="gallery-item"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open ${item.caption} in the lightbox`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                  />
                  <span className="gallery-item__overlay">
                    <span className="gallery-item__cat">
                      {item.categoryLabel}
                    </span>
                    <span className="gallery-item__open">
                      View
                      <Icon name="arrow-up-right" size={13} />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          items={filteredItems}
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  )
}
