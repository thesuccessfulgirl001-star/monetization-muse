import { useEffect, useState } from "react";

interface Props {
  size?: number;
  className?: string;
}

export function AnalogClock({ size = 72, className = "" }: Props) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const seconds = now ? now.getSeconds() : 0;
  const minutes = now ? now.getMinutes() + seconds / 60 : 0;
  const hours = now ? (now.getHours() % 12) + minutes / 60 : 0;

  const hRot = hours * 30;
  const mRot = minutes * 6;
  const sRot = seconds * 6;

  return (
    <div
      className={`analog-clock ${className}`}
      style={{ ["--clock-size" as never]: `${size}px` }}
      aria-hidden
    >
      <div className="marks">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{ transform: `translateX(-50%) rotate(${i * 30}deg)` }} />
        ))}
      </div>
      <div
        className="hand hand-h"
        style={{ transform: `translate(-50%, -100%) rotate(${hRot}deg)` }}
      />
      <div
        className="hand hand-m"
        style={{ transform: `translate(-50%, -100%) rotate(${mRot}deg)` }}
      />
      <div
        className="hand hand-s"
        style={{
          transform: `translate(-50%, -100%) rotate(${sRot}deg)`,
          transition: "transform 0.15s cubic-bezier(0.4, 2.2, 0.6, 1)",
        }}
      />
      <div className="center" />
    </div>
  );
}
