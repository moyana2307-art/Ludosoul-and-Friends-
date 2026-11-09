import { NavLink } from 'react-router-dom'
import { brand, navItems, ui } from '../data/siteContent'
import Icon from './Icon'

export default function Sidebar() {
  return (
    <nav className="sidebar" aria-label={ui.menu}>
      <p className="sidebar__label">Navigate</p>
      <div className="sidebar__links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `side-link${isActive ? ' is-active' : ''}`
            }
          >
            <span className="side-link__icon">
              <Icon name={item.icon} size={20} />
            </span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="sidebar__foot">
        <span className="sidebar__dot" aria-hidden="true" />
        {brand.tagline}
      </div>
    </nav>
  )
}
