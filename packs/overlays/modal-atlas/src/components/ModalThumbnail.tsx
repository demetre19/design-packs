import type { ModalSpec } from '../utils/catalog';

interface ModalThumbnailProps {
  spec: ModalSpec;
}

export function ModalThumbnail({ spec }: ModalThumbnailProps) {
  const backdropClass =
    spec.styleFamily === 'Dark'
      ? 'bg-zinc-900'
      : spec.styleFamily === 'Glass'
        ? 'bg-gradient-to-br from-slate-800 via-indigo-900 to-sky-900'
        : spec.styleFamily === 'Warm Editorial'
          ? 'bg-[#EAE3D7]'
          : spec.styleFamily === 'Bold'
            ? 'bg-slate-900'
            : 'bg-slate-200/80';

  const cardSurfaceClass =
    spec.styleFamily === 'Dark'
      ? 'bg-zinc-950 border-zinc-700 text-zinc-100'
      : spec.styleFamily === 'Glass'
        ? 'bg-slate-900/65 backdrop-blur-md border-white/30 text-white'
        : spec.styleFamily === 'Warm Editorial'
          ? 'bg-[#FAF7F2] border-[#D6CFC2] text-[#1C1917]'
          : spec.styleFamily === 'Bold'
            ? 'bg-white border-indigo-200 text-slate-900'
            : 'bg-white border-slate-300 text-slate-900';

  const accentBarClass =
    spec.kind === 'Destructive'
      ? 'bg-red-600'
      : spec.styleFamily === 'Dark'
        ? 'bg-sky-400'
        : spec.styleFamily === 'Glass'
          ? 'bg-white'
          : spec.styleFamily === 'Warm Editorial'
            ? 'bg-[#8B3A2B]'
            : spec.styleFamily === 'Bold'
              ? 'bg-gradient-to-r from-indigo-600 to-fuchsia-600'
              : 'bg-slate-900';

  if (spec.layout === 'Right Slide-Over') {
    return (
      <div className={`relative h-32 w-full overflow-hidden rounded-lg border border-slate-200 ${backdropClass}`}>
        <div className={`absolute right-0 top-0 bottom-0 w-2/5 border-l p-3 flex flex-col justify-between shadow-lg ${cardSurfaceClass}`}>
          <div className="space-y-1.5">
            <div className={`h-2 w-12 rounded-xs ${accentBarClass}`} />
            <div className="h-1.5 w-full rounded-xs bg-current opacity-20" />
            <div className="h-1.5 w-4/5 rounded-xs bg-current opacity-15" />
          </div>
          <div className="flex justify-end gap-1">
            <div className="h-3 w-8 rounded-xs bg-current opacity-15" />
            <div className={`h-3 w-10 rounded-xs ${accentBarClass}`} />
          </div>
        </div>
      </div>
    );
  }

  if (spec.layout === 'Floating Banner / Toast') {
    const alignClass =
      spec.id === 8
        ? 'items-end justify-center p-2.5'
        : spec.id === 19
          ? 'items-end justify-end p-2.5'
          : 'items-start justify-center p-2.5';
    const widthClass = spec.id === 8 ? 'w-11/12' : 'w-3/5';
    return (
      <div className={`relative h-32 w-full overflow-hidden rounded-lg border border-slate-200 flex ${alignClass} ${backdropClass}`}>
        <div className={`${widthClass} rounded-md border p-2.5 shadow-md ${cardSurfaceClass}`}>
          <div className="flex items-center justify-between gap-2">
            <div className={`h-2 w-16 rounded-xs ${accentBarClass}`} />
            <div className="h-2 w-2 rounded-full bg-current opacity-30" />
          </div>
          <div className="mt-2 h-1.5 w-4/5 rounded-xs bg-current opacity-20" />
          <div className="mt-2.5 flex justify-end gap-1.5">
            <div className="h-2.5 w-8 rounded-xs bg-current opacity-15" />
            <div className={`h-2.5 w-10 rounded-xs ${accentBarClass}`} />
          </div>
        </div>
      </div>
    );
  }

  if (spec.layout === 'Bottom-Anchored Mobile') {
    return (
      <div className={`relative h-32 w-full overflow-hidden rounded-lg border border-slate-200 flex items-end justify-center pt-4 px-5 ${backdropClass}`}>
        <div className={`w-4/5 rounded-t-xl border-x border-t p-3 shadow-lg ${cardSurfaceClass}`}>
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-current opacity-25" />
          <div className={`h-2 w-20 rounded-xs ${accentBarClass}`} />
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-full rounded-xs bg-current opacity-20" />
            <div className="h-1.5 w-3/4 rounded-xs bg-current opacity-15" />
          </div>
          <div className="mt-2.5 flex justify-end gap-1.5">
            <div className="h-3 w-8 rounded-xs bg-current opacity-15" />
            <div className={`h-3 w-10 rounded-xs ${accentBarClass}`} />
          </div>
        </div>
      </div>
    );
  }

  const sizeClass =
    spec.layout === 'Centered Small'
      ? 'w-1/2'
      : spec.layout === 'Centered Medium'
        ? 'w-2/3'
        : 'w-4/5';

  return (
    <div className={`relative h-32 w-full overflow-hidden rounded-lg border border-slate-200 flex items-center justify-center p-3 ${backdropClass}`}>
      <div className={`${sizeClass} rounded-lg border p-3 shadow-lg ${cardSurfaceClass}`}>
        {spec.styleFamily === 'Bold' && (
          <div className={`-mx-3 -mt-3 mb-2.5 h-4 rounded-t-[7px] ${accentBarClass}`} />
        )}
        <div className="flex items-center justify-between gap-2">
          <div className={`h-2 w-16 rounded-xs ${spec.styleFamily === 'Bold' ? 'bg-slate-800' : accentBarClass}`} />
          <div className="h-2 w-2 rounded-xs bg-current opacity-30" />
        </div>
        {spec.kind === 'Media' ? (
          <div className="mt-2 h-9 rounded-xs bg-gradient-to-br from-sky-500/25 to-indigo-500/30 border border-white/10 flex items-center justify-center">
            <div className="h-3.5 w-3.5 rounded-full bg-white/80" />
          </div>
        ) : spec.kind === 'Command Palette' ? (
          <div className="mt-2 space-y-1">
            <div className="h-2.5 w-full rounded-xs bg-white/10 border border-white/15" />
            <div className="h-1.5 w-3/4 rounded-xs bg-current opacity-20" />
            <div className="h-1.5 w-2/3 rounded-xs bg-current opacity-15" />
          </div>
        ) : (
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-full rounded-xs bg-current opacity-20" />
            <div className="h-1.5 w-4/5 rounded-xs bg-current opacity-15" />
          </div>
        )}
        <div className="mt-3 flex justify-end gap-1.5">
          <div className="h-3 w-8 rounded-xs bg-current opacity-15" />
          <div className={`h-3 w-11 rounded-xs ${accentBarClass}`} />
        </div>
      </div>
    </div>
  );
}
