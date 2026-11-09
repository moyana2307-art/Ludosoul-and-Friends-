import { Link } from 'react-router-dom'
import treeMark from '../assets/brand/ludosoul-tree.png'
import { brand, ui } from '../data/siteContent'
import Icon from './Icon'

export default function TopBar({ onConnect }) {
  return (
    <header className="topbar">
      <Link to="/" className="topbar__brand" aria-label={`${brand.name} — home`}>
        <img className="topbar__tree" src={treeMark} alt="" width="38" height="32" />
        <span className="topbar__wordmark">
          {brand.shortName} <span>{brand.friends}</span>
        </span>
      </Link>

      <button
        type="button"
        className="pill pill--ghost topbar__connect"
        onClick={onConnect}
        aria-haspopup="dialog"
      >
        {ui.connect}
        <Icon name="arrow-up-right" size={15} />
      </button>
    </header>
  )
}
