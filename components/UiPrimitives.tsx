import type { ReactNode } from "react";

export function SectionIntro({ eyebrow, title, text, center = false, dark = false }: { eyebrow: string; title: string; text: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-black uppercase tracking-[0.24em] text-orangeFit">{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-black leading-tight tracking-[-0.06em] md:text-6xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      <p className={`mt-4 text-lg leading-8 ${dark ? "text-white/65" : "text-slate-600"}`}>{text}</p>
    </div>
  );
}

export function MiniCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-[1.6rem] bg-white p-6 shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lift">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orangeFit/10 text-orangeFit">{icon}</div>
      <h3 className="text-lg font-black tracking-[-0.03em]">{title}</h3>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{text}</p>
    </article>
  );
}

export function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-bold"><span>{label}</span><span>{value}%</span></div>
      <div className="mt-2 h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full gradient-bg" style={{ width: `${value}%` }} /></div>
    </div>
  );
}
