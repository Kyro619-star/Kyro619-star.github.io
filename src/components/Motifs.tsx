/** Sparse music × business scrapbook motifs — decorative only */

export function VinylMotif({ className = '' }: { className?: string }) {
  return (
    <svg className={`motif ${className}`} viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#111" />
      <circle cx="24" cy="24" r="18" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="24" cy="24" r="12" fill="none" stroke="#444" strokeWidth="1" />
      <circle cx="24" cy="24" r="6" fill="#ff2d95" />
      <circle cx="24" cy="24" r="2" fill="#ffe500" />
    </svg>
  )
}

export function StaveMotif({ className = '' }: { className?: string }) {
  return (
    <svg className={`motif ${className}`} viewBox="0 0 72 28" width="72" height="28" aria-hidden="true">
      {[6, 11, 16, 21].map((y) => (
        <path
          key={y}
          d={`M2 ${y} Q18 ${y - 1.5} 36 ${y} T70 ${y}`}
          fill="none"
          stroke="#111"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ))}
      <circle cx="28" cy="18" r="3" fill="#1e5eff" />
      <rect x="30" y="6" width="1.5" height="12" fill="#1e5eff" />
      <path d="M42 8c4 0 6 3 6 6" fill="none" stroke="#ff2d95" strokeWidth="1.6" />
    </svg>
  )
}

export function TicketMotif({ className = '' }: { className?: string }) {
  return (
    <svg className={`motif ${className}`} viewBox="0 0 80 36" width="80" height="36" aria-hidden="true">
      <path
        d="M3 6h58a4 4 0 0 1 4 4v3a4 4 0 1 0 0 8v3a4 4 0 0 1-4 4H3l4-5.5L3 18l4-5.5L3 6z"
        fill="#ffe500"
        stroke="#111"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <text x="14" y="22" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#111">
        ADMIT
      </text>
      <line x1="52" y1="8" x2="52" y2="28" stroke="#111" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  )
}

export function ChartMotif({ className = '' }: { className?: string }) {
  return (
    <svg className={`motif ${className}`} viewBox="0 0 48 40" width="48" height="40" aria-hidden="true">
      <path d="M4 36V8" stroke="#111" strokeWidth="2" />
      <path d="M4 36h40" stroke="#111" strokeWidth="2" />
      <rect x="10" y="22" width="6" height="14" fill="#1e5eff" stroke="#111" strokeWidth="1" />
      <rect x="20" y="14" width="6" height="22" fill="#ff2d95" stroke="#111" strokeWidth="1" />
      <rect x="30" y="8" width="6" height="28" fill="#7cff3a" stroke="#111" strokeWidth="1" />
    </svg>
  )
}

export function HalftoneBurst({ className = '' }: { className?: string }) {
  return (
    <svg className={`motif ${className}`} viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
      {Array.from({ length: 36 }, (_, i) => {
        const a = (i / 36) * Math.PI * 2
        const r = 28
        const x = 40 + Math.cos(a) * r
        const y = 40 + Math.sin(a) * r
        return <circle key={i} cx={x} cy={y} r={1.2 + (i % 3) * 0.4} fill="#ff2d95" opacity="0.55" />
      })}
    </svg>
  )
}
