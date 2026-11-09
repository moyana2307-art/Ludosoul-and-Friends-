import logoFull from '../assets/brand/ludosoul-logo.png'
import { brand, footer } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src={logoFull}
            alt={footer.logoAlt}
            width="240"
            height="234"
            loading="lazy"
          />
          <p className="footer__tagline">{brand.tagline}</p>
        </div>

        <div className="footer__right">
          <nav className="footer__links" aria-label="Social links">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="footer__copy">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
