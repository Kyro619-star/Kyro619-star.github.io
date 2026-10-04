import { useEffect, useState } from 'react'
import { PixelMascot } from './PixelMascot'
import { ChartMotif, StaveMotif, TicketMotif, VinylMotif } from './Motifs'

type DiaryLoaderProps = {
  onDone: () => void
}

type Phase = 'closed' | 'flipping' | 'open' | 'exit'

export function DiaryLoader({ onDone }: DiaryLoaderProps) {
  const [phase, setPhase] = useState<Phase>('closed')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      onDone()
      return
    }

    const timers = [
      window.setTimeout(() => setPhase('flipping'), 700),
      window.setTimeout(() => setPhase('open'), 1800),
      window.setTimeout(() => setPhase('exit'), 3000),
      window.setTimeout(() => onDone(), 3800),
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
        Skip →
      </button>

      <div className="diary-stage">
        <div className="diary-scene">
          {/* open spread underneath */}
          <div className="diary-spread">
            <div className="diary-page diary-page-left">
              <div className="page-paper">
                <p className="page-margin-date">VOL.01 · BERKLEE</p>
                <PixelMascot size={118} waving />
                <p className="page-hand">Kyro 的世界</p>
                <p className="page-note">music business · dance · songs</p>
                <div className="page-motif-row">
                  <VinylMotif className="motif-sm" />
                  <TicketMotif className="motif-sm" />
                </div>
              </div>
            </div>
            <div className="diary-page diary-page-right">
              <div className="page-paper ruled">
                <StaveMotif className="motif-float" />
                <ChartMotif className="motif-float-b" />
                <p className="page-title-zh">翻开手帐</p>
                <p className="page-title-en">open the scrapbook</p>
                <ul className="page-list">
                  <li>who · Kyro Zhao</li>
                  <li>where · Berklee MB</li>
                  <li>what · artists, clearer paths</li>
                </ul>
                <span className="washi washi-a" />
                <span className="washi washi-b" />
              </div>
            </div>
          </div>

          {/* full cover — flips open from the spine */}
          <div className="diary-cover-flip" aria-hidden="true">
            <div className="cover-face cover-front">
              <span className="cover-grain" />
              <p className="cover-brand">KYRO</p>
              <p className="cover-sub">SCRAPBOOK / 手帐</p>
              <span className="cover-star" />
              <span className="cover-scribble" />
              <VinylMotif className="cover-vinyl" />
            </div>
            <div className="cover-face cover-back">
              <p className="cover-back-text">for HR · skim friendly</p>
              <PixelMascot size={72} bust />
            </div>
          </div>
        </div>

        <p className="diary-hint">
          {phase === 'closed' && '手帐合上 · diary closed'}
          {phase === 'flipping' && '翻页中 · page turning…'}
          {(phase === 'open' || phase === 'exit') && '进入世界 · enter'}
        </p>
      </div>
    </div>
  )
}
