type PixelMascotProps = {
  size?: number
  waving?: boolean
  className?: string
  label?: string
}

/**
 * 8-bit mascot inspired by Kyro: long black hair, warm smile, black shirt.
 * Drawn as CSS pixel blocks so it stays crisp at any scale.
 */
export function PixelMascot({
  size = 96,
  waving = false,
  className = '',
  label = 'Kyro pixel mascot',
}: PixelMascotProps) {
  return (
    <div
      className={`pixel-mascot ${waving ? 'is-waving' : ''} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={label}
    >
      <div className="pixel-grid" aria-hidden="true">
        {/* hair crown */}
        <i style={{ left: 3, top: 1, width: 10, height: 2, background: '#111' }} />
        <i style={{ left: 2, top: 2, width: 12, height: 2, background: '#111' }} />
        <i style={{ left: 1, top: 3, width: 14, height: 3, background: '#111' }} />
        {/* face */}
        <i style={{ left: 3, top: 5, width: 10, height: 6, background: '#f0c7a0' }} />
        {/* side hair */}
        <i style={{ left: 1, top: 5, width: 2, height: 8, background: '#111' }} />
        <i style={{ left: 13, top: 5, width: 2, height: 8, background: '#111' }} />
        <i style={{ left: 0, top: 8, width: 2, height: 5, background: '#111' }} />
        <i style={{ left: 14, top: 8, width: 2, height: 5, background: '#111' }} />
        {/* bangs */}
        <i style={{ left: 3, top: 4, width: 4, height: 2, background: '#111' }} />
        <i style={{ left: 9, top: 4, width: 4, height: 2, background: '#111' }} />
        {/* eyes */}
        <i style={{ left: 5, top: 7, width: 1, height: 1, background: '#111' }} />
        <i style={{ left: 10, top: 7, width: 1, height: 1, background: '#111' }} />
        {/* blush */}
        <i style={{ left: 4, top: 8, width: 1, height: 1, background: '#ff8fb8' }} />
        <i style={{ left: 11, top: 8, width: 1, height: 1, background: '#ff8fb8' }} />
        {/* smile */}
        <i style={{ left: 6, top: 9, width: 4, height: 1, background: '#111' }} />
        <i style={{ left: 5, top: 8, width: 1, height: 1, background: '#111' }} />
        <i style={{ left: 10, top: 8, width: 1, height: 1, background: '#111' }} />
        {/* neck */}
        <i style={{ left: 7, top: 11, width: 2, height: 1, background: '#e8b48c' }} />
        {/* shirt */}
        <i style={{ left: 4, top: 12, width: 8, height: 3, background: '#111' }} />
        <i style={{ left: 3, top: 13, width: 1, height: 2, background: '#111' }} />
        <i style={{ left: 12, top: 13, width: 1, height: 2, background: '#111' }} />
        {/* accent stripe */}
        <i style={{ left: 5, top: 13, width: 6, height: 1, background: '#1e5eff' }} />
        {/* hand wave */}
        <i className="pixel-hand" style={{ left: 13, top: 12, width: 2, height: 2, background: '#f0c7a0' }} />
        <i style={{ left: 14, top: 11, width: 1, height: 1, background: '#ffe500' }} />
      </div>
    </div>
  )
}
