{/* Echo: parent portal sign-in keeps a cropped access number behind the form */}
import { Lock, LogIn } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Auth1() {
  return (
    <section className="flex min-h-[640px] items-center bg-ink px-5 py-16 text-white md:px-10">
      <div className="group relative mx-auto grid w-full max-w-5xl overflow-hidden border border-white/15 md:grid-cols-2">
        <div className="relative hidden overflow-hidden border-r border-white/15 p-8 md:block">
          <EchoMeasure index="01" tone="dark" size="lg" surface="bg-ink" />
          <div className="type-micro text-accent">Loreto Connect</div>
          <h1 className="type-editorial mt-5 text-6xl">A quieter way to stay close.</h1>
        </div>
        <form className="p-7 md:p-10">
          <Lock className="h-6 w-6 text-accent" />
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">Parent sign in</h2>
          <label className="mt-8 grid gap-2 text-sm font-semibold">Email<input className="focus-ring border border-white/20 bg-transparent px-4 py-3 text-white outline-none transition-colors duration-200 ease-crisp hover:border-white/50" placeholder="parent@example.com" /></label>
          <label className="mt-4 grid gap-2 text-sm font-semibold">Password<input type="password" className="focus-ring border border-white/20 bg-transparent px-4 py-3 text-white outline-none transition-colors duration-200 ease-crisp hover:border-white/50" placeholder="••••••••" /></label>
          <button type="button" className="focus-ring group/btn mt-7 inline-flex items-center gap-3 border border-accent px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-accent transition-colors duration-200 ease-crisp hover:bg-accent hover:text-ink"><LogIn className="h-4 w-4" />Sign in</button>
        </form>
      </div>
    </section>
  );
}
