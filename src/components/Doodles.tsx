/** Hand-drawn decorative strokes — rough, not cute */

export function InkScribble({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle ${className}`}
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 32c12-18 22 10 34-6s18 20 32 2 20-8 36 8"
        stroke="#121212"
        strokeWidth="2.4"
        strokeLinecap="round"
        filter="url(#ink-wobble)"
      />
      <path
        d="M18 40c16-6 28 8 44-4 10-8 22 6 34 0"
        stroke="#ff2d95"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
        filter="url(#ink-wobble)"
      />
    </svg>
  )
}

export function CrayonFlower({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle ${className}`}
      viewBox="0 0 80 90"
      aria-hidden="true"
    >
      <g filter="url(#crayon-rough)" opacity="0.92">
        <path
          d="M40 48c-2 10-4 22-2 34"
          stroke="#2f7a3a"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="40" cy="36" rx="14" ry="16" fill="#ffe500" opacity="0.85" />
        <ellipse cx="28" cy="40" rx="11" ry="13" fill="#ff2d95" opacity="0.8" />
        <ellipse cx="52" cy="40" rx="11" ry="13" fill="#1e5eff" opacity="0.75" />
        <ellipse cx="40" cy="28" rx="10" ry="12" fill="#ff8a3d" opacity="0.8" />
        <circle cx="40" cy="38" r="5" fill="#121212" />
        {/* scribbly outline over fill */}
        <path
          d="M26 42c-4-8 2-20 12-22 6-10 22-8 26 4 8 2 12 14 6 22-2 8-12 12-20 10-8 4-18 0-24-14z"
          fill="none"
          stroke="#121212"
          strokeWidth="1.6"
        />
      </g>
    </svg>
  )
}

export function MarkerStroke({
  className = '',
  color = '#ffe500',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      className={`doodle ${className}`}
      viewBox="0 0 160 28"
      aria-hidden="true"
    >
      <path
        d="M4 16c20-8 40 6 60-2s40-8 56 4 28-2 36-6"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.72"
        filter="url(#crayon-rough)"
      />
    </svg>
  )
}

export function HalftoneBlob({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle ${className}`}
      viewBox="0 0 100 70"
      aria-hidden="true"
    >
      <defs>
        <pattern id="ht" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="0.9" fill="#fff" />
        </pattern>
      </defs>
      <path
        d="M12 40c0-18 16-32 38-32s38 12 38 30-18 28-40 28S12 56 12 40z"
        fill="#ff2d95"
        filter="url(#ink-wobble)"
      />
      <path
        d="M12 40c0-18 16-32 38-32s38 12 38 30-18 28-40 28S12 56 12 40z"
        fill="url(#ht)"
        opacity="0.55"
      />
    </svg>
  )
}

export function VinylRough({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle ${className}`}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <g filter="url(#ink-wobble)">
        <circle cx="32" cy="32" r="28" fill="#121212" />
        <circle
          cx="32"
          cy="32"
          r="22"
          fill="none"
          stroke="#333"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <circle cx="32" cy="32" r="8" fill="#ff2d95" />
        <circle cx="32" cy="32" r="2.5" fill="#ffe500" />
      </g>
    </svg>
  )
}
