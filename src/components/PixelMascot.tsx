export type MascotPose =
  | 'wave'
  | 'point'
  | 'present'
  | 'business'
  | 'dance'
  | 'music'
  | 'contact'

type Props = {
  size?: number
  pose?: MascotPose
  className?: string
  label?: string
  bust?: boolean
}

/**
 * Tall 8-bit Kyro twin — matches mascot-target.png + headshot.
 * Vertical eyes (dark top / white sclera bottom), long black hair, fancy crop + boots.
 */
export function PixelMascot({
  size = 112,
  pose = 'wave',
  className = '',
  label = 'Kyro pixel companion',
  bust = false,
}: Props) {
  const viewBox = bust ? '0 0 28 28' : '0 0 28 56'
  const height = bust ? size : (size * 56) / 28

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
          <ellipse cx="14" cy="54" rx="7" ry="1.3" fill="#111" opacity="0.28" />
          {/* tall boots with metallic shin highlights */}
          <rect x="9" y="48" width="4" height="5" fill="#1a1a1a" />
          <rect x="15" y="48" width="4" height="5" fill="#1a1a1a" />
          <rect x="10" y="49" width="2" height="1" fill="#cfd4d8" />
          <rect x="16" y="49" width="2" height="1" fill="#cfd4d8" />
          {/* legs into boots */}
          <rect x="10" y="42" width="3" height="7" fill="#111" />
          <rect x="15" y="42" width="3" height="7" fill="#111" />
          <rect x="10" y="44" width="3" height="1" fill="#9aa0a6" />
          <rect x="15" y="44" width="3" height="1" fill="#9aa0a6" />
          {/* textured mini / shorts */}
          <rect x="9" y="35" width="10" height="8" fill="#2a2a2a" />
          <rect x="10" y="36" width="2" height="6" fill="#3d3d3d" />
          <rect x="13" y="37" width="2" height="5" fill="#222" />
          <rect x="16" y="36" width="2" height="6" fill="#4a4a4a" />

          {/* crop top + buckle */}
          <rect x="9" y="25" width="10" height="10" fill="#111" />
          <rect x="12" y="28" width="4" height="3" fill="#d5dde2" />
          <rect x="13" y="29" width="2" height="1" fill="#8a9298" />
          {/* long sleeves */}
          <rect x="6" y="25" width="3" height="10" fill="#111" />
          <rect x="19" y="25" width="3" height="10" fill="#111" />

          {pose === 'dance' && (
            <>
              <rect x="4" y="21" width="3" height="9" fill="#111" />
              <rect x="4" y="19" width="3" height="3" fill="#f0c7a0" />
              <rect x="21" y="21" width="3" height="9" fill="#111" />
              <rect x="21" y="19" width="3" height="3" fill="#f0c7a0" />
              <rect x="3" y="17" width="2" height="2" fill="#f6f142" />
              <rect x="23" y="17" width="2" height="2" fill="#fd38d6" />
            </>
          )}
          {pose === 'business' && (
            <>
              <rect x="5" y="27" width="3" height="8" fill="#111" />
              <rect x="5" y="34" width="3" height="2" fill="#f0c7a0" />
              <rect x="20" y="27" width="3" height="5" fill="#111" />
              <rect x="20" y="31" width="7" height="5" fill="#efeded" />
              <rect x="21" y="32" width="5" height="3" fill="#a9c1f1" />
              <rect x="22" y="33" width="1" height="1" fill="#c3e23d" />
              <rect x="24" y="33" width="2" height="1" fill="#fd38d6" />
            </>
          )}
          {pose === 'music' && (
            <>
              <rect x="5" y="27" width="3" height="9" fill="#111" />
              <rect x="5" y="35" width="3" height="2" fill="#f0c7a0" />
              <rect x="20" y="27" width="3" height="9" fill="#111" />
              <rect x="20" y="35" width="3" height="2" fill="#f0c7a0" />
              <rect x="7" y="7" width="14" height="2" fill="#111" />
              <rect x="6" y="8" width="3" height="5" fill="#fd38d6" />
              <rect x="19" y="8" width="3" height="5" fill="#a289d8" />
              <rect x="23" y="17" width="2" height="6" fill="#111" />
              <rect x="21" y="21" width="4" height="3" fill="#f6f142" />
            </>
          )}
          {pose === 'contact' && (
            <>
              <rect x="5" y="27" width="3" height="8" fill="#111" />
              <rect x="5" y="34" width="3" height="2" fill="#f0c7a0" />
              <g className="pixel-arm-wave">
                <rect x="20" y="25" width="3" height="6" fill="#111" />
                <rect x="21" y="22" width="3" height="4" fill="#f0c7a0" />
              </g>
              <rect x="22" y="29" width="5" height="4" fill="#efeded" />
              <rect x="23" y="30" width="3" height="1" fill="#fd38d6" />
            </>
          )}
          {pose === 'point' && (
            <>
              <rect x="5" y="27" width="3" height="9" fill="#111" />
              <rect x="5" y="35" width="3" height="2" fill="#f0c7a0" />
              <rect x="20" y="25" width="3" height="6" fill="#111" />
              <rect x="22" y="23" width="5" height="2" fill="#f0c7a0" />
              <rect x="26" y="22" width="2" height="2" fill="#f6f142" />
            </>
          )}
          {pose === 'present' && (
            <>
              <rect x="5" y="27" width="3" height="8" fill="#111" />
              <rect x="5" y="34" width="3" height="2" fill="#f0c7a0" />
              <rect x="20" y="27" width="3" height="8" fill="#111" />
              <rect x="20" y="34" width="3" height="2" fill="#f0c7a0" />
            </>
          )}
          {pose === 'wave' && (
            <>
              <rect x="5" y="27" width="3" height="9" fill="#111" />
              <rect x="5" y="35" width="3" height="2" fill="#f0c7a0" />
              <g className="pixel-arm-wave">
                <rect x="20" y="24" width="3" height="7" fill="#111" />
                <rect x="21" y="21" width="3" height="4" fill="#f0c7a0" />
                <rect x="24" y="20" width="2" height="2" fill="#f6f142" />
              </g>
            </>
          )}
        </>
      )}

      {/* neck */}
      <rect x="12" y="21" width="4" height="5" fill="#e8b48c" />

      {/* face — pale peach */}
      <rect x="8" y="7" width="12" height="14" fill="#f0c7a0" />
      <rect x="9" y="20" width="10" height="2" fill="#f0c7a0" />

      {/* long black hair to mid-thigh */}
      <rect x="7" y="1" width="14" height="3" fill="#111" />
      <rect x="5" y="3" width="18" height="4" fill="#111" />
      <rect x="4" y="6" width="4" height="14" fill="#111" />
      <rect x="20" y="6" width="4" height="14" fill="#111" />
      <rect x="3" y="12" width="3" height="16" fill="#111" />
      <rect x="22" y="12" width="3" height="16" fill="#111" />
      <rect x="3" y="26" width="3" height="14" fill="#111" />
      <rect x="22" y="26" width="3" height="14" fill="#111" />
      <rect x="4" y="38" width="2" height="6" fill="#111" />
      <rect x="22" y="38" width="2" height="6" fill="#111" />
      {/* subtle blue-grey hair highlight */}
      <rect x="6" y="8" width="1" height="8" fill="#2a3340" />
      <rect x="21" y="10" width="1" height="6" fill="#2a3340" />
      {/* center-part bangs */}
      <rect x="8" y="4" width="4" height="5" fill="#111" />
      <rect x="16" y="4" width="4" height="5" fill="#111" />
      <rect x="12" y="4" width="4" height="2" fill="#111" />
      <rect x="9" y="8" width="2" height="2" fill="#111" />
      <rect x="17" y="8" width="2" height="2" fill="#111" />

      {/* white dangling earrings */}
      <rect x="6" y="13" width="1" height="4" fill="#efeded" />
      <rect x="21" y="13" width="1" height="4" fill="#efeded" />

      {/* VERTICAL eyes: dark top + white sclera bottom */}
      <rect x="10" y="11" width="3" height="3" fill="#1a1a2e" />
      <rect x="15" y="11" width="3" height="3" fill="#1a1a2e" />
      <rect x="10" y="14" width="3" height="3" fill="#ffffff" />
      <rect x="15" y="14" width="3" height="3" fill="#ffffff" />
      <rect x="11" y="11" width="1" height="1" fill="#4a5568" />
      <rect x="16" y="11" width="1" height="1" fill="#4a5568" />

      {/* smile + blush + mole (viewer's right) */}
      <rect x="11" y="18" width="6" height="2" fill="#111" />
      <rect x="12" y="18" width="4" height="1" fill="#fffef5" />
      <rect x="9" y="16" width="2" height="1" fill="#ff8fb8" opacity="0.85" />
      <rect x="17" y="16" width="2" height="1" fill="#ff8fb8" opacity="0.85" />
      <rect x="18" y="17" width="1" height="1" fill="#5a3a2a" />
    </svg>
  )
}
