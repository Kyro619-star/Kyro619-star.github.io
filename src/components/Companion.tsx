import { useEffect, useState } from 'react'
import { PixelMascot, type MascotPose } from './PixelMascot'

const SECTIONS: { id: string; pose: MascotPose; caption: string }[] = [
  { id: 'pitch', pose: 'wave', caption: 'hey' },
  { id: 'bio', pose: 'present', caption: 'about' },
  { id: 'work', pose: 'business', caption: 'biz' },
  { id: 'contact', pose: 'contact', caption: 'hi' },
]

function resolve() {
  const mid = window.innerHeight * 0.38
  let cur = SECTIONS[0]
  for (const s of SECTIONS) {
    const el = document.getElementById(s.id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= mid) cur = s
  }
  if (cur.id === 'work') {
    const songs = document.querySelector('.lane-songs')
    const dance = document.querySelector('.lane-dance')
    if (songs) {
      const r = songs.getBoundingClientRect()
      if (r.top < mid + 90 && r.bottom > mid - 90) {
        return { pose: 'music' as MascotPose, caption: 'songs' }
      }
    }
    if (dance) {
      const r = dance.getBoundingClientRect()
      if (r.top < mid + 90 && r.bottom > mid - 90) {
        return { pose: 'dance' as MascotPose, caption: 'dance' }
      }
    }
  }
  return { pose: cur.pose, caption: cur.caption }
}

export function Companion({ visible }: { visible: boolean }) {
  const [pose, setPose] = useState<MascotPose>('wave')
  const [caption, setCaption] = useState('hey')

  useEffect(() => {
    if (!visible) return
    const tick = () => {
      const n = resolve()
      setPose(n.pose)
      setCaption(n.caption)
    }
    tick()
    window.addEventListener('scroll', tick, { passive: true })
    window.addEventListener('resize', tick)
    return () => {
      window.removeEventListener('scroll', tick)
      window.removeEventListener('resize', tick)
    }
  }, [visible])

  if (!visible) return null

  return (
    <aside className="companion" aria-hidden="true">
      <PixelMascot size={84} pose={pose} />
      <span className="companion-caption">{caption}</span>
    </aside>
  )
}
