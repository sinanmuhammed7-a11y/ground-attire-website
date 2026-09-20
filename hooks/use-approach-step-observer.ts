"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useApproachStepObserver(stepCount: number): {
  active: number;
  setTriggerRef: (index: number) => (node: HTMLDivElement | null) => void;
} {
  const [active, setActive] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setTriggerRef = useCallback(
    (index: number) => (node: HTMLDivElement | null) => {
      triggerRefs.current[index] = node;
    },
    [],
  );

  useEffect(() => {
    const triggers = triggerRefs.current
      .slice(0, stepCount)
      .filter((node): node is HTMLDivElement => node !== null);
    if (triggers.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length === 0) return;

        const best = intersecting.reduce((prev, curr) =>
          curr.intersectionRatio >= prev.intersectionRatio ? curr : prev,
        );
        const step = Number((best.target as HTMLElement).dataset.step);
        if (!Number.isNaN(step)) {
          setActive(step);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    triggers.forEach((trigger) => observer.observe(trigger));
    return () => observer.disconnect();
  }, [stepCount]);

  return { active, setTriggerRef };
}
