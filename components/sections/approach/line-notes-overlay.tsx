type LineNotesOverlayProps = {
  draw: boolean;
  reduceMotion: boolean;
};

export function LineNotesOverlay({ draw, reduceMotion }: LineNotesOverlayProps) {
  const offset = draw || reduceMotion ? 0 : 1;
  const dashTransition = reduceMotion
    ? undefined
    : "stroke-dashoffset 1400ms ease-out";

  return (
    <svg
      viewBox="0 0 200 250"
      className="text-success pointer-events-none absolute inset-0 h-full w-full p-8"
      aria-hidden
    >
      <path
        d="M 40 72 Q 100 20 160 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray="0.04 0.04"
        strokeDashoffset={offset}
        style={{ transition: dashTransition }}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 36 108 H 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset={offset}
        style={{ transition: dashTransition, transitionDelay: "120ms" }}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 128 118 H 164"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset={offset}
        style={{ transition: dashTransition, transitionDelay: "240ms" }}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
