"use client";

export function PulseDivider({ className = "text-path-400" }: { className?: string }) {
  return (
    <svg
      className={`pulse-divider ${className}`}
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 24 H420 L450 24 L465 6 L480 42 L495 24 L520 24 L540 12 L560 24 H1200" />
    </svg>
  );
}
