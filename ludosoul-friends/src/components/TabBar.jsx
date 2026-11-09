import { NavLink } from 'react-router-dom'
import { navItems, ui } from '../data/siteContent'
import Icon from './Icon'

export default function TabBar() {
  return (
    <nav className="tabbar" aria-label={ui.menu}>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) => `tab-link${isActive ? ' is-active' : ''}`}
        >
          <Icon name={item.icon} size={21} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
