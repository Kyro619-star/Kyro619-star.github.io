import { useEffect, useState } from 'react'
import { PixelMascot } from './PixelMascot'
import {
  ChartMark,
  CrayonFlower,
  InkScribble,
  TicketMark,
  VinylMark,
} from './Marks'

type Props = { onDone: () => void }
type Phase = 'closed' | 'opening' | 'open' | 'exit'

const HINTS: Record<Phase, string> = {
  closed: 'Closed book — wait for the turn',
  opening: 'Opening…',
  open: 'Experiences · work · days',
  exit: 'Entering…',
}

/**
 * New book-open intro on grey ground.
 * NOT the rejected cream lined diary spread.
 */
export function BookOpen({ onDone }: Props) {
  const [phase, setPhase] = useState<Phase>('closed')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone()
      return
    }
    const t = [
      window.setTimeout(() => setPhase('opening'), 1800),
      window.setTimeout(() => setPhase('open'), 4200),
      window.setTimeout(() => setPhase('exit'), 7000),
      window.setTimeout(() => onDone(), 8600),
    ]
    return () => t.forEach(clearTimeout)
  }, [onDone])

  return (
    <div className={`book-open phase-${phase}`} role="dialog" aria-label="Opening book">
      <button type="button" className="book-skip" onClick={onDone}>
        Skip
      </button>

      <p className="book-hint">{HINTS[phase]}</p>

      <div className="book-stage">
        {/* under-spread: grey collage board — not cream notebook lines */}
        <div className="book-spread">
          <div className="book-leaf leaf-left">
            <PixelMascot size={100} pose="wave" />
            <p className="leaf-kicker">Berklee · MB</p>
            <p className="leaf-title">Experiences</p>
            <div className="leaf-motifs">
              <VinylMark className="m" />
              <ChartMark className="m" />
              <TicketMark className="m" />
            </div>
          </div>
          <div className="book-leaf leaf-right">
            <InkScribble className="leaf-scribble" />
            <ul className="leaf-list">
              <li>who — Kyro Zhao</li>
              <li>where — Music Business</li>
              <li>what — clearer paths for artists</li>
            </ul>
            <CrayonFlower className="leaf-flower" color="#c3e23d" />
          </div>
        </div>

        {/* hardcover flips away */}
        <div className="book-cover" aria-hidden="true">
          <div className="cover-front">
            <CrayonFlower className="cover-flower-a" color="#fd38d6" />
            <CrayonFlower className="cover-flower-b" color="#ff5f18" center="#efeded" />
            <p className="cover-name">KYRO</p>
            <p className="cover-label">scrapbook</p>
            <span className="cover-type">PITCH</span>
          </div>
          <div className="cover-back">
            <p>skim-friendly</p>
            <PixelMascot size={56} bust pose="wave" />
          </div>
        </div>
      </div>
    </div>
  )
}
