import { ArrowRight, BadgeCheck, Building2, CalendarCheck, CreditCard, Dumbbell, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

const benefits = [
  [BadgeCheck, "Entrenadores", "certificados"],
  [CalendarCheck, "Reserva", "online"],
  [CreditCard, "Planes", "flexibles"],
  [Building2, "Sistema", "multicede"]
] as const;

export function HeaderHero() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fbfaf8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="scale-110"><Logo /></a>
          <nav className="hidden items-center gap-8 text-sm font-black text-slate-700 md:flex">
            <a className="hover:text-orangeFit" href="#sedes">Sedes</a>
            <a className="hover:text-orangeFit" href="#planes">Planes</a>
            <a className="hover:text-orangeFit" href="#sistema">Demo OS</a>
          </nav>
          <a href="#contacto" className="rounded-full gradient-bg px-6 py-3 text-sm font-black text-white shadow-glow">Prueba gratis</a>
        </div>
      </header>
      <section id="top" className="relative px-5 pt-12 lg:px-10 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] bg-white p-5 shadow-soft ring-1 ring-black/5 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div className="px-1 py-8 md:px-6 lg:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-700"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 3 sedes activas</div>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.08em] text-ink md:text-7xl lg:text-8xl">Tu próximo nivel empieza <span className="brand-gradient">aquí.</span></h1>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-slate-600 md:text-xl">Entrenamiento, bienestar y comunidad en tus 3 sedes Fit Power. Planes, agenda y una experiencia digital premium en una sola plataforma.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-7 py-4 font-black text-white shadow-glow"><Sparkles size={18} /> Agendar prueba</a><a href="#sistema" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 font-black text-ink shadow-soft">Ver demo OS <ArrowRight size={18} /></a></div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3"><HeroStat value="3" label="sedes" /><HeroStat value="+120" label="clases" /><HeroStat value="4.9" label="rating" /></div>
          </div>
          <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] bg-ink shadow-lift">
            <div className="absolute inset-0 hero-photo" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute left-5 top-5 rounded-2xl bg-white/90 p-4 shadow-soft backdrop-blur"><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Hoy</p><p className="mt-1 text-2xl font-black">86 reservas</p></div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-white p-5 shadow-soft"><div className="flex items-center justify-between gap-4"><div><p className="text-sm font-black text-slate-500">Fit Power OS</p><h2 className="text-2xl font-black tracking-[-0.04em]">Agenda + checkout + roles</h2></div><div className="rounded-full gradient-bg px-4 py-2 text-sm font-black text-white">Demo</div></div><div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-black text-slate-600"><span className="rounded-full bg-slate-100 px-3 py-2">Quilpué</span><span className="rounded-full bg-slate-100 px-3 py-2">Belloto</span><span className="rounded-full bg-slate-100 px-3 py-2">V. Alemana</span></div></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-10"><div className="grid gap-4 md:grid-cols-4">{benefits.map(([Icon, title, text]) => <article key={title} className="rounded-[1.6rem] bg-white p-5 shadow-soft ring-1 ring-black/5"><div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orangeFit/10 text-orangeFit"><Icon /></div><div><h3 className="font-black">{title}</h3><p className="text-sm font-bold text-slate-500">{text}</p></div></div></article>)}</div></section>
    </>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl bg-slate-50 p-4"><p className="text-3xl font-black tracking-[-0.06em]">{value}</p><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{label}</p></div>;
}
