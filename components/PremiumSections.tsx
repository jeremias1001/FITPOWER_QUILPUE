import { BarChart3, Building2, CalendarCheck, Check, CreditCard, Dumbbell, Layers3, MapPin, Users } from "lucide-react";
import { Logo } from "./Logo";
import { MiniCard, Progress, SectionIntro } from "./UiPrimitives";
import { brand, plans, roles, services, venues } from "../lib/content";

const modules = [
  { icon: Building2, title: "Multisede", text: "Sedes, horarios, alumnos y métricas por ubicación." },
  { icon: CalendarCheck, title: "Agenda", text: "Reservas por clase, profesional, servicio y cupo." },
  { icon: CreditCard, title: "Checkout", text: "Planes online con resumen de compra y contacto." },
  { icon: Users, title: "Roles", text: "Admin, recepción, coach, nutrición y alumno." },
  { icon: BarChart3, title: "Dashboard", text: "Ingresos, pagos, ocupación y reservas del día." },
  { icon: Layers3, title: "Fase escalable", text: "La demo prepara la venta del sistema completo." }
];

export function Platform() {
  return (
    <section id="sistema" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <SectionIntro eyebrow="Fit Power OS" title="No es solo una web. Es la demo de una operación multicede." text="La landing debe vender hoy y mostrar el futuro: sedes, planes, agenda, checkout, roles y dashboard para administrar los gimnasios." />
        <div className="grid gap-4 md:grid-cols-2">{modules.map((m) => <MiniCard key={m.title} icon={<m.icon />} title={m.title} text={m.text} />)}</div>
      </div>
    </section>
  );
}

export function Venues() {
  return (
    <section id="sedes" className="bg-white/70 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionIntro eyebrow="Multisede" title="Tres sedes, una sola experiencia Fit Power." text="Cada sede se presenta como una unidad comercial clara: ubicación, estado, alumnos demo y acción inmediata." center />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {venues.map((venue) => <article key={venue.name} className="rounded-[2rem] bg-warm p-6 shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lift"><div className="flex items-center justify-between"><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{venue.status}</span><MapPin className="text-orangeFit" /></div><h3 className="mt-8 text-3xl font-black tracking-[-0.06em]">Fit Power {venue.name}</h3><p className="mt-2 text-slate-600">{venue.address}</p><div className="mt-8 flex items-end justify-between border-t border-black/10 pt-6"><div><p className="text-4xl font-black tracking-[-0.06em]">{venue.members}</p><p className="text-sm font-bold text-slate-500">alumnos demo</p></div><a href="#contacto" className="rounded-full bg-ink px-5 py-3 text-sm font-black text-white">Agendar</a></div></article>)}
        </div>
      </div>
    </section>
  );
}

export function Plans() {
  return (
    <section id="planes" className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
      <SectionIntro eyebrow="Membresías" title="Planes diseñados para convertir." text="La estructura permite vender un plan inicial, empujar el Power como recomendado y dejar una opción Elite premium." center />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => <article key={plan.name} className={`relative rounded-[2rem] bg-white p-7 shadow-soft ring-1 ${plan.popular ? "scale-[1.02] ring-purpleFit/50 shadow-glow" : "ring-black/5"}`}>{plan.popular && <span className="absolute -top-4 left-7 rounded-full gradient-bg px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">Más popular</span>}<h3 className="text-3xl font-black tracking-[-0.06em]">{plan.name}</h3><p className="mt-1 font-semibold text-slate-500">{plan.subtitle}</p><div className="mt-8 flex items-end gap-2"><span className="text-5xl font-black tracking-[-0.07em]">{plan.price}</span><span className="mb-2 text-slate-500">/mes</span></div><ul className="mt-8 space-y-4">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 font-bold text-slate-700"><Check size={18} className="text-orangeFit" />{feature}</li>)}</ul><a href="/demo/checkout" className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-4 font-black ${plan.popular ? "gradient-bg text-white" : "border border-black/10 bg-white text-ink"}`}>Elegir plan</a></article>)}
      </div>
    </section>
  );
}

export function Services() {
  return <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10"><div className="grid gap-5 md:grid-cols-3">{services.map((s) => <MiniCard key={s.title} icon={<Dumbbell />} title={s.title} text={s.copy} />)}</div></section>;
}

export function SystemPreview() {
  return (
    <section className="soft-grid bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionIntro eyebrow="Demo interna" title="Una vista de producto que parece sistema real." text="Dashboard, roles, reservas y pagos presentados como una fase futura vendible, no como relleno visual." dark />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"><div className="rounded-[2rem] bg-white p-5 text-ink shadow-2xl"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Dashboard Admin</p><h3 className="text-2xl font-black">Operación multicede</h3></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">En vivo</span></div><div className="grid gap-4 md:grid-cols-4">{["2.170 alumnos", "$18.4M ingresos", "86 reservas", "14 pagos"].map((stat) => <div key={stat} className="rounded-2xl bg-slate-50 p-4 font-black">{stat}</div>)}</div><div className="mt-5 grid gap-4 lg:grid-cols-2"><div className="rounded-2xl bg-slate-50 p-5"><p className="mb-5 font-black">Ocupación por sede</p>{venues.map((v, i) => <Progress key={v.name} label={v.name} value={76 + i * 7} />)}</div><div className="rounded-2xl bg-slate-50 p-5"><p className="mb-5 font-black">Próximas clases</p>{["HIIT Power · 08:00", "Funcional · 10:00", "Personal · 18:30"].map((item) => <div key={item} className="mb-3 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold"><span>{item}</span><span className="text-emerald-600">Activa</span></div>)}</div></div></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{roles.map((role) => <div key={role.role} className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur"><h3 className="font-black">{role.role}</h3><div className="mt-3 flex flex-wrap gap-2">{role.items.map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80">{item}</span>)}</div></div>)}</div></div>
      </div>
    </section>
  );
}

export function ProofAndFooter() {
  return (
    <><section className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/5 lg:grid-cols-[1fr_1.1fr]"><div className="p-8 md:p-12"><p className="text-5xl brand-gradient">“</p><p className="mt-3 text-xl font-bold leading-8 text-slate-700">Fit Power Quilpué cambió mi rutina y mi mentalidad. Los entrenadores te acompañan de verdad y la comunidad te motiva todos los días.</p><p className="mt-8 font-black">Camila R.</p><p className="text-sm text-slate-500">Alumna Fit Power</p></div><div className="grid grid-cols-3 divide-x divide-black/10 bg-slate-50 p-8 text-center md:p-12">{["+2500\nalumnos", "+120\nclases semana", "4.9/5\nvaloración"].map((metric) => { const [a, b] = metric.split("\n"); return <div key={metric}><p className="text-4xl font-black tracking-[-0.06em]">{a}</p><p className="mt-2 text-sm font-bold text-slate-500">{b}</p></div>; })}</div></div><div className="cta-photo mt-10 rounded-[2rem] p-8 text-white shadow-lift md:p-12"><h2 className="text-4xl font-black tracking-[-0.06em]">Entrena hoy. Digitaliza tus sedes mañana.</h2><p className="mt-3 max-w-2xl text-white/80">La demo está pensada para vender la fase real: agenda, checkout, roles, alumnos y administración multicede.</p><a href="#contacto" className="mt-8 inline-flex rounded-full gradient-bg px-7 py-4 font-black">Agendar prueba</a></div></section><footer id="contacto" className="bg-ink px-5 py-12 text-white lg:px-10"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4"><div><Logo muted /><p className="mt-4 text-sm leading-6 text-white/60">Landing premium + demo OS para vender una plataforma multicede.</p></div><div><p className="font-black">Contacto</p><p className="mt-4 text-sm text-white/60">{brand.phone}<br />{brand.email}<br />{brand.address}</p></div><div><p className="font-black">Horarios</p><p className="mt-4 text-sm text-white/60">Lun a Vier 06:00 – 22:00<br />Sábados 08:00 – 14:00</p></div><div><p className="font-black">Demo</p><a className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-ink" href="/demo">Ver Fit Power OS</a></div></div></footer></>
  );
}
