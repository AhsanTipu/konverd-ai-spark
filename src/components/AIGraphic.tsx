import { Cpu } from "lucide-react";

/**
 * AIGraphic — animated orbital neural network overlay for the hero.
 * Pure SVG + CSS — lightweight and crisp.
 */
const AIGraphic = () => {
  const nodes = [
    { x: 50, y: 50, r: 6 },
    { x: 22, y: 28, r: 3 },
    { x: 78, y: 28, r: 3 },
    { x: 14, y: 60, r: 3 },
    { x: 86, y: 60, r: 3 },
    { x: 30, y: 84, r: 3 },
    { x: 70, y: 84, r: 3 },
    { x: 50, y: 14, r: 2.5 },
    { x: 50, y: 88, r: 2.5 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative w-[min(680px,80vw)] aspect-square opacity-70">
        {/* Orbits */}
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
        <div className="absolute inset-[8%] rounded-full border border-primary/15 animate-spin-reverse" />
        <div className="absolute inset-[18%] rounded-full border border-primary/10 animate-spin-slow" />
        <div className="absolute inset-[30%] rounded-full border border-dashed border-primary/20 animate-spin-reverse" />

        {/* Glow core */}
        <div className="absolute inset-[40%] rounded-full bg-gradient-primary blur-2xl opacity-60 animate-pulse-glow" />

        {/* Neural nodes + connections */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="node-grad">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
            </radialGradient>
          </defs>

          {/* connections from center */}
          {nodes.slice(1).map((n, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke="url(#line-grad)"
              strokeWidth="0.25"
            />
          ))}

          {/* nodes */}
          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={n.r * 1.6} fill="hsl(var(--primary))" opacity="0.15" />
              <circle cx={n.x} cy={n.y} r={n.r} fill="url(#node-grad)">
                <animate
                  attributeName="r"
                  values={`${n.r};${n.r * 1.4};${n.r}`}
                  dur={`${2 + (i % 3)}s`}
                  repeatCount="indefinite"
                  begin={`${(i * 0.3) % 2}s`}
                />
              </circle>
            </g>
          ))}

          {/* moving pulse along an orbit */}
          <circle r="0.9" fill="hsl(var(--primary))">
            <animateMotion dur="8s" repeatCount="indefinite" path="M 50 8 A 42 42 0 1 1 49.99 8 Z" />
          </circle>
          <circle r="0.7" fill="hsl(var(--primary-glow))">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 50 22 A 28 28 0 1 0 49.99 22 Z" />
          </circle>
        </svg>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-2xl bg-background/90 backdrop-blur border border-primary/30 shadow-glow flex items-center justify-center text-primary">
            <Cpu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGraphic;
