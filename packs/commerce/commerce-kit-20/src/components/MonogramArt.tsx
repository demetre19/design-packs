import React from 'react';

interface MonogramArtProps {
  monogram: string;
  gradient: [string, string];
  shape?: 'arch' | 'circle' | 'grid' | 'prism' | 'wave' | 'ring';
  className?: string;
  label?: string;
  darkText?: boolean;
  editorial?: boolean;
}

export function MonogramArt({
  monogram,
  gradient,
  shape = 'arch',
  className = 'w-16 h-16',
  label,
  darkText = false,
  editorial = false,
}: MonogramArtProps) {
  const strokeColor = darkText ? 'rgba(24,24,27,0.18)' : 'rgba(255,255,255,0.22)';
  const textColor = darkText ? '#18181B' : '#FFFFFF';

  return (
    <div
      className={`relative overflow-hidden select-none flex items-center justify-center shrink-0 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
      }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {shape === 'arch' && (
          <>
            <path d="M24 108V54a36 36 0 0 1 72 0v54" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="60" cy="54" r="22" stroke={strokeColor} strokeWidth="1.2" />
          </>
        )}
        {shape === 'circle' && (
          <>
            <circle cx="60" cy="60" r="44" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="60" cy="60" r="28" stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4" />
          </>
        )}
        {shape === 'grid' && (
          <>
            <line x1="30" y1="0" x2="30" y2="120" stroke={strokeColor} strokeWidth="1" />
            <line x1="90" y1="0" x2="90" y2="120" stroke={strokeColor} strokeWidth="1" />
            <line x1="0" y1="30" x2="120" y2="30" stroke={strokeColor} strokeWidth="1" />
            <line x1="0" y1="90" x2="120" y2="90" stroke={strokeColor} strokeWidth="1" />
          </>
        )}
        {shape === 'prism' && (
          <>
            <polygon points="60,16 104,96 16,96" stroke={strokeColor} strokeWidth="1.5" />
            <line x1="60" y1="16" x2="60" y2="96" stroke={strokeColor} strokeWidth="1" />
          </>
        )}
        {shape === 'wave' && (
          <>
            <path d="M0 78 Q30 58 60 78 T120 78" stroke={strokeColor} strokeWidth="1.5" />
            <path d="M0 94 Q30 74 60 94 T120 94" stroke={strokeColor} strokeWidth="1.2" />
          </>
        )}
        {shape === 'ring' && (
          <>
            <rect x="22" y="22" width="76" height="76" rx="18" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="60" cy="60" r="24" stroke={strokeColor} strokeWidth="1.2" />
          </>
        )}
      </svg>
      <span
        className={`relative z-10 tracking-tight ${
          editorial ? 'font-editorial italic font-semibold' : 'font-display font-bold'
        }`}
        style={{ color: textColor }}
      >
        {monogram}
      </span>
    </div>
  );
}
