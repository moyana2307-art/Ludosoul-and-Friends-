import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SegmentedTabs from '../components/SegmentedTabs'
import { eventsPage, pageMeta } from '../data/siteContent'
import '../styles/events.css'

export default function Events() {
  const [activeId, setActiveId] = useState(eventsPage.tabs[0].id)
  const activeTab = eventsPage.tabs.find((tab) => tab.id === activeId)
  const { link } = activeTab
  const meta = pageMeta.events

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} />

      <header className="page-header">
        <div className="container">
          <p className="kicker">{eventsPage.kicker}</p>
          <h1 className="page-header__title">{eventsPage.heading}</h1>
          <p className="page-header__intro">{eventsPage.intro}</p>
        </div>
      </header>

      <section className="section" aria-label="Event listings">
        <div className="container">
          <Reveal>
            <SegmentedTabs
              tabs={eventsPage.tabs}
              active={activeId}
              onChange={setActiveId}
              label="Event listing views"
            />

            <div
              key={activeTab.id}
              className="events-panel tab-panel"
              role="tabpanel"
              id={`panel-${activeTab.id}`}
              aria-labelledby={`tab-${activeTab.id}`}
              tabIndex="0"
            >
              <div className="events-panel__visual" aria-hidden="true">
                <span className="events-panel__ring" />
                <span className="events-panel__ring events-panel__ring--wide" />
                <span className="events-panel__icon">
                  <Icon name={activeTab.icon} size={44} />
                </span>
              </div>

              <div className="events-panel__body">
                <p className="kicker">{activeTab.label}</p>
                <h2 className="events-panel__title">{activeTab.heading}</h2>
                <p className="section-intro">{activeTab.body}</p>
                <span className="events-panel__note">{activeTab.note}</span>

                {link.to ? (
                  <Link className="pill pill--ghost" to={link.to}>
                    <Icon name={link.icon} size={16} />
                    {link.label}
                    <Icon name="arrow" size={15} />
                  </Link>
                ) : (
                  <a
                    className="pill pill--ghost"
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <Icon name={link.icon} size={17} />
                    {link.label}
                    <Icon name="arrow-up-right" size={14} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
