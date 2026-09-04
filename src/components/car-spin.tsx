import { useEffect, useMemo, useRef, useState, type PointerEvent, type WheelEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { defaultFrame, frameCount, spinSrc } from "@/lib/visualizer";
import { useLanguage } from "@/lib/language";

export function CarSpin({
  slug,
  paintId,
  alt,
}: {
  slug: string;
  paintId: string;
  alt: string;
}) {
  const { lang, dir } = useLanguage();
  const total = frameCount(slug, paintId);
  const [frame, setFrame] = useState(() => defaultFrame(slug, paintId));
  const dragging = useRef(false);
  const lastX = useRef(0);
  const acc = useRef(0);

  const frames = useMemo(
    () => Array.from({ length: total }, (_, i) => i + 1),
    [total, slug, paintId],
  );

  useEffect(() => {
    setFrame(defaultFrame(slug, paintId));
  }, [slug]);

  useEffect(() => {
    const n = frameCount(slug, paintId);
    setFrame((f) => ((f - 1 + n) % n) + 1);
  }, [slug, paintId, total]);

  function step(dirStep: number) {
    const n = frameCount(slug, paintId);
    setFrame((f) => ((f - 1 + dirStep + n * 16) % n) + 1);
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    lastX.current = e.clientX;
    acc.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    acc.current += dx;
    const n = frameCount(slug, paintId);
    const tick = n >= 30 ? 6 : n >= 18 ? 8 : 14;
    const jump = Math.abs(dx) > 24 ? 2 : 1;
    while (acc.current <= -tick) {
      acc.current += tick;
      step(jump);
    }
    while (acc.current >= tick) {
      acc.current -= tick;
      step(-jump);
    }
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    dragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  }

  function onWheel(e: WheelEvent<HTMLDivElement>) {
    if (Math.abs(e.deltaX) + Math.abs(e.deltaY) < 2) return;
    e.preventDefault();
    const jump = Math.abs(e.deltaX) + Math.abs(e.deltaY) > 40 ? 2 : 1;
    step((e.deltaX + e.deltaY > 0 ? 1 : -1) * jump);
  }

  const hint = lang === "he" ? "גררו כדי לסובב" : "Drag to rotate";
  const Prev = dir === "rtl" ? ChevronRight : ChevronLeft;
  const Next = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <div className="relative text-studio-fg">
      <div
        className="relative aspect-[16/9] w-full cursor-grab overflow-hidden touch-none select-none active:cursor-grabbing sm:aspect-[2/1]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
        onDragStart={(e) => e.preventDefault()}
        role="img"
        aria-label={`${alt}. ${hint}`}
      >
        {frames.map((n) => (
          <img
            key={`${slug}-${paintId}-${n}`}
            src={spinSrc(slug, paintId, n, 1000)}
            alt=""
            draggable={false}
            referrerPolicy="no-referrer"
            className="pointer-events-none absolute inset-0 size-full object-contain object-center"
            style={{ opacity: n === frame ? 1 : 0 }}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label={lang === "he" ? "סובב שמאלה" : "Rotate left"}
        onClick={() => step(-2)}
        className="absolute start-1 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-studio-fg/15 bg-studio text-studio-fg shadow-sm hover:bg-studio-fg/5 sm:start-2"
      >
        <Prev className="size-5" />
      </button>
      <button
        type="button"
        aria-label={lang === "he" ? "סובב ימינה" : "Rotate right"}
        onClick={() => step(2)}
        className="absolute end-1 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-studio-fg/15 bg-studio text-studio-fg shadow-sm hover:bg-studio-fg/5 sm:end-2"
      >
        <Next className="size-5" />
      </button>
      <p className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-studio-fg/55">
        {hint}
      </p>
    </div>
  );
}
