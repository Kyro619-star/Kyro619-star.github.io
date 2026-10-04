/**
 * Dense crayon flower field — mimics grey-flowers-target.png
 * Colors: #c3e23d #fd38d6 #a289d8 #e981f1 #efeded #ff5f18 #f6f142 #a9c1f1
 */

type Bloom = {
  x: number
  y: number
  s: number
  rot: number
  petals: string
  center: string
  stem?: string
}

const BLOOMS: Bloom[] = [
  { x: 8, y: 12, s: 1.1, rot: -18, petals: '#fd38d6', center: '#f6f142' },
  { x: 22, y: 8, s: 0.85, rot: 12, petals: '#ff5f18', center: '#efeded' },
  { x: 38, y: 14, s: 1.25, rot: -6, petals: '#c3e23d', center: '#fd38d6' },
  { x: 55, y: 6, s: 0.7, rot: 22, petals: '#a289d8', center: '#f6f142' },
  { x: 70, y: 16, s: 1.05, rot: -14, petals: '#e981f1', center: '#efeded' },
  { x: 86, y: 10, s: 0.9, rot: 8, petals: '#a9c1f1', center: '#ff5f18' },
  { x: 12, y: 32, s: 0.75, rot: 16, petals: '#efeded', center: '#f6f142' },
  { x: 28, y: 28, s: 1.15, rot: -22, petals: '#ff5f18', center: '#c3e23d' },
  { x: 48, y: 34, s: 0.95, rot: 4, petals: '#fd38d6', center: '#a9c1f1' },
  { x: 64, y: 30, s: 1.2, rot: -10, petals: '#c3e23d', center: '#ff5f18' },
  { x: 82, y: 36, s: 0.8, rot: 18, petals: '#a289d8', center: '#fd38d6' },
  { x: 6, y: 52, s: 1, rot: -8, petals: '#e981f1', center: '#f6f142' },
  { x: 20, y: 58, s: 0.7, rot: 26, petals: '#a9c1f1', center: '#efeded' },
  { x: 36, y: 50, s: 1.1, rot: -16, petals: '#f6f142', center: '#fd38d6' },
  { x: 52, y: 56, s: 0.85, rot: 10, petals: '#fd38d6', center: '#c3e23d' },
  { x: 68, y: 52, s: 1.05, rot: -20, petals: '#ff5f18', center: '#a289d8' },
  { x: 84, y: 58, s: 0.75, rot: 14, petals: '#c3e23d', center: '#efeded' },
  { x: 14, y: 74, s: 0.9, rot: -12, petals: '#a289d8', center: '#ff5f18' },
  { x: 30, y: 78, s: 1.15, rot: 6, petals: '#e981f1', center: '#f6f142' },
  { x: 46, y: 72, s: 0.8, rot: -24, petals: '#efeded', center: '#fd38d6' },
  { x: 62, y: 80, s: 1, rot: 16, petals: '#a9c1f1', center: '#c3e23d' },
  { x: 78, y: 74, s: 1.2, rot: -4, petals: '#fd38d6', center: '#ff5f18' },
  { x: 90, y: 82, s: 0.7, rot: 20, petals: '#f6f142', center: '#a289d8' },
  { x: 42, y: 90, s: 0.95, rot: -14, petals: '#c3e23d', center: '#e981f1' },
  { x: 58, y: 92, s: 0.85, rot: 8, petals: '#ff5f18', center: '#efeded' },
]

function Flower({ b }: { b: Bloom }) {
  const r = 18 * b.s
  return (
    <g
      transform={`translate(${b.x} ${b.y}) rotate(${b.rot}) scale(${b.s})`}
      filter="url(#crayon)"
    >
      <path
        d="M0 8c-1 8-2 16-1 24"
        stroke="#3d6b28"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.75"
      />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx={Math.cos((deg * Math.PI) / 180) * 9}
          cy={Math.sin((deg * Math.PI) / 180) * 9 - 2}
          rx="7"
          ry="10"
          fill={b.petals}
          opacity="0.92"
          transform={`rotate(${deg})`}
        />
      ))}
      <circle cx="0" cy="-2" r="5" fill={b.center} />
      <circle cx="0" cy="-2" r={r * 0.08} fill="#111" opacity="0.35" />
      {/* scribbly outline */}
      <path
        d="M-14 0c-2-8 4-16 12-18 6-8 18-6 22 4 6 2 10 12 4 18-2 6-10 10-16 8-6 4-14 2-18-12z"
        fill="none"
        stroke="#111"
        strokeWidth="0.9"
        opacity="0.55"
      />
    </g>
  )
}

export function FlowerField({ className = '' }: { className?: string }) {
  return (
    <div className={`flower-field ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* tangled ink scribble like the ref */}
        <path
          d="M4 6c3-4 6 3 8-1s4 5 7 0 3 6 6 1 5 4 8-2"
          fill="none"
          stroke="#111"
          strokeWidth="1.4"
          strokeLinecap="round"
          filter="url(#ink-wobble)"
        />
        <path
          d="M6 9c4 1 5-4 8-1"
          fill="none"
          stroke="#a9c1f1"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {BLOOMS.map((b, i) => (
          <Flower key={i} b={b} />
        ))}
        {/* daisy accents */}
        {[
          [18, 42],
          [73, 22],
          [51, 68],
          [33, 88],
        ].map(([x, y], i) => (
          <g key={`d${i}`} transform={`translate(${x} ${y})`} filter="url(#crayon)">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <ellipse
                key={deg}
                cx={Math.cos((deg * Math.PI) / 180) * 5}
                cy={Math.sin((deg * Math.PI) / 180) * 5}
                rx="2.2"
                ry="4"
                fill="#efeded"
                transform={`rotate(${deg})`}
              />
            ))}
            <circle r="2.2" fill="#f6f142" />
          </g>
        ))}
      </svg>
    </div>
  )
}

/** Compact cluster for hero / section corners */
export function FlowerCluster({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`flower-cluster ${className}`}
      viewBox="0 0 160 140"
      aria-hidden="true"
    >
      <g filter="url(#crayon)">
        <g transform="translate(50 55) rotate(-12)">
          {[0, 60, 120, 180, 240, 300].map((d) => (
            <ellipse
              key={d}
              cx={Math.cos((d * Math.PI) / 180) * 18}
              cy={Math.sin((d * Math.PI) / 180) * 18}
              rx="12"
              ry="18"
              fill="#c3e23d"
              transform={`rotate(${d})`}
            />
          ))}
          <circle r="10" fill="#fd38d6" />
        </g>
        <g transform="translate(100 45) rotate(18)">
          {[0, 72, 144, 216, 288].map((d) => (
            <ellipse
              key={d}
              cx={Math.cos((d * Math.PI) / 180) * 14}
              cy={Math.sin((d * Math.PI) / 180) * 14}
              rx="10"
              ry="15"
              fill="#fd38d6"
              transform={`rotate(${d})`}
            />
          ))}
          <circle r="8" fill="#f6f142" />
        </g>
        <g transform="translate(85 95) rotate(-8)">
          {[0, 60, 120, 180, 240, 300].map((d) => (
            <ellipse
              key={d}
              cx={Math.cos((d * Math.PI) / 180) * 12}
              cy={Math.sin((d * Math.PI) / 180) * 12}
              rx="9"
              ry="13"
              fill="#ff5f18"
              transform={`rotate(${d})`}
            />
          ))}
          <circle r="7" fill="#efeded" />
        </g>
        <g transform="translate(30 90) rotate(24)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
            <ellipse
              key={d}
              cx={Math.cos((d * Math.PI) / 180) * 8}
              cy={Math.sin((d * Math.PI) / 180) * 8}
              rx="3"
              ry="7"
              fill="#efeded"
              transform={`rotate(${d})`}
            />
          ))}
          <circle r="3.5" fill="#f6f142" />
        </g>
        <path
          d="M50 70c-4 20-6 36-2 48"
          stroke="#3d6b28"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M100 58c2 18 4 34 1 46"
          stroke="#3d6b28"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {/* type-collage fragments like the flyer */}
      <text
        x="8"
        y="18"
        fill="#111"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontWeight="800"
        fontSize="11"
      >
        BERKLEE
      </text>
      <text
        x="95"
        y="130"
        fill="#111"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontWeight="800"
        fontSize="10"
      >
        MB · PITCH
      </text>
    </svg>
  )
}
