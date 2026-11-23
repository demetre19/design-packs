import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface CardMediaProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  fallbackTone?: 'light' | 'dark' | 'warm';
  fallbackLabel?: string;
}

export function CardMedia({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[4/3]',
  fallbackTone = 'light',
  fallbackLabel,
}: CardMediaProps) {
  const [failed, setFailed] = useState(false);

  const toneClasses =
    fallbackTone === 'dark'
      ? 'bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-zinc-300'
      : fallbackTone === 'warm'
        ? 'bg-gradient-to-br from-stone-200 via-stone-100 to-amber-50 text-stone-700'
        : 'bg-gradient-to-br from-slate-100 via-zinc-100 to-stone-200 text-slate-600';

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative overflow-hidden flex flex-col items-center justify-center p-4 text-center ${aspectClass} ${toneClasses} ${className}`}
      >
        <ImageOff className="w-5 h-5 mb-2 opacity-60" aria-hidden="true" />
        <span className="text-xs font-medium tracking-tight opacity-80">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
      />
    </div>
  );
}
