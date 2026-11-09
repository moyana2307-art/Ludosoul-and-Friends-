import { useState } from 'react'
import Icon from '../components/Icon'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SegmentedTabs from '../components/SegmentedTabs'
import { musicPage, pageMeta } from '../data/siteContent'
import '../styles/music.css'

export default function Music() {
  const [activeId, setActiveId] = useState(musicPage.tabs[0].id)
  const activeTab = musicPage.tabs.find((tab) => tab.id === activeId)
  const meta = pageMeta.music

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />

      <header className="page-header">
        <div className="container">
          <p className="kicker">{musicPage.kicker}</p>
          <h1 className="page-header__title">{musicPage.heading}</h1>
          <p className="page-header__intro">{musicPage.intro}</p>
        </div>
      </header>

      <section className="section" aria-label="Music categories">
        <div className="container">
          <Reveal>
            <SegmentedTabs
              tabs={musicPage.tabs}
              active={activeId}
              onChange={setActiveId}
              label="Music categories"
            />

            <div
              key={activeTab.id}
              className="music-card tab-panel"
              role="tabpanel"
              id={`panel-${activeTab.id}`}
              aria-labelledby={`tab-${activeTab.id}`}
              tabIndex="0"
            >
              <div className="music-card__visual" aria-hidden="true">
                <div className="music-card__media">
                  <img src={activeTab.image} alt="" />
                </div>
                <span className="music-card__platform">{activeTab.platform}</span>
              </div>

              <div className="music-card__body">
                <p className="kicker">Official platform</p>
                <h2 className="music-card__title">{activeTab.heading}</h2>
                <p className="section-intro">{activeTab.body}</p>

                <a
                  className="pill pill--solid"
                  href={activeTab.href}
                  target="_blank"
                  rel="noopener"
                >
                  {activeTab.cta}
                  <Icon name="arrow-up-right" size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
