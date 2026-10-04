import { PixelMascot } from './PixelMascot'
import { CrayonFlower, HalftoneBlob, InkScribble, MarkerStroke, VinylRough } from './Doodles'

export function Hero() {
  return (
    <section className="hero" id="pitch" aria-label="Quick pitch">
      <div className="hero-collage" aria-hidden="true">
        <span className="hero-type-ghost">KYRO</span>
        <CrayonFlower className="hero-doodle flower-a" />
        <InkScribble className="hero-doodle scribble-a" />
        <HalftoneBlob className="hero-doodle blob-a" />
        <VinylRough className="hero-doodle vinyl-a" />
        <MarkerStroke className="hero-doodle stroke-a" color="#ffe500" />
        <MarkerStroke className="hero-doodle stroke-b" color="#1e5eff" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          <img src="/assets/berklee.svg" alt="" width={14} height={14} />
          Berklee College of Music · Music Business
        </p>

        <h1 className="hero-name">
          <span className="hero-name-line">KYRO</span>
          <span className="hero-name-line accent">
            <span className="type-paint">ZHAO</span>
          </span>
        </h1>

        <p className="hero-pitch">
          Music-business student building clearer paths for artists —
          across markets, platforms, and culture.
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
        <PixelMascot size={172} waving className="hero-mascot" />
        <span className="hero-bubble">hi — skim me</span>
      </div>
    </section>
  )
}
