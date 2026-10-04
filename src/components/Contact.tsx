import { InkScribble, MarkerStroke } from './Doodles'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <span className="section-kicker hand-label">03 · Contact</span>
      <h2 className="section-title">
        Next step is{' '}
        <span className="type-paint blue-wash">easy</span>
      </h2>
      <p className="section-lead">
        Hiring, collab, or music business talk — one click. No maze.
      </p>

      <div className="contact-strip">
        <a className="ink-btn paint-pink" href="mailto:boxinzhao619@gmail.com">
          Email me
        </a>
        <a
          className="ink-btn paint-blue"
          href="https://github.com/Kyro619-star"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a className="ink-btn paint-ghost" href="#pitch">
          Back to top
        </a>
      </div>

      <p className="contact-meta">
        boxinzhao619@gmail.com · Boston / remote OK
      </p>
      <MarkerStroke className="contact-stroke" color="#ffe500" />
      <InkScribble className="contact-scribble" />
    </section>
  )
}
