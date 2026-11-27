export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

type EchoMeasureProps = {
  index: string;
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  surface?: string;
  className?: string;
};

export function EchoMeasure({
  index,
  tone = 'light',
  size = 'md',
  surface = 'bg-paper',
  className = ''
}: EchoMeasureProps) {
  const color = tone === 'dark' ? 'text-white' : 'text-ink';
  const numeral =
    size === 'lg'
      ? '-right-5 bottom-8 text-[clamp(4.6rem,17vw,11rem)]'
      : size === 'sm'
        ? '-right-2 bottom-5 text-[clamp(2.35rem,10vw,3.6rem)]'
        : '-right-3 bottom-6 text-[clamp(3.3rem,13vw,5.4rem)]';
  const ruleWidth = size === 'lg' ? 'w-44' : size === 'sm' ? 'w-20' : 'w-32';

  return (
    <div aria-hidden="true" className={cx('pointer-events-none absolute inset-0 overflow-hidden', color, className)}>
      <span className={cx('absolute bottom-5 right-0 h-px bg-current opacity-20', ruleWidth)} />
      <span
        className={cx(
          'absolute bottom-[18px] right-8 h-[3px] w-4 transition-transform duration-200 ease-crisp group-hover:translate-x-8 group-focus-within:translate-x-8',
          surface
        )}
      />
      <span
        className={cx(
          'select-none font-black leading-none tracking-[-0.09em] opacity-[0.07] transition-transform duration-200 ease-crisp group-hover:-translate-x-3 group-focus-within:-translate-x-3',
          numeral
        )}
      >
        {index}
      </span>
    </div>
  );
}

export function EchoLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#"
      className={cx(
        'focus-ring group relative inline-flex items-center gap-3 overflow-hidden border border-ink bg-transparent px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-200 ease-crisp hover:border-accent hover:text-ink',
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span aria-hidden="true" className="relative z-10 h-px w-8 bg-current transition-transform duration-200 ease-crisp group-hover:translate-x-2" />
      <EchoMeasure index="01" size="sm" surface="bg-paper" />
    </a>
  );
}
