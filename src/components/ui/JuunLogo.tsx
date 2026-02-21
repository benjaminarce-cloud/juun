// JUUN wellness — Inline SVG Logo
// fill is driven by currentColor → controlled by parent CSS
// This lets the logo flip white (hero) ↔ black (header scrolled)
// via a single CSS transition on the header element.

interface JuunLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { wordmark: 80,  wellness: 32 },
  md: { wordmark: 110, wellness: 44 },
  lg: { wordmark: 160, wellness: 64 },
}

export default function JuunLogo({ className = '', size = 'md' }: JuunLogoProps) {
  const s = sizes[size]

  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      {/* Wordmark: JUUN with star diacritics above the Us */}
      <svg
        width={s.wordmark}
        viewBox="0 0 220 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Large 4-pointed star above first U */}
        <path
          d="M82 2 L84 10 L92 12 L84 14 L82 22 L80 14 L72 12 L80 10 Z"
          fill="currentColor"
          opacity="0.85"
        />
        {/* Small 4-pointed star above second U */}
        <path
          d="M112 5 L113.5 10.5 L119 12 L113.5 13.5 L112 19 L110.5 13.5 L105 12 L110.5 10.5 Z"
          fill="currentColor"
          opacity="0.65"
        />

        {/* J */}
        <text
          x="0"
          y="64"
          fontFamily="'Unbounded', sans-serif"
          fontWeight="900"
          fontSize="58"
          fill="currentColor"
          letterSpacing="-1"
        >
          JUUN
        </text>
      </svg>

      {/* wellness sub-label */}
      <svg
        width={s.wellness}
        viewBox="0 0 110 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ marginTop: '-2px' }}
      >
        <text
          x="55"
          y="13"
          fontFamily="'Unbounded', sans-serif"
          fontWeight="300"
          fontSize="10"
          fill="currentColor"
          opacity="0.55"
          letterSpacing="3"
          textAnchor="middle"
        >
          wellness
        </text>
      </svg>
    </span>
  )
}
