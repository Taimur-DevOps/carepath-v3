"use client";

const nodes = [
  {
    label: "Your Clinic",
    x: 300,
    y: 40,
    labelX: 300,
    labelY: 8,
    anchor: "middle" as const,
  },
  {
    label: "CaringUp",
    x: 560,
    y: 220,
    labelX: 590,
    labelY: 220,
    anchor: "start" as const,
  },
  {
    label: "Patient",
    x: 300,
    y: 400,
    labelX: 300,
    labelY: 432,
    anchor: "middle" as const,
  },
  {
    label: "Escalation",
    x: 40,
    y: 220,
    labelX: 10,
    labelY: 220,
    anchor: "end" as const,
  },
];

export function CareLoop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-40 -30 680 500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      role="img"
      aria-label="Continuous care loop"
    >
      <defs>
        <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f2b705" />
          <stop offset="55%" stopColor="#1596d6" />
          <stop offset="100%" stopColor="#f2b705" />
        </linearGradient>

        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f2b705" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f2b705" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Base Track */}
      <path
        d="M300,40
           C460,40 560,120 560,220
           C560,320 460,400 300,400
           C140,400 40,320 40,220
           C40,120 140,40 300,40 Z"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="2"
      />

      {/* Animated Track */}
      <path
        d="M300,40
           C460,40 560,120 560,220
           C560,320 460,400 300,400
           C140,400 40,320 40,220
           C40,120 140,40 300,40 Z"
        stroke="url(#loopGradient)"
        strokeWidth="2.5"
        strokeDasharray="18 22"
        className="animate-loop-dash"
      />

      {nodes.map((node) => (
        <g key={node.label}>
          {/* Glow */}
          <circle
            cx={node.x}
            cy={node.y}
            r="46"
            fill="url(#nodeGlow)"
          />

          {/* Node */}
          <circle
            cx={node.x}
            cy={node.y}
            r="7"
            fill="#F8FAFC"
            stroke="#F2B705"
            strokeWidth="2"
          />

          {/* Label */}
          <text
            x={node.labelX}
            y={node.labelY}
            textAnchor={node.anchor}
            dominantBaseline="middle"
            className="fill-white font-medium text-[13px]"
            style={{
              fontFamily: "var(--font-body)",
            }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}