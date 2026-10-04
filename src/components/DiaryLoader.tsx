import { useEffect, useState } from 'react'
import { PixelMascot } from './PixelMascot'
import { FlowerCluster } from './FlowerField'

type DiaryLoaderProps = {
  onDone: () => void
}

type Phase = 'closed' | 'flipping' | 'open' | 'exit'

const HINTS: Record<Phase, string> = {
  closed: 'A closed diary — wait for the turn',
  flipping: 'Turning the page…',
  open: 'Experiences · work · days',
  exit: 'Entering…',
}

export function DiaryLoader({ onDone }: DiaryLoaderProps) {
  const [phase, setPhase] = useState<Phase>('closed')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      onDone()
      return
    }

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
                <PixelMascot size={120} pose="wave" />
                <p className="page-hand">Experiences</p>
                <p className="page-note">
                  music business · dance · original songs
                </p>
                <FlowerCluster className="page-flowers" />
              </div>
            </div>
            <div className="diary-page diary-page-right">
              <div className="page-paper ruled">
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
              <FlowerCluster className="cover-flowers" />
              <p className="cover-brand">KYRO</p>
              <p className="cover-sub">diary / scrapbook</p>
            </div>
            <div className="cover-face cover-back">
              <p className="cover-back-text">for people who skim · then stay</p>
              <PixelMascot size={68} bust pose="wave" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
