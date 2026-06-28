import Link from "next/link";
import { Check, CreditCard, ShieldCheck } from "lucide-react";
import { Logo } from "../../../components/Logo";

export default function CheckoutDemoPage() {
  return (
    <main className="min-h-screen bg-fog text-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
        <Link href="/"><Logo /></Link>
        <Link href="/demo" className="rounded-full bg-white px-5 py-3 text-sm font-black shadow-soft">Demo OS</Link>
      </header>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-orangeFit">Checkout demo</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-0.07em]">Compra de plan en 3 pasos.</h1>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-black/5">
            <h2 className="text-2xl font-black">Datos del alumno</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">{["Nombre", "Email", "Teléfono", "Sede"].map((field) => <div key={field} className="rounded-2xl bg-slate-50 p-4"><p className="text-xs font-black uppercase text-slate-400">{field}</p><p className="mt-2 font-bold text-slate-500">Demo editable</p></div>)}</div>
            <h2 className="mt-8 text-2xl font-black">Método de pago</h2>
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-black/10 p-5"><CreditCard className="text-orangeFit" /><div><p className="font-black">Pago online demo</p><p className="text-sm text-slate-500">Webpay / tarjeta / transferencia en fase real.</p></div></div>
          </div>
          <aside className="rounded-[2rem] bg-ink p-6 text-white shadow-lift">
            <ShieldCheck className="text-orangeFit" />
            <h2 className="mt-5 text-3xl font-black">Plan Power</h2>
            <p className="mt-1 text-white/60">Sede Quilpué Centro</p>
            <div className="my-8 h-px bg-white/10" />
            {['Acceso gimnasio', 'Clases ilimitadas', 'Evaluación corporal', 'App Fit Power'].map((item) => <p key={item} className="mb-4 flex items-center gap-3"><Check size={18} className="text-orangeFit" />{item}</p>)}
            <div className="my-8 h-px bg-white/10" />
            <div className="flex items-end justify-between"><span>Total mensual</span><b className="text-4xl">$29.990</b></div>
            <button className="mt-8 w-full rounded-full gradient-bg px-5 py-4 font-black">Continuar al pago</button>
          </aside>
        </div>
      </section>
    </main>
  );
}
