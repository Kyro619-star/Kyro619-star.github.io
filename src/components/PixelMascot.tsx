type PixelMascotProps = {
  size?: number
  waving?: boolean
  className?: string
  label?: string
  bust?: boolean
}

/**
 * Fashion 8-bit / chibi twin of Kyro.
 * Style sheet: big head, oversized eyes with iris+glint, chunky outline, flat fashion fills.
 * Likeness: wavy shoulder-length black hair, warm smile + teeth, cheek mole (viewer's right), black collared shirt.
 */
export function PixelMascot({
  size = 120,
  waving = false,
  className = '',
  label = 'Kyro pixel twin',
  bust = false,
}: PixelMascotProps) {
  const viewBox = bust ? '0 0 32 30' : '0 0 32 48'
  const height = bust ? (size * 30) / 32 : (size * 48) / 32

  return (
    <svg
      className={`pixel-mascot ${waving ? 'is-waving' : ''} ${className}`}
      width={size}
      height={height}
      viewBox={viewBox}
      shapeRendering="crispEdges"
      role="img"
      aria-label={label}
    >
      {!bust && (
        <>
          <ellipse cx="16" cy="46.5" rx="8" ry="1.4" fill="#111" opacity="0.2" />
          {/* shoes */}
          <rect x="10" y="43" width="5" height="2" fill="#0d0d0d" />
          <rect x="17" y="43" width="5" height="2" fill="#0d0d0d" />
          {/* legs */}
          <rect x="11" y="38" width="3" height="6" fill="#1a1a1a" />
          <rect x="18" y="38" width="3" height="6" fill="#1a1a1a" />
          {/* black shirt / torso */}
          <rect x="10" y="27" width="12" height="12" fill="#141414" />
          <rect x="9" y="28" width="2" height="8" fill="#141414" />
          <rect x="21" y="28" width="2" height="8" fill="#141414" />
          {/* collar */}
          <rect x="12" y="27" width="8" height="2" fill="#0a0a0a" />
          <rect x="15" y="29" width="2" height="3" fill="#2c2c2c" />
          <rect x="11" y="33" width="10" height="1" fill="#1e5eff" />
          {/* left arm */}
          <rect x="7" y="28" width="3" height="8" fill="#141414" />
          <rect x="7" y="35" width="3" height="2" fill="#f0c7a0" />
          {/* right waving arm */}
          <g className="pixel-arm-wave">
            <rect x="22" y="27" width="3" height="7" fill="#141414" />
            <rect x="23" y="24" width="3" height="4" fill="#f0c7a0" />
            <rect x="26" y="23" width="2" height="2" fill="#ffe500" />
          </g>
        </>
      )}

      {/* neck */}
      <rect x="14" y={bust ? 25 : 25} width="4" height="3" fill="#e8b48c" />

      {/* face plate */}
      <rect x="9" y="8" width="14" height="15" fill="#f0c7a0" />
      <rect x="10" y="22" width="12" height="2" fill="#f0c7a0" />

      {/* wavy shoulder-length hair silhouette */}
      <rect x="8" y="1" width="16" height="3" fill="#111" />
      <rect x="6" y="3" width="20" height="4" fill="#111" />
      <rect x="5" y="6" width="5" height="12" fill="#111" />
      <rect x="22" y="6" width="5" height="12" fill="#111" />
      {/* long side waves past shoulders */}
      <rect x="4" y="10" width="3" height="14" fill="#111" />
      <rect x="25" y="10" width="3" height="14" fill="#111" />
      <rect x="3" y="16" width="2" height="10" fill="#111" />
      <rect x="27" y="16" width="2" height="10" fill="#111" />
      <rect x="4" y="25" width="3" height="4" fill="#111" />
      <rect x="25" y="25" width="3" height="4" fill="#111" />
      <rect x="5" y="28" width="2" height="2" fill="#1a1a1a" />
      <rect x="25" y="28" width="2" height="2" fill="#1a1a1a" />
      {/* center-part bangs + wavy fringe */}
      <rect x="9" y="5" width="5" height="5" fill="#111" />
      <rect x="18" y="5" width="5" height="5" fill="#111" />
      <rect x="14" y="5" width="4" height="2" fill="#111" />
      <rect x="10" y="9" width="2" height="2" fill="#111" />
      <rect x="20" y="9" width="2" height="2" fill="#111" />
      {/* soft hair highlight chunks */}
      <rect x="11" y="2" width="3" height="1" fill="#2a2a2a" />
      <rect x="18" y="3" width="4" height="1" fill="#2a2a2a" />

      {/* oversized fashion eyes */}
      <rect x="11" y="12" width="3" height="5" fill="#fff" />
      <rect x="18" y="12" width="3" height="5" fill="#fff" />
      <rect x="12" y="13" width="2" height="3" fill="#1e3a8a" />
      <rect x="19" y="13" width="2" height="3" fill="#1e3a8a" />
      <rect x="12" y="13" width="1" height="1" fill="#fff" />
      <rect x="19" y="13" width="1" height="1" fill="#fff" />

      {/* warm open smile + teeth */}
      <rect x="13" y="19" width="6" height="2" fill="#111" />
      <rect x="14" y="19" width="4" height="1" fill="#fffef5" />
      {/* blush */}
      <rect x="10" y="17" width="2" height="1" fill="#ff8fb8" opacity="0.9" />
      <rect x="20" y="17" width="2" height="1" fill="#ff8fb8" opacity="0.9" />
      {/* mole — left cheek / viewer's right */}
      <rect x="21" y="18" width="1" height="1" fill="#5a3a2a" />
    </svg>
  )
}
