import { useEffect, useState } from 'react'
import { PixelMascot, type MascotPose } from './PixelMascot'

const SECTION_POSE: { id: string; pose: MascotPose; caption: string }[] = [
  { id: 'pitch', pose: 'point', caption: 'pitch →' },
  { id: 'bio', pose: 'present', caption: 'about' },
  { id: 'work', pose: 'business', caption: 'biz mode' },
  { id: 'contact', pose: 'contact', caption: 'say hi' },
]

function poseForScroll(): { pose: MascotPose; caption: string } {
  const mid = window.innerHeight * 0.35
  let current = SECTION_POSE[0]
  for (const s of SECTION_POSE) {
    const el = document.getElementById(s.id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top <= mid) current = s
  }
  // refine work lane by nearest work heading tags if present
  if (current.id === 'work') {
    const dance = document.querySelector('.lane-dance')
    const songs = document.querySelector('.lane-songs')
    if (songs) {
      const r = songs.getBoundingClientRect()
      if (r.top < mid + 80 && r.bottom > mid - 80) {
        return { pose: 'music', caption: 'songs' }
      }
    }
    if (dance) {
      const r = dance.getBoundingClientRect()
      if (r.top < mid + 80 && r.bottom > mid - 80) {
        return { pose: 'dance', caption: 'dance' }
      }
    }
  }
  return { pose: current.pose, caption: current.caption }
}

export function Companion({ visible }: { visible: boolean }) {
  const [pose, setPose] = useState<MascotPose>('wave')
  const [caption, setCaption] = useState('hey')

  useEffect(() => {
    if (!visible) return
    const update = () => {
      const next = poseForScroll()
      setPose(next.pose)
      setCaption(next.caption)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [visible])

  if (!visible) return null

  return (
    <aside className="companion" aria-hidden="true">
      <PixelMascot size={96} pose={pose} />
      <span className="companion-caption">{caption}</span>
    </aside>
  )
}
