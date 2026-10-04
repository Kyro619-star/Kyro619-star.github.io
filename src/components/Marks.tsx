/** Sparse handmade marks + music/business motifs — accents only, not full-bleed fills */

export function CrayonFlower({
  className = '',
  color = '#fd38d6',
  center = '#f6f142',
}: {
  className?: string
  color?: string
  center?: string
}) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 64 72" aria-hidden="true">
      <g filter="url(#crayon)">
        <path
          d="M32 34c-1 10-2 22 0 32"
          stroke="#2f5c22"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        {[0, 60, 120, 180, 240, 300].map((d) => (
          <ellipse
            key={d}
            cx={32 + Math.cos((d * Math.PI) / 180) * 12}
            cy={28 + Math.sin((d * Math.PI) / 180) * 12}
            rx="8"
            ry="12"
            fill={color}
            transform={`rotate(${d} 32 28)`}
            opacity="0.95"
          />
        ))}
        <circle cx="32" cy="28" r="6" fill={center} />
        <path
          d="M18 28c-2-8 4-16 12-18 8-6 18-2 22 8 4 6 2 16-6 20-6 6-16 4-22-2-4-4-6-6-6-8z"
          fill="none"
          stroke="#111"
          strokeWidth="1.2"
          opacity="0.45"
        />
      </g>
    </svg>
  )
}

export function InkScribble({ className = '' }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 80 36" aria-hidden="true">
      <path
        d="M4 20c10-14 16 8 26-4s14 12 24 0 14-2 22 8"
        fill="none"
        stroke="#111"
        strokeWidth="2.4"
        strokeLinecap="round"
        filter="url(#crayon)"
      />
      <path
        d="M10 26c12-4 18 6 30-2"
        fill="none"
        stroke="#fd38d6"
        strokeWidth="1.6"
        strokeLinecap="round"
        filter="url(#crayon)"
      />
    </svg>
  )
}

export function VinylMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 48 48" aria-hidden="true">
      <g filter="url(#crayon)">
        <circle cx="24" cy="24" r="21" fill="#111" />
        <circle cx="24" cy="24" r="15" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="24" cy="24" r="6" fill="#fd38d6" />
        <circle cx="24" cy="24" r="2" fill="#f6f142" />
      </g>
    </svg>
  )
}

export function StaveMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 72 28" aria-hidden="true">
      {[7, 12, 17, 22].map((y) => (
        <path
          key={y}
          d={`M2 ${y} Q20 ${y - 1.5} 36 ${y} T70 ${y}`}
          fill="none"
          stroke="#111"
          strokeWidth="1.3"
          strokeLinecap="round"
          filter="url(#crayon)"
        />
      ))}
      <circle cx="30" cy="18" r="3" fill="#a9c1f1" />
      <rect x="32" y="6" width="1.5" height="12" fill="#111" />
    </svg>
  )
}

export function ChartMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 48 40" aria-hidden="true">
      <g filter="url(#crayon)">
        <path d="M5 34V8" stroke="#111" strokeWidth="2" />
        <path d="M5 34h36" stroke="#111" strokeWidth="2" />
        <rect x="10" y="22" width="6" height="12" fill="#a9c1f1" stroke="#111" strokeWidth="1" />
        <rect x="20" y="14" width="6" height="20" fill="#fd38d6" stroke="#111" strokeWidth="1" />
        <rect x="30" y="10" width="6" height="24" fill="#c3e23d" stroke="#111" strokeWidth="1" />
      </g>
    </svg>
  )
}

export function TicketMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 78 34" aria-hidden="true">
      <path
        d="M3 5h54a3 3 0 0 1 3 3v2a3.5 3.5 0 1 0 0 10v2a3 3 0 0 1-3 3H3l3-5L3 15l3-5L3 5z"
        fill="#f6f142"
        stroke="#111"
        strokeWidth="1.6"
        filter="url(#crayon)"
      />
      <text x="12" y="21" fontFamily="Instrument Sans, sans-serif" fontSize="8" fontWeight="700" fill="#111">
        PITCH
      </text>
      <line x1="50" y1="7" x2="50" y2="27" stroke="#111" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  )
}

export function HeadphonesMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 48 40" aria-hidden="true">
      <g filter="url(#crayon)" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round">
        <path d="M10 22c0-10 6-16 14-16s14 6 14 16" />
        <rect x="6" y="20" width="8" height="12" rx="2" fill="#fd38d6" stroke="#111" />
        <rect x="34" y="20" width="8" height="12" rx="2" fill="#a289d8" stroke="#111" />
      </g>
    </svg>
  )
}

export function ContractMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 52 60" aria-hidden="true">
      <g filter="url(#crayon)">
        <rect x="6" y="4" width="40" height="52" fill="#efeded" stroke="#111" strokeWidth="1.8" />
        <path d="M14 16h24M14 24h20M14 32h22M14 40h12" stroke="#111" strokeWidth="1.6" />
        <path
          d="M28 42c4 2 8 6 10 10-6-1-10-3-14-6 1-2 2-3 4-4z"
          fill="#fd38d6"
          opacity="0.85"
        />
      </g>
    </svg>
  )
}

export function RoughLine({
  className = '',
  color = '#111',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 120 12" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M2 7c18-4 28 4 44-1s30 5 46-2 18 3 26 2"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        filter="url(#crayon)"
      />
    </svg>
  )
}
