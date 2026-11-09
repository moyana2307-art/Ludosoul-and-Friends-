import logoFull from '../assets/brand/ludosoul-logo.png'
import treeMark from '../assets/brand/ludosoul-tree.png'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import { aboutPage, pageMeta } from '../data/siteContent'
import '../styles/about.css'

export default function About() {
  const meta = pageMeta.about
  const [firstName, ...rest] = aboutPage.heading.split(' & ')
  const remainder = rest.join(' & ')

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />

      <header className="page-header about-header">
        <div className="container about-header__inner">
          <div>
            <p className="kicker">{aboutPage.kicker}</p>
            <h1 className="page-header__title about-header__title">
              {firstName} {remainder && <span className="accent">&amp; {remainder}</span>}
            </h1>
            <p className="page-header__intro">{aboutPage.intro}</p>
          </div>

          <div className="about-header__logo">
            <img
              src={logoFull}
              alt={aboutPage.logoAlt}
              width="932"
              height="908"
              loading="lazy"
            />
          </div>
        </div>
      </header>

      <section className="section" aria-labelledby="platform-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__body">
              <p className="kicker">{aboutPage.platformKicker}</p>
              <h2 id="platform-title" className="section-title">
                {aboutPage.platformHeading}
              </h2>
            </div>
            <p className="section-intro about__intro">{aboutPage.body}</p>
          </Reveal>

          <div className="about-tiles">
            {aboutPage.tiles.map((tile, index) => (
              <Reveal
                as="article"
                key={tile.id}
                className="about-tile"
                delay={index * 80}
              >
                <div className="about-tile__media" aria-hidden="true">
                  <img src={tile.image} alt="" loading="lazy" />
                </div>
                <span className="about-tile__note">{tile.note}</span>
                <h3 className="about-tile__label">{tile.label}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-section" aria-labelledby="founder-title">
        <div className="container">
          <Reveal className="founder">
            <div className="founder__copy">
              <p className="kicker">{aboutPage.founder.kicker}</p>
              <h2 id="founder-title" className="section-title founder__name">
                {aboutPage.founder.name}
              </h2>
              <p className="founder__aka">
                <span aria-hidden="true">aka</span> {aboutPage.founder.aka}
              </p>
              <p className="section-intro">{aboutPage.founder.body}</p>
            </div>

            <aside className="founder__card" aria-label="Founder details">
              <img
                className="founder__tree"
                src={treeMark}
                alt=""
                width="72"
                height="60"
                aria-hidden="true"
                loading="lazy"
              />
              <dl className="founder__facts">
                <div>
                  <dt>Name</dt>
                  <dd>{aboutPage.founder.name}</dd>
                </div>
                <div>
                  <dt>Known as</dt>
                  <dd>{aboutPage.founder.aka}</dd>
                </div>
                <div>
                  <dt>Born</dt>
                  <dd>{aboutPage.founder.born}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{aboutPage.founder.role}</dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}
