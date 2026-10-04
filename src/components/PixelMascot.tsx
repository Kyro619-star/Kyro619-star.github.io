import type { CSSProperties } from 'react'

type PixelMascotProps = {
  size?: number
  waving?: boolean
  className?: string
  label?: string
}

/**
 * 8-bit mascot inspired by Kyro: long black wavy hair, warm smile, black shirt.
 * Drawn as CSS pixel blocks so it stays crisp at any scale.
 */
export function PixelMascot({
  size = 96,
  waving = false,
  className = '',
  label = 'Kyro pixel mascot',
}: PixelMascotProps) {
  const scale = size / 16

  return (
    <div
      className={`pixel-mascot ${waving ? 'is-waving' : ''} ${className}`}
      style={
        {
          width: size,
          height: size,
          '--mascot-scale': scale,
        } as CSSProperties
      }
      role="img"
      aria-label={label}
    >
      <div className="pixel-grid" aria-hidden="true">
        {/* hair crown / volume */}
        <i style={{ left: 3, top: 0, width: 10, height: 2, background: '#111' }} />
        <i style={{ left: 2, top: 1, width: 12, height: 2, background: '#111' }} />
        <i style={{ left: 1, top: 2, width: 14, height: 3, background: '#111' }} />
        {/* face */}
        <i style={{ left: 3, top: 4, width: 10, height: 6, background: '#f0c7a0' }} />
        {/* long side hair (shoulder-length) */}
        <i style={{ left: 1, top: 4, width: 2, height: 9, background: '#111' }} />
        <i style={{ left: 13, top: 4, width: 2, height: 9, background: '#111' }} />
        <i style={{ left: 0, top: 7, width: 2, height: 7, background: '#111' }} />
        <i style={{ left: 14, top: 7, width: 2, height: 7, background: '#111' }} />
        {/* bangs / middle part */}
        <i style={{ left: 3, top: 3, width: 4, height: 2, background: '#111' }} />
        <i style={{ left: 9, top: 3, width: 4, height: 2, background: '#111' }} />
        <i style={{ left: 7, top: 3, width: 2, height: 1, background: '#111' }} />
        {/* eyes */}
        <i style={{ left: 5, top: 6, width: 1, height: 1, background: '#111' }} />
        <i style={{ left: 10, top: 6, width: 1, height: 1, background: '#111' }} />
        {/* blush */}
        <i style={{ left: 4, top: 7, width: 1, height: 1, background: '#ff8fb8' }} />
        <i style={{ left: 11, top: 7, width: 1, height: 1, background: '#ff8fb8' }} />
        {/* smile */}
        <i style={{ left: 6, top: 8, width: 4, height: 1, background: '#111' }} />
        <i style={{ left: 5, top: 7, width: 1, height: 1, background: '#111' }} />
        <i style={{ left: 10, top: 7, width: 1, height: 1, background: '#111' }} />
        {/* neck */}
        <i style={{ left: 7, top: 10, width: 2, height: 1, background: '#e8b48c' }} />
        {/* black shirt */}
        <i style={{ left: 4, top: 11, width: 8, height: 4, background: '#111' }} />
        <i style={{ left: 3, top: 12, width: 1, height: 3, background: '#111' }} />
        <i style={{ left: 12, top: 12, width: 1, height: 3, background: '#111' }} />
        {/* cobalt accent stripe */}
        <i style={{ left: 5, top: 12, width: 6, height: 1, background: '#1e5eff' }} />
        {/* waving hand */}
        <i className="pixel-hand" style={{ left: 13, top: 11, width: 2, height: 2, background: '#f0c7a0' }} />
        <i style={{ left: 14, top: 10, width: 1, height: 1, background: '#ffe500' }} />
      </div>
    </div>
  )
}
