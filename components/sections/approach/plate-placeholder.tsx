function SiteScenePlaceholder() {
  return (
    <svg
      viewBox="0 0 200 250"
      className="text-muted-foreground h-full w-full p-8"
      aria-hidden
    >
      <line x1="16" y1="140" x2="184" y2="140" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1={24 + i * 20}
          y1="148"
          x2={32 + i * 20}
          y2="168"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.6"
        />
      ))}
      <line x1="70" y1="140" x2="70" y2="100" stroke="currentColor" strokeWidth="1" />
      <circle cx="70" cy="92" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="130" y1="140" x2="130" y2="108" stroke="currentColor" strokeWidth="1" />
      <circle cx="130" cy="100" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function ModelScenePlaceholder() {
  return (
    <svg
      viewBox="0 0 200 250"
      className="text-muted-foreground h-full w-full p-8"
      aria-hidden
    >
      <rect
        x="40"
        y="36"
        width="120"
        height="88"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line x1="80" y1="36" x2="80" y2="124" stroke="currentColor" strokeWidth="0.75" />
      <line x1="120" y1="36" x2="120" y2="124" stroke="currentColor" strokeWidth="0.75" />
      <line x1="40" y1="68" x2="160" y2="68" stroke="currentColor" strokeWidth="0.75" />
      <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="0.75" />
      <line x1="48" y1="148" x2="152" y2="148" stroke="currentColor" strokeWidth="1" />
      <polyline
        points="48,148 100,118 152,148"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line x1="100" y1="118" x2="100" y2="168" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function BelongScenePlaceholder() {
  return (
    <svg
      viewBox="0 0 200 250"
      className="text-muted-foreground h-full w-full p-8"
      aria-hidden
    >
      <line x1="16" y1="160" x2="184" y2="160" stroke="currentColor" strokeWidth="1" />
      <polyline
        points="78,160 100,132 122,160"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line x1="100" y1="132" x2="100" y2="160" stroke="currentColor" strokeWidth="0.75" />
      <line x1="52" y1="160" x2="52" y2="118" stroke="currentColor" strokeWidth="1" />
      <circle cx="52" cy="110" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="148" y1="160" x2="148" y2="124" stroke="currentColor" strokeWidth="1" />
      <circle cx="148" cy="116" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="178" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="100" y1="182" x2="100" y2="196" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

type PlatePlaceholderProps = {
  stepIndex: number;
};

export function PlatePlaceholder({ stepIndex }: PlatePlaceholderProps) {
  switch (stepIndex) {
    case 0:
    case 1:
      return <SiteScenePlaceholder />;
    case 2:
      return <ModelScenePlaceholder />;
    case 3:
      return <BelongScenePlaceholder />;
    default:
      return null;
  }
}
