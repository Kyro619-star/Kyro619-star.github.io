import { PixelMascot } from './PixelMascot'

export function Hero() {
  return (
    <section className="hero" id="pitch" aria-label="Quick pitch">
      <div className="hero-bg-type" aria-hidden="true">
        KYRO
        <br />
        ZHAO
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          <img src="/assets/berklee.svg" alt="" width={16} height={16} />
          Berklee College of Music · Music Business
        </p>

        <h1 className="hero-name">
          <span className="hero-name-line">KYRO</span>
          <span className="hero-name-line accent">ZHAO</span>
        </h1>

        <p className="hero-pitch">
          把音乐商业想清楚，把创作者推得更远。
          <br />
          <span>
            Music-business student building clearer paths for artists — across
            markets, platforms, and culture.
          </span>
        </p>

        <div className="hero-cta">
          <a className="sticker-btn pink" href="#work">
            View Work / 作品
          </a>
          <a className="sticker-btn secondary" href="#contact">
            Contact / 联系
          </a>
        </div>
      </div>

      <div className="hero-mascot-wrap" aria-hidden="true">
        <PixelMascot size={140} waving className="hero-mascot" />
        <span className="hero-bubble">hi HR ↓</span>
      </div>
    </section>
  )
}
