import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface FigureFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  captionClassName?: string;
  aspectClassName?: string;
  dark?: boolean;
}

export function FigureFrame({
  src,
  alt,
  caption,
  className = '',
  imgClassName = '',
  captionClassName = '',
  aspectClassName = 'aspect-[16/9]',
  dark = false,
}: FigureFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden ${aspectClassName} ${
          dark ? 'bg-stone-900 border border-stone-800' : 'bg-stone-100 border border-stone-200/80'
        }`}
      >
        {!failed ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className={`w-full h-full object-cover ${imgClassName}`}
          />
        ) : (
          <div
            className={`w-full h-full flex flex-col items-center justify-center p-6 text-center ${
              dark
                ? 'bg-gradient-to-br from-stone-900 to-stone-800 text-stone-400'
                : 'bg-gradient-to-br from-stone-100 to-stone-200 text-stone-500'
            }`}
          >
            <ImageOff className="w-6 h-6 mb-2 opacity-60" aria-hidden="true" />
            <p className="text-xs font-medium max-w-xs">{alt}</p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption
          className={
            captionClassName ||
            `mt-2.5 text-xs leading-relaxed ${
              dark ? 'text-stone-400' : 'text-stone-500'
            }`
          }
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
