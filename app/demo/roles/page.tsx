import Link from "next/link";
import { Users } from "lucide-react";
import { Logo } from "../../../components/Logo";
import { roles } from "../../../lib/content";

export default function RolesDemoPage() {
  return (
    <main className="min-h-screen bg-fog text-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
        <Link href="/"><Logo /></Link>
        <Link href="/demo" className="rounded-full bg-white px-5 py-3 text-sm font-black shadow-soft">Demo OS</Link>
      </header>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-orangeFit">Roles demo</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-0.07em]">Cada perfil ve solo lo que necesita.</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <article key={role.role} className="rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-black/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-white"><Users /></div>
              <h2 className="mt-8 text-2xl font-black tracking-[-0.04em]">{role.role}</h2>
              <div className="mt-5 flex flex-wrap gap-2">{role.items.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
