type LotusMarkProps = {
  className?: string;
};

/**
 * The Orriva lotus glyph — a full-circle bloom rendered as inline SVG so
 * it stays crisp at any size and can inherit the gold palette. Used as a
 * recurring ornamental mark (nav emblem, section dividers, stat icons).
 */
export default function LotusMark({ className }: LotusMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="78" r="58" stroke="#a07b4e" strokeWidth="6" />
      <path d="M100 130 C82 130 66 116 60 96 C78 102 90 112 100 130 Z" fill="#a07b4e" />
      <path d="M100 130 C118 130 134 116 140 96 C122 102 110 112 100 130 Z" fill="#cba468" />
      <path d="M100 130 C88 108 88 84 100 58 C112 84 112 108 100 130 Z" fill="#a07b4e" />
      <path d="M100 130 C76 122 54 106 46 82 C70 82 88 94 100 130 Z" fill="#7a5c38" opacity="0.92" />
      <path d="M100 130 C124 122 146 106 154 82 C130 82 112 94 100 130 Z" fill="#7a5c38" opacity="0.92" />
    </svg>
  );
}
