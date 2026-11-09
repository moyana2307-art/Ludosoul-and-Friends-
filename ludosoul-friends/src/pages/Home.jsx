import { Link } from 'react-router-dom'
import treeMark from '../assets/brand/ludosoul-tree.png'
import featuredArtwork from '../assets/featured/screenshot-5.png'
import experiencePhoto from '../assets/gallery/photo-mn.jpg'
import Equalizer from '../components/Equalizer'
import Icon from '../components/Icon'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import { home, pageMeta } from '../data/siteContent'
import '../styles/home.css'

export default function Home() {
  const {
    hero,
    culture,
    featured,
    experience,
    friends,
    events,
    closing,
  } = home
  const meta = pageMeta.home

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero-rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <img className="hero__tree" src={treeMark} alt="" aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />

        <div className="container hero__inner">
          <div className="hero__content">
            <Equalizer className="hero__equalizer" />
            <p className="kicker">{hero.kicker}</p>
            <h1 className="hero__title" id="hero-title">
              <span className="hero__title-main">{hero.title}</span>
              <span className="hero__title-accent">{hero.titleAccent}</span>
            </h1>

            <ul className="hero__chips" aria-label="Genres and scenes">
              {hero.chips.map((chip) => (
                <li key={chip} className="chip">
                  {chip}
                </li>
              ))}
            </ul>

            <p className="hero__intro">{hero.intro}</p>

            <div className="hero__actions">
              <Link className="pill pill--solid" to={hero.primary.to}>
                {hero.primary.label}
                <Icon name="arrow" size={17} />
              </Link>
              <Link className="pill pill--ghost" to={hero.secondary.to}>
                {hero.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section culture" aria-labelledby="culture-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__body">
              <p className="kicker">{culture.kicker}</p>
              <h2 id="culture-title" className="section-title">
                {culture.heading}
              </h2>
            </div>
            <p className="section-intro culture__intro">{culture.intro}</p>
          </Reveal>

          <div className="culture__grid">
            {culture.tiles.map((tile, index) => (
              <Reveal
                as="article"
                key={tile.id}
                className={`culture-tile ${tile.tone}`}
                delay={index * 90}
              >
                <div className="culture-tile__media" aria-hidden="true">
                  <img src={tile.image} alt="" loading="lazy" />
                </div>
                <span className="culture-tile__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="culture-tile__body">
                  <p className="culture-tile__note">{tile.note}</p>
                  <h3 className="culture-tile__label">{tile.label}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="featured-title">
        <div className="container">
          <Reveal className="feature-panel">
            <div className="feature-panel__art">
              <img
                src={featuredArtwork}
                alt={featured.artworkAlt}
                width="365"
                height="374"
                loading="lazy"
              />
            </div>

            <div className="feature-panel__copy">
              <p className="kicker">{featured.kicker}</p>
              <h2 id="featured-title" className="feature-panel__title">
                {featured.heading}
              </h2>
              <p className="section-intro">{featured.body}</p>
              <div className="feature-panel__actions">
                {featured.platforms.map((platform) => (
                  <a
                    key={platform.id}
                    className="pill pill--ghost"
                    href={platform.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <Icon name={platform.icon} size={18} />
                    {platform.label}
                    <Icon name="arrow-up-right" size={14} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <div className="container">
          <Reveal className="experience">
            <div className="experience__media">
              <img
                src={experiencePhoto}
                alt={experience.imageAlt}
                width="1170"
                height="1137"
                loading="lazy"
              />
              <span className="experience__flag">{experience.imageFlag}</span>
            </div>

            <div className="experience__copy">
              <p className="kicker">{experience.kicker}</p>
              <h2 id="experience-title" className="section-title">
                {experience.heading}
              </h2>
              <p className="section-intro">{experience.body}</p>
              <div className="experience__links">
                {experience.links.map((link) => (
                  <Link key={link.to} className="text-link" to={link.to}>
                    {link.label}
                    <Icon name="arrow" size={15} />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="friends-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__body">
              <p className="kicker">{friends.kicker}</p>
              <h2 id="friends-title" className="section-title">
                {friends.heading}
              </h2>
              <p className="section-intro">{friends.body}</p>
            </div>
          </Reveal>

          <div className="friends__grid">
            {friends.cards.map((card, index) => (
              <Reveal
                as="article"
                key={card.id}
                className="friend-card"
                delay={index * 100}
              >
                <div className="friend-card__media" aria-hidden="true">
                  <img src={card.image} alt="" loading="lazy" />
                </div>
                <span className="friend-card__index" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="friend-card__title">{card.title}</h3>
                  <p className="friend-card__note">{card.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="next-up-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__body">
              <p className="kicker">{events.kicker}</p>
              <h2 id="next-up-title" className="section-title">
                {events.heading}
              </h2>
            </div>
          </Reveal>

          <Reveal className="events-empty">
            <span className="events-empty__icon" aria-hidden="true">
              <Icon name="calendar" size={24} />
            </span>
            <p className="events-empty__copy">{events.empty}</p>
            <a
              className="pill pill--ghost"
              href={home.closing.buttons[0].href}
              target="_blank"
              rel="noopener"
            >
              <Icon name="instagram" size={18} />
              {events.instagramLabel}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section closing" aria-labelledby="closing-title">
        <div className="container">
          <Reveal className="closing__panel">
            <div className="closing__rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="closing__copy">
              <p className="kicker">{closing.kicker}</p>
              <h2 id="closing-title" className="closing__title">
                {closing.heading}
              </h2>
              <p className="section-intro">{closing.body}</p>
              <div className="closing__actions">
                {closing.buttons.map((button) => (
                  <a
                    key={button.id}
                    className={
                      button.id === 'instagram'
                        ? 'pill pill--solid'
                        : 'pill pill--ghost'
                    }
                    href={button.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <Icon name={button.icon} size={18} />
                    {button.label}
                    <Icon name="arrow-up-right" size={14} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
