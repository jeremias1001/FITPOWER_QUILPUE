import Link from "next/link";
import { BarChart3, CalendarCheck, CreditCard, Users } from "lucide-react";
import { Logo } from "../../../components/Logo";

const kpis = [
  { label: "Alumnos activos", value: "2.170", icon: Users },
  { label: "Reservas del día", value: "86", icon: CalendarCheck },
  { label: "Ingresos del mes", value: "$18.4M", icon: BarChart3 },
  { label: "Pagos pendientes", value: "14", icon: CreditCard }
];

export default function AdminDemoPage() {
  return (
    <main className="min-h-screen bg-fog text-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
        <Link href="/"><Logo /></Link>
        <Link href="/demo" className="rounded-full bg-white px-5 py-3 text-sm font-black shadow-soft">Demo OS</Link>
      </header>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-orangeFit">Admin multicede</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-0.07em]">Panel de operación</h1>
        <p className="mt-3 text-slate-600">Vista demo para mostrar control de sedes, pagos, agenda y ocupación.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {kpis.map((kpi) => { const Icon = kpi.icon; return <article key={kpi.label} className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5"><div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-orangeFit/10 text-orangeFit"><Icon /></div><p className="text-sm font-bold text-slate-500">{kpi.label}</p><p className="mt-2 text-4xl font-black tracking-[-0.06em]">{kpi.value}</p></article>; })}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5"><h2 className="text-2xl font-black">Ocupación por sede</h2><div className="mt-6 space-y-5">{["Quilpué Centro", "El Belloto", "Villa Alemana"].map((name, i) => <div key={name}><div className="flex justify-between text-sm font-bold"><span>{name}</span><span>{76 + i * 7}%</span></div><div className="mt-2 h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full gradient-bg" style={{ width: `${76 + i * 7}%` }} /></div></div>)}</div></div>
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-lift"><h2 className="text-2xl font-black">Tareas de hoy</h2>{["Confirmar pagos", "Asignar entrenadores", "Actualizar cupos", "Enviar reporte"].map((task) => <div key={task} className="mt-4 rounded-2xl bg-white/[0.08] px-4 py-3">{task}</div>)}</div>
        </div>
      </section>
    </main>
  );
}
