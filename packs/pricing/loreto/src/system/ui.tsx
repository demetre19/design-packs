import { ArrowUpRight } from 'lucide-react';
import { EchoMeasure, cx } from './echo';

export function SectionIntro({
  index,
  eyebrow,
  title,
  copy,
  dark = false
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div className={cx('relative mb-10 overflow-hidden pb-16', dark ? 'text-white' : 'text-ink')}>
      <div className="type-micro text-accent">{eyebrow}</div>
      <h2 className="type-editorial mt-3 max-w-4xl text-5xl md:text-7xl">{title}</h2>
      {copy ? <p className={cx('type-body mt-5 max-w-xl text-base md:text-lg', dark ? 'text-white/70' : 'text-secondary')}>{copy}</p> : null}
      <EchoMeasure index={index} size="lg" tone={dark ? 'dark' : 'light'} surface={dark ? 'bg-ink' : 'bg-ground'} />
    </div>
  );
}

export function EchoCta({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href="#"
      className={cx(
        'focus-ring group relative inline-flex items-center gap-4 overflow-hidden border px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ease-crisp',
        dark ? 'border-white/60 text-white hover:border-accent' : 'border-ink text-ink hover:border-accent'
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-200 ease-crisp group-hover:translate-x-2" />
      <EchoMeasure index="01" size="sm" tone={dark ? 'dark' : 'light'} surface={dark ? 'bg-ink' : 'bg-paper'} />
    </a>
  );
}

export function Frame({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={cx('group relative overflow-hidden border shadow-hairline', dark ? 'border-white/15 bg-ink text-white' : 'border-line bg-paper text-ink', className)}>
      {children}
    </div>
  );
}

export function ArtPlate({ label, variant = 0, className = '', dark = false }: { label?: string; variant?: number; className?: string; dark?: boolean }) {
  const accents = [
    'right-[12%] top-[14%] h-[34%] w-[28%]',
    'left-[10%] top-[18%] h-[56%] w-[22%]',
    'right-[18%] bottom-[16%] h-[28%] w-[36%]',
    'left-[18%] bottom-[12%] h-[38%] w-[30%]'
  ];
  const frames = [
    'left-[16%] top-[10%] h-[72%] w-[62%]',
    'right-[8%] top-[12%] h-[68%] w-[58%]',
    'left-[10%] top-[16%] h-[62%] w-[64%]',
    'right-[16%] top-[8%] h-[70%] w-[54%]'
  ];
  return (
    <div className={cx('relative h-full min-h-full w-full overflow-hidden', dark ? 'bg-ink' : 'bg-secondary', className)} role="img" aria-label={label || 'Abstract editorial colour plate'}>
      <div className="absolute inset-0 surface-archive opacity-25" />
      <div className={cx('absolute border', dark ? 'border-white/30' : 'border-ink/25', frames[variant % frames.length])} />
      <div className={cx('absolute bg-accent', accents[variant % accents.length])} />
      <div className={cx('absolute bottom-0 left-0 h-[30%] w-[46%]', dark ? 'bg-white/10' : 'bg-ink/20')} />
      {label ? <div className="absolute bottom-4 left-4 bg-ink px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">{label}</div> : null}
    </div>
  );
}

export function PageSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={cx('mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24', className)}>{children}</section>;
}
