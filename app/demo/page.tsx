import Link from "next/link";
import { ArrowRight, CalendarCheck, CreditCard, LayoutDashboard, ShieldCheck, Users } from "lucide-react";
import { Logo } from "../../components/Logo";

const demos = [
  { title: "Dashboard admin", href: "/demo/admin", icon: LayoutDashboard, copy: "Indicadores por sede, pagos, reservas y ocupación." },
  { title: "Agenda online", href: "/demo/agenda", icon: CalendarCheck, copy: "Reserva por sede, servicio, profesional y horario." },
  { title: "Checkout", href: "/demo/checkout", icon: CreditCard, copy: "Compra visual de planes y resumen de pago." },
  { title: "Roles", href: "/demo/roles", icon: Users, copy: "Admin, recepción, entrenador, nutrición y alumno." }
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-fog text-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10"><Link href="/"><Logo /></Link><Link href="/" className="rounded-full bg-white px-5 py-3 text-sm font-black shadow-soft">Volver a landing</Link></header>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.24em] text-orangeFit">Fit Power OS</p><h1 className="mt-4 text-5xl font-black leading-tight tracking-[-0.07em] md:text-7xl">Demo visual para operar 3 gimnasios.</h1><p className="mt-6 text-xl leading-8 text-slate-600">Esta sección muestra la fase futura: sistema multicede, roles, agenda y checkout. Es estática, pero vendible y navegable.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{demos.map((demo) => { const Icon = demo.icon; return <Link key={demo.title} href={demo.href} className="group rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lift"><div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-white"><Icon /></div><h2 className="mt-8 text-2xl font-black tracking-[-0.04em]">{demo.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{demo.copy}</p><span className="mt-8 inline-flex items-center gap-2 font-black text-purpleFit">Ver demo <ArrowRight size={16} /></span></Link>; })}</div>
        <div className="mt-14 rounded-[2rem] bg-ink p-8 text-white shadow-lift"><div className="flex items-start gap-4"><ShieldCheck className="mt-1 text-orangeFit" /><div><h3 className="text-2xl font-black">Mensaje comercial</h3><p className="mt-2 max-w-3xl text-white/65">No se presenta como una simple web. Se presenta como la primera etapa visual de una plataforma para captar clientes, vender planes y ordenar las sedes de Fit Power.</p></div></div></div>
      </section>
    </main>
  );
}
