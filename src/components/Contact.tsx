import { StaveMotif } from './Motifs'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <span className="section-kicker">03 · Contact / 联系</span>
      <h2 className="section-title">
        Next step is <span className="mark-smear blue">easy</span>
      </h2>
      <p className="section-lead">
        Hiring, collab, or just want to talk music business? One click. No maze.
      </p>

      <div className="contact-strip">
        <a className="ink-btn pink" href="mailto:boxinzhao619@gmail.com">
          Email me
        </a>
        <a
          className="ink-btn blue"
          href="https://github.com/Kyro619-star"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a className="ink-btn ghost" href="#pitch">
          Back to top
        </a>
        <StaveMotif className="contact-stave" />
      </div>

      <p className="contact-meta">
        <span>boxinzhao619@gmail.com</span>
        <span aria-hidden="true"> · </span>
        <span>Boston / 远程 OK</span>
      </p>
    </section>
  )
}
