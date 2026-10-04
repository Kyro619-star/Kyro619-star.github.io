import { PixelMascot } from './PixelMascot'
import {
  ChartMark,
  CrayonFlower,
  HeadphonesMark,
  InkScribble,
  TicketMark,
  VinylMark,
} from './Marks'

export function Hero() {
  return (
    <section className="hero" id="pitch" aria-label="Quick pitch">
      <div className="hero-marks" aria-hidden="true">
        <CrayonFlower className="hm hm-flower-a" color="#fd38d6" />
        <CrayonFlower className="hm hm-flower-b" color="#ff5f18" center="#efeded" />
        <VinylMark className="hm hm-vinyl" />
        <TicketMark className="hm hm-ticket" />
        <ChartMark className="hm hm-chart" />
        <HeadphonesMark className="hm hm-phones" />
        <InkScribble className="hm hm-scribble" />
        <span className="hm hm-type">KYRO</span>
        <span className="hm hm-chip chip-lime">PITCH</span>
        <span className="hm hm-chip chip-sky">BERKLEE MB</span>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Berklee College of Music · Music Business</p>

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
        <PixelMascot size={148} pose="wave" />
        <span className="hero-bubble">skim me ↓</span>
      </div>
    </section>
  )
}
