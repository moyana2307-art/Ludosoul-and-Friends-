import { useRef } from 'react'

export default function SegmentedTabs({
  tabs,
  active,
  onChange,
  label = 'View selection',
}) {
  const tabRefs = useRef({})

  const handleKeyDown = (event) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === active)
    let nextIndex

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % tabs.length
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1
    }

    if (nextIndex === undefined) return
    event.preventDefault()
    const nextTab = tabs[nextIndex]
    onChange(nextTab.id)
    tabRefs.current[nextTab.id]?.focus()
  }

  return (
    <div
      className="segmented"
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[tab.id] = element
            }}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            className={`segmented__tab${isActive ? ' is-active' : ''}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
