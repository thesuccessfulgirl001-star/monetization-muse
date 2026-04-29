interface Props {
  size?: number;
  className?: string;
}

export function AnalogClock({ size = 72, className = "" }: Props) {
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
      <div className="hand hand-h" />
      <div className="hand hand-m" />
      <div className="hand hand-s" />
      <div className="center" />
    </div>
  );
}
