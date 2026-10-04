import { PixelMascot } from './PixelMascot'

const LINKS = [
  { href: '#pitch', label: 'Pitch' },
  { href: '#bio', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <a href="#pitch" className="nav-brand">
          <PixelMascot size={40} bust pose="wave" />
          <span>
            Kyro Zhao
            <small>Berklee · Music Business</small>
          </span>
        </a>
        <nav aria-label="Main">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
