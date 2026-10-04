import { useEffect, useState } from 'react'
import { PixelMascot } from './PixelMascot'

type DiaryLoaderProps = {
  onDone: () => void
}

const STEPS = [
  '翻开手帐…',
  '贴纸掉了一地…',
  'Kyro 的世界加载中…',
]

export function DiaryLoader({ onDone }: DiaryLoaderProps) {
  const [step, setStep] = useState(0)
  const [opening, setOpening] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      onDone()
      return
    }

    const timers = [
      window.setTimeout(() => setStep(1), 700),
      window.setTimeout(() => setStep(2), 1400),
      window.setTimeout(() => setOpening(true), 2100),
      window.setTimeout(() => onDone(), 2900),
    ]

    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [onDone])

  return (
    <div className={`diary-loader ${opening ? 'is-opening' : ''}`} role="dialog" aria-label="Opening diary">
      <button type="button" className="diary-skip" onClick={onDone}>
        Skip →
      </button>

      <div className="diary-stage">
        <div className="diary-book">
          <div className="diary-cover diary-cover-left">
            <span className="diary-tape pink" />
            <span className="diary-tape yellow" />
            <p className="diary-cover-title">KYRO</p>
            <p className="diary-cover-sub">SCRAPBOOK / 手帐</p>
            <div className="diary-doodle star" />
            <div className="diary-doodle scribble" />
          </div>
          <div className="diary-cover diary-cover-right">
            <div className="diary-page-lines" />
            <PixelMascot size={88} waving />
            <p className="diary-step">{STEPS[step]}</p>
            <div className="diary-stickers">
              <span className="chip pink">MUSIC BIZ</span>
              <span className="chip blue">DANCE</span>
              <span className="chip lime">SONGS</span>
            </div>
          </div>
        </div>
        <p className="diary-hint">打开手帐，进入我的世界 · Open the diary</p>
      </div>
    </div>
  )
}
