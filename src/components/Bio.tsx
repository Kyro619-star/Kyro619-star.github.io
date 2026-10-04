import { PixelMascot } from './PixelMascot'

export function Bio() {
  return (
    <section className="section bio" id="bio">
      <span className="section-kicker">01 · Bio / 关于</span>
      <h2 className="section-title">
        Real photo <span className="mark">+</span> 8-bit twin
      </h2>
      <p className="section-lead">
        Berklee Music Business 在读。关心创作者如何被看见、如何被公平对待，以及音乐
        × 产品 / 平台如何真正解决问题——而不是跟风概念。
      </p>

      <div className="bio-layout">
        <figure className="bio-photo-frame">
          <img
            src="/assets/photo.jpg"
            alt="Portrait of Kyro Zhao"
            className="bio-photo"
          />
          <figcaption className="bio-photo-cap">KYRO · IRL</figcaption>
          <span className="bio-tape" aria-hidden="true" />
        </figure>

        <div className="bio-copy">
          <div className="bio-mascot-row">
            <PixelMascot size={112} waving />
            <p className="bio-pixel-note">pixel twin · 像素分身</p>
          </div>

          <ul className="bio-points">
            <li>
              <strong>Who:</strong> Kyro Zhao — Berklee College of Music, Music
              Business.
            </li>
            <li>
              <strong>Focus:</strong> artist growth, rights clarity, marketing +
              product thinking across US / China contexts.
            </li>
            <li>
              <strong>Also:</strong> dance performer &amp; songwriter — culture
              first, decks second.
            </li>
          </ul>

          <div className="bio-tags" aria-label="Highlights">
            <span>Berklee</span>
            <span>Music Business</span>
            <span>Marketing × Product</span>
            <span>Dance</span>
            <span>Original Songs</span>
          </div>
        </div>
      </div>
    </section>
  )
}
