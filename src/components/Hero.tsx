import { PixelMascot } from './PixelMascot'
import { FlowerCluster } from './FlowerField'

export function Hero() {
  return (
    <section className="hero" id="pitch" aria-label="Quick pitch">
      <div className="hero-collage" aria-hidden="true">
        <FlowerCluster className="hero-flowers-a" />
        <FlowerCluster className="hero-flowers-b" />
        <span className="hero-type-ghost">KYRO</span>
        <span className="type-chip chip-a">SEASON</span>
        <span className="type-chip chip-b">OPENING</span>
        <span className="type-chip chip-c">BERKLEE MB</span>
        <span className="ink-knot" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          Berklee College of Music · Music Business
        </p>

        <h1 className="hero-name">
          <span className="hero-name-line">KYRO</span>
          <span className="hero-name-line accent">
            <span className="type-paint">ZHAO</span>
          </span>
        </h1>

        <p className="hero-pitch">
          Music-business student building clearer paths for artists — across
          markets, platforms, and culture.
        </p>

        <div className="hero-cta">
          <a className="ink-btn paint-pink" href="#work">
            View work
          </a>
          <a className="ink-btn paint-ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>

      <div className="hero-mascot-wrap">
        <PixelMascot size={168} pose="point" />
        <span className="hero-bubble">skim me ↓</span>
      </div>
    </section>
  )
}
