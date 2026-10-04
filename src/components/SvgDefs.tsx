/** Shared SVG filters for hand-drawn wobble / grain */
export function SvgDefs() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: 'absolute' }}
    >
      <defs>
        <filter id="ink-wobble" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="crayon-rough" x="-12%" y="-12%" width="124%" height="124%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.9"
            numOctaves="3"
            seed="7"
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="1.6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="paper-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.07
                    0 0 0 0 0.07
                    0 0 0 0 0.07
                    0 0 0 0.35 0"
          />
        </filter>
      </defs>
    </svg>
  )
}
