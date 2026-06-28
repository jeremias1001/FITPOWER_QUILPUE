import { ArrowRight, BadgeCheck, Building2, CalendarCheck, Check, CreditCard, Dumbbell, MapPin, Sparkles, Users } from "lucide-react";
import { Logo } from "../components/Logo";
import { brand, modules, plans, roles, services, venues } from "../lib/content";

const moduleIcons = [Building2, CalendarCheck, CreditCard, Users];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-fog text-ink">
      <Header />
      <Hero />
      <Platform />
      <Venues />
      <Plans />
      <Services />
      <SystemPreview />
      <Proof />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
          <a href="#planes">Planes</a>
          <a href="#sedes">Sedes</a>
          <a href="#sistema">Demo OS</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contacto" className="rounded-full gradient-bg px-5 py-3 text-sm font-extrabold text-white shadow-glow">Prueba gratis</a>
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white md:hidden" aria-label="Abrir menú">
            <span className="h-0.5 w-5 bg-ink shadow-[0_7px_0_#121318,0_-7px_0_#121318]" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[850px] pt-24">
      <div className="absolute inset-0 hero-photo" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fog" />
      <div className="relative mx-auto flex max-w-7xl flex-col px-5 pb-28 pt-20 lg:px-10 lg:pt-32">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> 3 sedes activas en Quilpué
          </div>
          <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.08em] text-white md:text-8xl lg:text-[7.8rem]">
            Tu próximo <br /> nivel empieza <span className="brand-gradient">aquí.</span>
          </h1>
          <div className="mt-8 h-1 w-24 rounded-full gradient-bg" />
          <p className="mt-8 max-w-xl text-xl font-medium leading-8 text-white/90">Entrenamiento, bienestar y comunidad en tus 3 sedes Fit Power. Una landing premium con demo visual de sistema multicede.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-7 py-4 font-black text-white shadow-glow"><Sparkles size={18} /> Prueba gratis</a>
            <a href="#sistema" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/35 bg-white/10 px-7 py-4 font-black text-white backdrop-blur">Ver demo del sistema <ArrowRight size={18} /></a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-10 z-10 mx-auto max-w-5xl rounded-[2rem] bg-white p-4 shadow-soft md:p-6">
        <div className="grid gap-4 md:grid-cols-4">
          <Benefit icon={<BadgeCheck />} title="Entrenadores" copy="certificados" />
          <Benefit icon={<CalendarCheck />} title="Reserva" copy="online" />
          <Benefit icon={<Dumbbell />} title="Planes" copy="flexibles" />
          <Benefit icon={<Building2 />} title="Sistema" copy="multicede" />
        </div>
      </div>
    </section>
  );
}

function Benefit({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return <div className="flex items-center gap-4 rounded-2xl px-4 py-3 md:border-r md:last:border-r-0"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orangeFit/10 text-orangeFit">{icon}</div><div className="text-sm font-black leading-tight text-slate-800">{title}<br />{copy}</div></div>;
}

function Platform() {
  return (
    <section id="sistema" className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div><p className="text-sm font-black uppercase tracking-[0.24em] text-orangeFit">Fit Power OS</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.06em] text-ink md:text-6xl">Todo Fit Power en una sola plataforma.</h2><p className="mt-5 text-lg leading-8 text-slate-600">La demo no vende solo una web: muestra cómo se vería una operación digital para captar clientes, agendar servicios, vender planes y administrar sedes.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module, index) => { const Icon = moduleIcons[index]; return <article key={module.title} className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5"><div className="mb-6 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-purpleFit"><Icon size={24} /></div><span className="rounded-full bg-orangeFit/10 px-3 py-1 text-xs font-black text-orangeFit">{module.stat}</span></div><h3 className="text-xl font-black">{module.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{module.copy}</p></article>; })}
        </div>
      </div>
    </section>
  );
}

function Venues() {
  return <section id="sedes" className="bg-white/70 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><SectionTitle eyebrow="Multisede" title="Elige tu sede" copy="Tres gimnasios, una experiencia de marca y una administración centralizada." /><div className="mt-10 grid gap-5 md:grid-cols-3">{venues.map((venue) => <article key={venue.name} className="group rounded-[2rem] bg-warm p-6 shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lift"><div className="flex items-center justify-between"><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{venue.status}</span><MapPin className="text-orangeFit" /></div><h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">Fit Power {venue.name}</h3><p className="mt-2 text-slate-600">{venue.address}</p><div className="mt-7 flex items-end justify-between"><div><p className="text-3xl font-black">{venue.members}</p><p className="text-sm text-slate-500">alumnos demo</p></div><a className="rounded-full border border-black/10 px-4 py-2 text-sm font-black" href="#contacto">Agendar</a></div></article>)}</div></div></section>;
}

function Plans() {
  return <section id="planes" className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><SectionTitle eyebrow="Membresías" title="Planes para vender desde la web" copy="Cards limpias para presentar precios, beneficios y llevar al checkout demo." centered /><div className="mt-12 grid gap-6 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative rounded-[2rem] bg-white p-7 shadow-soft ring-1 ${plan.popular ? "ring-purpleFit/50 shadow-glow" : "ring-black/5"}`}>{plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-white">Más popular</div>}<h3 className="text-2xl font-black tracking-[-0.04em]">{plan.name}</h3><p className="mt-1 text-slate-500">{plan.subtitle}</p><div className="mt-8 flex items-end gap-2"><span className="text-5xl font-black tracking-[-0.06em]">{plan.price}</span><span className="mb-2 text-slate-500">/mes</span></div><ul className="mt-8 space-y-4">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700"><Check size={18} className="text-orangeFit" />{feature}</li>)}</ul><a href="/demo/checkout" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 font-black ${plan.popular ? "gradient-bg text-white" : "border border-black/15 bg-white text-ink"}`}>Elegir plan</a></article>)}</div></section>;
}

function Services() {
  return <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10"><div className="grid gap-5 md:grid-cols-3">{services.map((service) => <article key={service.title} className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5"><div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orangeFit/10 text-orangeFit"><Dumbbell /></div><h3 className="text-xl font-black">{service.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{service.copy}</p></article>)}</div></section>;
}

function SystemPreview() {
  return <section className="soft-grid bg-ink py-24 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-10"><SectionTitle eyebrow="Demo interna" title="Vista previa del sistema" copy="Un mockup navegable para que el cliente vea la fase 2: sedes, agenda, pagos, roles y operación." dark /><div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="rounded-[2rem] bg-white p-5 text-ink shadow-2xl"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Dashboard Admin</p><h3 className="text-2xl font-black">Operación multicede</h3></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Hoy</span></div><div className="grid gap-4 md:grid-cols-4">{["2.170 alumnos", "$18.4M ingresos", "86 reservas", "14 pagos"].map((stat) => <div key={stat} className="rounded-2xl bg-slate-50 p-4 font-black">{stat}</div>)}</div><div className="mt-5 grid gap-4 lg:grid-cols-2"><div className="rounded-2xl bg-slate-50 p-5"><p className="mb-4 font-black">Ocupación por sede</p><div className="space-y-3">{venues.map((v, i) => <div key={v.name}><div className="flex justify-between text-sm"><span>{v.name}</span><b>{78 + i * 5}%</b></div><div className="mt-2 h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full gradient-bg" style={{ width: `${78 + i * 5}%` }} /></div></div>)}</div></div><div className="rounded-2xl bg-slate-50 p-5"><p className="mb-4 font-black">Próximas clases</p>{["HIIT Power · 08:00", "Funcional · 10:00", "Personal · 18:30"].map((item) => <div key={item} className="mb-3 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm"><span>{item}</span><span className="font-black text-emerald-600">Activa</span></div>)}</div></div></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{roles.map((role) => <div key={role.role} className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur"><h3 className="font-black">{role.role}</h3><div className="mt-3 flex flex-wrap gap-2">{role.items.map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80">{item}</span>)}</div></div>)}</div></div></div></section>;
}

function Proof() {
  return <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/5 lg:grid-cols-[1fr_1.1fr]"><div className="p-8 md:p-12"><p className="text-5xl brand-gradient">“</p><p className="mt-3 text-xl font-bold leading-8 text-slate-700">Fit Power Quilpué cambió mi rutina y mi mentalidad. Los entrenadores te acompañan de verdad y la comunidad te motiva todos los días.</p><p className="mt-8 font-black">Camila R.</p><p className="text-sm text-slate-500">Alumna Fit Power</p></div><div className="grid grid-cols-3 divide-x divide-black/10 bg-slate-50 p-8 text-center md:p-12">{["+2500\nalumnos", "+120\nclases semana", "4.9/5\nvaloración"].map((metric) => { const [a, b] = metric.split("\n"); return <div key={metric}><p className="text-4xl font-black tracking-[-0.06em]">{a}</p><p className="mt-2 text-sm font-bold text-slate-500">{b}</p></div>; })}</div></div><div className="cta-photo mt-10 rounded-[2rem] p-8 text-white shadow-lift md:p-12"><h2 className="text-4xl font-black tracking-[-0.06em]">Entrena hoy. Digitaliza tus sedes mañana.</h2><p className="mt-3 max-w-2xl text-white/80">La demo está pensada para vender la fase real: agenda, checkout, roles, alumnos y administración multicede.</p><a href="#contacto" className="mt-8 inline-flex rounded-full gradient-bg px-7 py-4 font-black">Agendar prueba</a></div></section>;
}

function Footer() {
  return <footer id="contacto" className="bg-ink px-5 py-12 text-white lg:px-10"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4"><div><Logo muted /><p className="mt-4 text-sm leading-6 text-white/60">Landing premium + demo OS para vender una plataforma multicede.</p></div><div><p className="font-black">Contacto</p><p className="mt-4 text-sm text-white/60">{brand.phone}<br />{brand.email}<br />{brand.address}</p></div><div><p className="font-black">Horarios</p><p className="mt-4 text-sm text-white/60">Lun a Vier 06:00 – 22:00<br />Sábados 08:00 – 14:00</p></div><div><p className="font-black">Demo</p><a className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-ink" href="/demo">Ver Fit Power OS</a></div></div></footer>;
}

function SectionTitle({ eyebrow, title, copy, centered = false, dark = false }: { eyebrow: string; title: string; copy: string; centered?: boolean; dark?: boolean }) {
  return <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="text-sm font-black uppercase tracking-[0.24em] text-orangeFit">{eyebrow}</p><h2 className={`mt-3 text-4xl font-black leading-tight tracking-[-0.06em] md:text-6xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2><p className={`mt-4 text-lg leading-8 ${dark ? "text-white/65" : "text-slate-600"}`}>{copy}</p></div>;
}
