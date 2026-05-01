import { useEffect, useRef } from "react";

/**
 * WaveMesh — animated mesh of flowing curves inspired by particle wave visuals.
 * Pure canvas, no deps. Soft electric-blue strands drifting across a white field.
 */
const WaveMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Strand configuration — many thin overlapping sine ribbons
    const STRANDS = 70;
    const SEGMENTS = 140;

    const strands = Array.from({ length: STRANDS }, (_, i) => {
      const t = i / (STRANDS - 1);
      return {
        amp: 60 + Math.random() * 90,
        freq: 0.0028 + Math.random() * 0.0022,
        speed: 0.18 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        yOffset: t,                       // 0..1 vertical position bias
        hue: 215 + Math.random() * 18,    // electric blue band
        light: 55 + Math.random() * 18,
        alpha: 0.05 + Math.random() * 0.18,
        thickness: 0.5 + Math.random() * 0.7,
      };
    });

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let start = performance.now();

    const draw = (now: number) => {
      const time = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      // Center the wave band slightly below the middle, like the reference
      const bandCenter = height * 0.58;
      const bandRange = height * 0.42;

      for (const s of strands) {
        ctx.beginPath();
        const baseY = bandCenter + (s.yOffset - 0.5) * bandRange;

        for (let i = 0; i <= SEGMENTS; i++) {
          const x = (i / SEGMENTS) * width;
          // Two stacked sines = organic, non-repeating curve
          const y =
            baseY +
            Math.sin(x * s.freq + time * s.speed + s.phase) * s.amp +
            Math.sin(x * s.freq * 0.5 - time * s.speed * 0.7 + s.phase) *
              s.amp *
              0.35;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `hsla(${s.hue}, 90%, ${s.light}%, ${s.alpha})`;
        ctx.lineWidth = s.thickness;
        ctx.stroke();
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default WaveMesh;
