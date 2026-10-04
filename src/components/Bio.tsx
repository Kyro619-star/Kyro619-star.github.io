import { useEffect, useRef, useState } from 'react'
import { PixelMascot } from './PixelMascot'
import { FlowerCluster } from './FlowerField'

export function Bio() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`section bio ${inView ? 'is-inview' : ''}`}
      id="bio"
    >
      <FlowerCluster className="section-flowers" />
      <span className="section-kicker">01 · About</span>
      <h2 className="section-title">
        Real photo <span className="paint-plus">+</span> pixel twin
      </h2>
      <p className="section-lead">
        Berklee Music Business student. Curious about how artists get seen,
        paid fairly, and how music × product actually solves problems — not
        hype.
      </p>

      <div className="bio-layout">
        <figure className="bio-photo-frame">
          <img
            src="/assets/photo.jpg"
            alt="Portrait of Kyro Zhao"
            className="bio-photo"
          />
          <figcaption className="bio-photo-cap">Kyro · IRL</figcaption>
        </figure>

        <div className="bio-copy">
          <div className="bio-mascot-row">
            <PixelMascot size={128} pose="present" />
            <p className="bio-pixel-note">
              pixel twin
              <small>wavy hair · eye whites · fancy fit</small>
            </p>
          </div>

          <ul className="bio-points">
            <li>
              <strong>Who —</strong> Kyro Zhao, Berklee College of Music, Music
              Business.
            </li>
            <li>
              <strong>Focus —</strong> artist growth, rights clarity, marketing
              + product thinking across US / China contexts.
            </li>
            <li>
              <strong>Also —</strong> dance performer &amp; songwriter. Culture
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
