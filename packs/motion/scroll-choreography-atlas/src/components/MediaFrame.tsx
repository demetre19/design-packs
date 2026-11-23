import { useState } from 'react';

interface MediaFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  aspectClass?: string;
}

export function MediaFrame({
  src,
  alt,
  caption,
  className = '',
  imgClassName = '',
  aspectClass = 'aspect-[16/10]',
}: MediaFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`relative overflow-hidden bg-[#E7E6E2] ${aspectClass} ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#E6E5E0] via-[#D8D7D1] to-[#C8C7C0] p-6 text-[#3F3F3A]">
          <span className="font-mono text-xs tracking-wider uppercase">Archival Plate</span>
          <p className="font-display text-lg font-medium leading-snug">{alt}</p>
        </div>
      )}
      {caption && (
        <figcaption className="mt-2 text-xs text-[#575752]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
