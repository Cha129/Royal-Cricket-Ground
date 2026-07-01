import { useEffect, useState } from "react";

/**
 * Premium one-shot cricket ball hit effect.
 * - Fires once on first page load (sessionStorage flag), centered
 * - Also fires on clicks of buttons / links / tabs / icons, centered at the
 *   click position, with a short cooldown so it never feels spammy
 * - Pointer-events: none so it never blocks interaction
 */
export function BallImpact() {
  const [hit, setHit] = useState<{ x: number; y: number; id: number } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let cooldown = 0;
    let clearT: number | undefined;

    const fire = (x: number, y: number) => {
      const now = Date.now();
      if (now - cooldown < 1400) return;
      cooldown = now;
      setHit({ x, y, id: now });
      window.clearTimeout(clearT);
      clearT = window.setTimeout(() => setHit(null), 2200);
    };

    let firstT: number | undefined;
    try {
      if (sessionStorage.getItem("rcg-ball-impact-played") !== "1") {
        sessionStorage.setItem("rcg-ball-impact-played", "1");
        firstT = window.setTimeout(
          () => fire(window.innerWidth / 2, window.innerHeight / 2),
          350,
        );
      }
    } catch {
      /* ignore */
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest(
        'a, button, [role="tab"], [role="button"], [role="link"], [role="menuitem"], svg, .lucide',
      );
      if (!trigger) return;
      const rect = (trigger as HTMLElement).getBoundingClientRect();
      const x = e.clientX || rect.left + rect.width / 2;
      const y = e.clientY || rect.top + rect.height / 2;
      fire(x, y);
    };
    window.addEventListener("click", onClick, { capture: true });

    return () => {
      window.removeEventListener("click", onClick, { capture: true } as never);
      window.clearTimeout(clearT);
      if (firstT) window.clearTimeout(firstT);
    };
  }, []);

  if (!hit) return null;

  return (
    <div
      key={hit.id}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      <div
        className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: hit.x,
          top: hit.y,
          animation: "rcg-ball-fly 1.1s cubic-bezier(.42,.08,.2,1.2) forwards",
        }}
      >
        <CricketBallSVG className="h-full w-full drop-shadow-[0_8px_24px_oklch(0.04_0.02_150_/_0.5)]" />
      </div>

      <div
        className="absolute h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: hit.x,
          top: hit.y,
          animation: "rcg-crack-fade 1.6s ease-out 0.85s forwards",
          opacity: 0,
        }}
      >
        <CrackSVG className="h-full w-full" />
      </div>
    </div>
  );
}

export function CricketBallSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rcg-ball-grad" cx="35%" cy="32%" r="70%">
          <stop offset="0%" stopColor="oklch(0.55 0.16 28)" />
          <stop offset="60%" stopColor="oklch(0.38 0.18 25)" />
          <stop offset="100%" stopColor="oklch(0.22 0.1 25)" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#rcg-ball-grad)" />
      <path
        d="M10 30 Q32 22 54 30"
        stroke="oklch(0.95 0.04 95)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 3"
      />
      <path
        d="M10 36 Q32 44 54 36"
        stroke="oklch(0.95 0.04 95)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

function CrackSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rcg-crack-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.98 0.06 95 / 0.55)" />
          <stop offset="40%" stopColor="oklch(0.85 0.1 90 / 0.18)" />
          <stop offset="100%" stopColor="oklch(0.85 0.1 90 / 0)" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#rcg-crack-glow)" />
      <g
        stroke="oklch(0.97 0.02 95 / 0.85)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M100 100 L40 30" />
        <path d="M100 100 L160 28" />
        <path d="M100 100 L180 90" />
        <path d="M100 100 L172 168" />
        <path d="M100 100 L100 180" />
        <path d="M100 100 L28 170" />
        <path d="M100 100 L20 100" />
        <path d="M100 100 L34 60" />
        <path d="M70 65 L55 50 M70 65 L82 48" />
        <path d="M135 60 L150 48 M135 60 L128 42" />
        <path d="M150 130 L168 140 M150 130 L155 115" />
        <path d="M70 140 L55 152 M70 140 L80 158" />
        <path d="M100 100 m -34 0 a 34 34 0 1 0 68 0 a 34 34 0 1 0 -68 0" opacity="0.55" />
        <path d="M100 100 m -58 0 a 58 58 0 1 0 116 0 a 58 58 0 1 0 -116 0" opacity="0.3" />
      </g>
    </svg>
  );
}
