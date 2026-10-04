import { PixelMascot } from './PixelMascot'

const LINKS = [
  { href: '#pitch', label: 'Pitch' },
  { href: '#bio', label: 'Bio' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <a href="#pitch" className="nav-brand">
          <PixelMascot size={36} />
          <span>
            Kyro Zhao
            <small>Berklee · MB</small>
          </span>
        </a>
        <nav aria-label="Main">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
