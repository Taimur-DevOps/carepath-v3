export function PlatformMockup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Abstract illustration of the CaringUp care team dashboard alongside the patient mobile app."
    >
      {/* dashboard panel */}
      <rect x="0" y="30" width="430" height="330" rx="24" fill="white" stroke="#eef1f6" />
      <rect x="28" y="62" width="140" height="14" rx="7" fill="#0a2e45" />
      <rect x="28" y="86" width="90" height="10" rx="5" fill="#cbd5e1" />

      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(28, ${122 + i * 60})`}>
          <rect width="374" height="46" rx="14" fill="#f8fafc" />
          <circle cx="26" cy="23" r="12" fill={i === 1 ? "#f2b705" : "#1596d6"} opacity="0.15" />
          <circle cx="26" cy="23" r="5" fill={i === 1 ? "#f2b705" : "#1596d6"} />
          <rect x="50" y="14" width="150" height="8" rx="4" fill="#94a3b8" />
          <rect x="50" y="27" width="90" height="7" rx="3.5" fill="#cbd5e1" />
          <rect x="300" y="15" width="52" height="18" rx="9" fill={i === 1 ? "#fdecc2" : "#d9f2fb"} />
        </g>
      ))}

      <rect x="28" y="304" width="374" height="34" rx="10" fill="#0a2e45" opacity="0.04" />
      <rect x="28" y="304" width="120" height="34" rx="10" fill="#0a2e45" />

      {/* phone */}
      <g transform="translate(430, 0)">
        <rect x="10" y="0" width="200" height="420" rx="32" fill="#0a2e45" />
        <rect x="20" y="16" width="180" height="388" rx="22" fill="white" />
        <rect x="36" y="40" width="90" height="10" rx="5" fill="#0a2e45" />
        <rect x="36" y="58" width="60" height="8" rx="4" fill="#cbd5e1" />

        <rect x="36" y="86" width="148" height="86" rx="16" fill="#f0fafd" />
        <circle cx="70" cy="129" r="20" fill="#1596d6" opacity="0.15" />
        <path d="M60 129 L67 137 L82 118" stroke="#1596d6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="102" y="114" width="66" height="8" rx="4" fill="#94a3b8" />
        <rect x="102" y="130" width="50" height="8" rx="4" fill="#cbd5e1" />

        {[0, 1].map((i) => (
          <g key={i} transform={`translate(36, ${188 + i * 58})`}>
            <rect width="148" height="46" rx="14" fill="#f8fafc" />
            <circle cx="24" cy="23" r="11" fill="#f2b705" opacity="0.15" />
            <circle cx="24" cy="23" r="4.5" fill="#f2b705" />
            <rect x="46" y="14" width="80" height="7" rx="3.5" fill="#94a3b8" />
            <rect x="46" y="26" width="56" height="6" rx="3" fill="#cbd5e1" />
          </g>
        ))}

        <rect x="36" y="330" width="148" height="42" rx="21" fill="#f2b705" />
        <rect x="70" y="346" width="80" height="10" rx="5" fill="white" opacity="0.9" />
      </g>
    </svg>
  );
}
