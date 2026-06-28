import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { Logo } from "../../../components/Logo";

export default function AgendaDemoPage() {
  return (
    <main className="min-h-screen bg-fog text-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
        <Link href="/"><Logo /></Link>
        <Link href="/demo" className="rounded-full bg-white px-5 py-3 text-sm font-black shadow-soft">Demo OS</Link>
      </header>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-orangeFit">Agenda online</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-0.07em]">Reserva por sede y profesional.</h1>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr_0.8fr]">
          <aside className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5">
            <h2 className="text-xl font-black">Filtros</h2>
            {[["Sede", "Quilpué Centro"], ["Servicio", "Prueba gratis"], ["Profesional", "Diego Araya"], ["Duración", "45 minutos"]].map(([label, value]) => <div key={label} className="mt-5 rounded-2xl bg-slate-50 p-4"><p className="text-xs font-black uppercase text-slate-400">{label}</p><p className="mt-1 font-bold">{value}</p></div>)}
          </aside>
          <section className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5">
            <h2 className="text-xl font-black">Horarios disponibles</h2>
            <div className="mt-6 grid grid-cols-3 gap-3">{["08:00", "09:00", "10:00", "12:00", "17:00", "19:00"].map((hour, i) => <button key={hour} className={`rounded-2xl px-5 py-4 font-black ${i === 2 ? "gradient-bg text-white" : "bg-slate-50"}`}>{hour}</button>)}</div>
          </section>
          <aside className="rounded-[2rem] bg-ink p-6 text-white shadow-lift">
            <CalendarCheck className="text-orangeFit" />
            <h2 className="mt-5 text-2xl font-black">Resumen</h2>
            <p className="mt-4 text-white/65">Miércoles 21, 10:00 hrs. Prueba gratis con entrenador certificado.</p>
            <button className="mt-8 w-full rounded-full gradient-bg px-5 py-4 font-black">Reservar demo</button>
          </aside>
        </div>
      </section>
    </main>
  );
}
