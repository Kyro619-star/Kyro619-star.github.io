import { PixelMascot } from './PixelMascot'
import { HalftoneBurst, StaveMotif, VinylMotif } from './Motifs'

export function Hero() {
  return (
    <section className="hero" id="pitch" aria-label="Quick pitch">
      <div className="hero-collage" aria-hidden="true">
        <span className="hero-type-ghost">KYRO</span>
        <VinylMotif className="hero-motif vinyl" />
        <StaveMotif className="hero-motif stave" />
        <HalftoneBurst className="hero-motif burst" />
        <span className="crayon-smear pink" />
        <span className="crayon-smear blue" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow stamp">
          <img src="/assets/berklee.svg" alt="" width={14} height={14} />
          Berklee · Music Business
        </p>

        <h1 className="hero-name">
          <span className="hero-name-line">KYRO</span>
          <span className="hero-name-line accent">
            <span className="type-cut">ZHAO</span>
          </span>
        </h1>

        <p className="hero-pitch">
          把音乐商业想清楚，把创作者推得更远。
          <span>
            Music-business student building clearer paths for artists — across
            markets, platforms, and culture.
          </span>
        </p>

        <div className="hero-cta">
          <a className="ink-btn pink" href="#work">
            View Work / 作品
          </a>
          <a className="ink-btn ghost" href="#contact">
            Contact / 联系
          </a>
        </div>
      </div>

      <div className="hero-mascot-wrap">
        <PixelMascot size={168} waving className="hero-mascot" />
        <span className="hero-bubble">hi HR ↓</span>
      </div>
    </section>
  )
}
