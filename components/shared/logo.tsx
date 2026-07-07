import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Carepath logo mark"
    >
      <defs>
        <linearGradient id="carepath-mark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#12A0DE" />
          <stop offset="100%" stopColor="#33B8ED" />
        </linearGradient>
      </defs>
      <path
        d="M20 8 H150 C171 8 188 25 188 46 V150 C188 171 171 188 150 188 H46 C25 188 8 171 8 150 V38 C8 22 20 8 20 8 Z"
        fill="url(#carepath-mark-grad)"
      />
      <path
        d="M118 60 A42 42 0 1 0 118 140"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M62 100 H84 L94 76 L108 118 L118 100 H134"
        fill="none"
        stroke="#CDEFFB"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="140" cy="100" r="10" fill="#F5B90A" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  showWordmark = true,
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-9 w-9 shrink-0", markClassName)} />
      {showWordmark && (
        <span className="font-display text-xl font-semibold tracking-tight">
          Care<span className="text-path-400">path</span>
        </span>
      )}
    </span>
  );
}
