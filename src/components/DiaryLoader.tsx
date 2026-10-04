import { useEffect, useState } from 'react'
import { PixelMascot } from './PixelMascot'
import { CrayonFlower, InkScribble, VinylRough } from './Doodles'

type DiaryLoaderProps = {
  onDone: () => void
}

type Phase = 'closed' | 'flipping' | 'open' | 'exit'

const HINTS: Record<Phase, string> = {
  closed: 'A closed diary · wait for the turn',
  flipping: 'Turning the page…',
  open: 'My world · my experiences',
  exit: 'Stepping inside…',
}

/**
 * Slow, staged diary open:
 * closed → page-turn → linger on open spread → fade into site
 */
export function DiaryLoader({ onDone }: DiaryLoaderProps) {
  const [phase, setPhase] = useState<Phase>('closed')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      onDone()
      return
    }

    // Slow, readable stages (~9.5s): closed → turn → linger open → enter
    const timers = [
      window.setTimeout(() => setPhase('flipping'), 2000),
      window.setTimeout(() => setPhase('open'), 4800),
      window.setTimeout(() => setPhase('exit'), 7800),
      window.setTimeout(() => onDone(), 9400),
    ]

    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [onDone])

  return (
    <div
      className={`diary-loader phase-${phase}`}
      role="dialog"
      aria-label="Opening diary"
    >
      <button type="button" className="diary-skip" onClick={onDone}>
        Skip
      </button>

      <div className="diary-stage">
        <p className="diary-stage-label">{HINTS[phase]}</p>

        <div className="diary-scene">
          <div className="diary-spread">
            <div className="diary-page diary-page-left">
              <div className="page-paper">
                <p className="page-margin-date">Vol. 01 — Berklee</p>
                <PixelMascot size={124} waving />
                <p className="page-hand">My world</p>
                <p className="page-note">
                  music business · dance · original songs
                </p>
                <div className="page-motif-row">
                  <VinylRough className="motif-sm" />
                  <CrayonFlower className="motif-sm flower" />
                </div>
              </div>
            </div>
            <div className="diary-page diary-page-right">
              <div className="page-paper ruled">
                <InkScribble className="page-scribble" />
                <p className="page-title">Open the diary</p>
                <p className="page-title-en">into the work &amp; the days</p>
                <ul className="page-list">
                  <li>who — Kyro Zhao</li>
                  <li>where — Berklee Music Business</li>
                  <li>what — clearer paths for artists</li>
                </ul>
                <span className="ink-bleed pink" />
                <span className="ink-bleed yellow" />
              </div>
            </div>
          </div>

          <div className="diary-cover-flip" aria-hidden="true">
            <div className="cover-face cover-front">
              <span className="cover-grain" />
              <p className="cover-brand">KYRO</p>
              <p className="cover-sub">diary / scrapbook</p>
              <InkScribble className="cover-scribble" />
              <CrayonFlower className="cover-flower" />
            </div>
            <div className="cover-face cover-back">
              <p className="cover-back-text">for people who skim · then stay</p>
              <PixelMascot size={70} bust />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
