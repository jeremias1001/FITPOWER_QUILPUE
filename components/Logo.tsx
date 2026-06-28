export function Logo({ muted = false }: { muted?: boolean }) {
  return (
    <div className="leading-none" aria-label="Fit Power Quilpué">
      <div className={muted ? "text-white" : "text-ink"}>
        <span className="text-2xl font-black italic tracking-[-0.08em] text-orangeFit">fit</span>
        <span className="mx-[-0.10em] inline-block -skew-x-12 bg-gradient-to-br from-orangeFit via-magentaFit to-purpleFit bg-clip-text text-3xl font-black italic tracking-[-0.10em] text-transparent">P</span>
        <span className="text-3xl font-black italic tracking-[-0.08em] text-purpleFit">ower</span>
      </div>
      <div className="ml-16 mt-[-0.18rem] font-serif text-sm italic tracking-[-0.02em] brand-gradient">Quilpué</div>
    </div>
  );
}
