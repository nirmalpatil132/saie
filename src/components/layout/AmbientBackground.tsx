export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Accent blooms */}
      <div
        className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-[60%] left-[-15%] h-[480px] w-[480px] rounded-full opacity-[0.15] blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--color-accent-secondary) 0%, transparent 70%)" }}
      />

      <div className="grain-overlay" />
    </div>
  );
}
