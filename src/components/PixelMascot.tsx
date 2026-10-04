export type MascotPose =
  | 'wave'
  | 'point'
  | 'present'
  | 'business'
  | 'dance'
  | 'music'
  | 'contact'

type PixelMascotProps = {
  size?: number
  pose?: MascotPose
  className?: string
  label?: string
  bust?: boolean
}

/**
 * Fancy K-pop 8-bit Kyro twin.
 * Likeness: wavy shoulder-length black hair, cheek mole, eye whites.
 * Outfit: cropped jacket, accent belt, boots — fashion stage fit.
 */
export function PixelMascot({
  size = 120,
  pose = 'wave',
  className = '',
  label = 'Kyro pixel companion',
  bust = false,
}: PixelMascotProps) {
  const viewBox = bust ? '0 0 32 30' : '0 0 32 48'
  const height = bust ? (size * 30) / 32 : (size * 48) / 32

  return (
    <svg
      className={`pixel-mascot pose-${pose} ${className}`}
      width={size}
      height={height}
      viewBox={viewBox}
      shapeRendering="crispEdges"
      role="img"
      aria-label={label}
    >
      {!bust && (
        <>
          <ellipse cx="16" cy="46.5" rx="8" ry="1.4" fill="#111" opacity="0.22" />
          {/* boots */}
          <rect x="10" y="43" width="5" height="2" fill="#111" />
          <rect x="17" y="43" width="5" height="2" fill="#111" />
          <rect x="10" y="42" width="5" height="1" fill="#fd38d6" />
          <rect x="17" y="42" width="5" height="1" fill="#fd38d6" />
          {/* legs */}
          <rect x="11" y="37" width="3" height="6" fill="#1a1a1a" />
          <rect x="18" y="37" width="3" height="6" fill="#1a1a1a" />

          {/* torso — fancy cropped jacket */}
          <rect x="10" y="26" width="12" height="11" fill="#111" />
          <rect x="11" y="27" width="10" height="3" fill="#a289d8" />
          <rect x="12" y="31" width="8" height="1" fill="#c3e23d" />
          <rect x="15" y="27" width="2" height="8" fill="#efeded" />
          {/* belt */}
          <rect x="10" y="35" width="12" height="2" fill="#fd38d6" />
          <rect x="15" y="35" width="2" height="2" fill="#f6f142" />

          {/* arms + props by pose */}
          {pose === 'dance' ? (
            <>
              <rect x="6" y="24" width="3" height="7" fill="#111" />
              <rect x="6" y="22" width="3" height="3" fill="#f0c7a0" />
              <rect x="23" y="24" width="3" height="7" fill="#111" />
              <rect x="23" y="22" width="3" height="3" fill="#f0c7a0" />
              <rect x="5" y="20" width="2" height="2" fill="#f6f142" />
              <rect x="25" y="20" width="2" height="2" fill="#fd38d6" />
            </>
          ) : pose === 'business' ? (
            <>
              <rect x="7" y="28" width="3" height="7" fill="#111" />
              <rect x="7" y="34" width="3" height="2" fill="#f0c7a0" />
              <rect x="22" y="28" width="3" height="5" fill="#111" />
              {/* mini laptop */}
              <rect x="22" y="32" width="8" height="5" fill="#efeded" stroke="#111" />
              <rect x="23" y="33" width="6" height="3" fill="#a9c1f1" />
              <rect x="24" y="34" width="1" height="1" fill="#c3e23d" />
              <rect x="26" y="34" width="2" height="1" fill="#fd38d6" />
            </>
          ) : pose === 'music' ? (
            <>
              <rect x="7" y="28" width="3" height="8" fill="#111" />
              <rect x="7" y="35" width="3" height="2" fill="#f0c7a0" />
              <rect x="22" y="28" width="3" height="8" fill="#111" />
              <rect x="22" y="35" width="3" height="2" fill="#f0c7a0" />
              {/* headphones */}
              <rect x="8" y="8" width="16" height="2" fill="#111" />
              <rect x="7" y="9" width="3" height="5" fill="#fd38d6" />
              <rect x="22" y="9" width="3" height="5" fill="#fd38d6" />
              {/* note */}
              <rect x="26" y="18" width="2" height="6" fill="#111" />
              <rect x="24" y="22" width="4" height="3" fill="#f6f142" />
            </>
          ) : pose === 'contact' ? (
            <>
              <rect x="7" y="28" width="3" height="7" fill="#111" />
              <rect x="7" y="34" width="3" height="2" fill="#f0c7a0" />
              <g className="pixel-arm-wave">
                <rect x="22" y="26" width="3" height="6" fill="#111" />
                <rect x="23" y="23" width="3" height="4" fill="#f0c7a0" />
              </g>
              {/* card */}
              <rect x="25" y="30" width="6" height="4" fill="#efeded" />
              <rect x="26" y="31" width="4" height="1" fill="#fd38d6" />
            </>
          ) : pose === 'point' ? (
            <>
              <rect x="7" y="28" width="3" height="8" fill="#111" />
              <rect x="7" y="35" width="3" height="2" fill="#f0c7a0" />
              <rect x="22" y="26" width="3" height="6" fill="#111" />
              <rect x="24" y="24" width="5" height="2" fill="#f0c7a0" />
              <rect x="28" y="23" width="2" height="2" fill="#f6f142" />
            </>
          ) : pose === 'present' ? (
            <>
              <rect x="7" y="28" width="3" height="7" fill="#111" />
              <rect x="7" y="34" width="3" height="2" fill="#f0c7a0" />
              <rect x="22" y="28" width="3" height="7" fill="#111" />
              <rect x="22" y="34" width="3" height="2" fill="#f0c7a0" />
              <rect x="6" y="36" width="4" height="1" fill="#a289d8" />
              <rect x="22" y="36" width="4" height="1" fill="#a289d8" />
            </>
          ) : (
            <>
              <rect x="7" y="28" width="3" height="8" fill="#111" />
              <rect x="7" y="35" width="3" height="2" fill="#f0c7a0" />
              <g className="pixel-arm-wave">
                <rect x="22" y="26" width="3" height="7" fill="#111" />
                <rect x="23" y="23" width="3" height="4" fill="#f0c7a0" />
                <rect x="26" y="22" width="2" height="2" fill="#f6f142" />
              </g>
            </>
          )}
        </>
      )}

      {/* neck */}
      <rect x="14" y="24" width="4" height="3" fill="#e8b48c" />

      {/* face */}
      <rect x="9" y="8" width="14" height="15" fill="#f0c7a0" />
      <rect x="10" y="22" width="12" height="2" fill="#f0c7a0" />

      {/* wavy shoulder-length hair */}
      <rect x="8" y="1" width="16" height="3" fill="#111" />
      <rect x="6" y="3" width="20" height="4" fill="#111" />
      <rect x="5" y="6" width="5" height="12" fill="#111" />
      <rect x="22" y="6" width="5" height="12" fill="#111" />
      <rect x="4" y="10" width="3" height="14" fill="#111" />
      <rect x="25" y="10" width="3" height="14" fill="#111" />
      <rect x="3" y="16" width="2" height="10" fill="#111" />
      <rect x="27" y="16" width="2" height="10" fill="#111" />
      <rect x="4" y="25" width="3" height="4" fill="#111" />
      <rect x="25" y="25" width="3" height="4" fill="#111" />
      {/* bangs */}
      <rect x="9" y="5" width="5" height="5" fill="#111" />
      <rect x="18" y="5" width="5" height="5" fill="#111" />
      <rect x="14" y="5" width="4" height="2" fill="#111" />
      {/* hair clip accent — k-pop detail */}
      <rect x="21" y="4" width="3" height="2" fill="#fd38d6" />
      <rect x="22" y="3" width="1" height="1" fill="#f6f142" />

      {/* eyes WITH WHITE */}
      <rect x="11" y="12" width="4" height="5" fill="#ffffff" />
      <rect x="17" y="12" width="4" height="5" fill="#ffffff" />
      <rect x="12" y="13" width="2" height="3" fill="#1a1a2e" />
      <rect x="18" y="13" width="2" height="3" fill="#1a1a2e" />
      <rect x="12" y="13" width="1" height="1" fill="#ffffff" />
      <rect x="18" y="13" width="1" height="1" fill="#ffffff" />

      {/* smile + teeth */}
      <rect x="13" y="19" width="6" height="2" fill="#111" />
      <rect x="14" y="19" width="4" height="1" fill="#fffef5" />
      <rect x="10" y="17" width="2" height="1" fill="#ff8fb8" opacity="0.9" />
      <rect x="20" y="17" width="2" height="1" fill="#ff8fb8" opacity="0.9" />
      {/* mole — viewer's right */}
      <rect x="21" y="18" width="1" height="1" fill="#5a3a2a" />
    </svg>
  )
}
