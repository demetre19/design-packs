import { X } from 'lucide-react';
import { FeedbackMeta } from '../utils/feedbackCatalog';
import { COMPONENT_MAP } from './ShowcaseCard';

interface ViewportOverlayHostProps {
  pinnedItems: FeedbackMeta[];
  onUnpin: (id: string) => void;
  onClearAll: () => void;
}

export function ViewportOverlayHost({
  pinnedItems,
  onUnpin,
  onClearAll,
}: ViewportOverlayHostProps) {
  if (pinnedItems.length === 0) return null;

  const topBanners = pinnedItems.filter((item) => item.placement === 'Top Banner');
  const bottomRight = pinnedItems.filter((item) => item.placement === 'Bottom-Right');
  const topRight = pinnedItems.filter((item) => item.placement === 'Top-Right');
  const bottomCenter = pinnedItems.filter((item) => item.placement === 'Bottom-Center');
  const bottomBar = pinnedItems.filter((item) => item.placement === 'Bottom Bar');
  const centered = pinnedItems.filter((item) => item.placement === 'Centered');

  return (
    <>
      {topBanners.length > 0 && (
        <div
          data-testid="viewport-top-banners"
          className="fixed top-0 inset-x-0 z-50 flex flex-col gap-1 shadow-md"
        >
          {topBanners.map((meta) => {
            const Comp = COMPONENT_MAP[meta.componentName];
            return (
              <div key={meta.id} className="relative bg-white">
                <Comp />
                <button
                  type="button"
                  onClick={() => onUnpin(meta.id)}
                  aria-label={`Unpin ${meta.componentName} from viewport`}
                  className="fixed right-3 top-2 z-50 hidden"
                />
              </div>
            );
          })}
          <div className="flex items-center justify-end gap-2 bg-slate-900/95 px-4 py-1 text-[11px] text-slate-200">
            <span>Pinned Top Banner Preview</span>
            <button
              type="button"
              onClick={onClearAll}
              className="font-semibold text-white underline underline-offset-2 whitespace-nowrap shrink-0"
            >
              Clear Viewport Pins
            </button>
          </div>
        </div>
      )}

      {topRight.length > 0 && (
        <div
          data-testid="viewport-top-right"
          className="fixed top-20 right-5 z-50 flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-2.5"
        >
          {topRight.map((meta) => {
            const Comp = COMPONENT_MAP[meta.componentName];
            return (
              <div key={meta.id} className="relative">
                <Comp />
              </div>
            );
          })}
        </div>
      )}

      {bottomRight.length > 0 && (
        <div
          data-testid="viewport-bottom-right"
          className="fixed bottom-5 right-5 z-50 flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-2.5"
        >
          {bottomRight.map((meta) => {
            const Comp = COMPONENT_MAP[meta.componentName];
            return (
              <div key={meta.id} className="relative">
                <Comp />
              </div>
            );
          })}
        </div>
      )}

      {bottomCenter.length > 0 && (
        <div
          data-testid="viewport-bottom-center"
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2"
        >
          {bottomCenter.map((meta) => {
            const Comp = COMPONENT_MAP[meta.componentName];
            return (
              <div key={meta.id}>
                <Comp />
              </div>
            );
          })}
        </div>
      )}

      {bottomBar.length > 0 && (
        <div
          data-testid="viewport-bottom-bar"
          className="fixed bottom-0 inset-x-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm"
        >
          <div className="mx-auto max-w-5xl space-y-2">
            {bottomBar.map((meta) => {
              const Comp = COMPONENT_MAP[meta.componentName];
              return <Comp key={meta.id} />;
            })}
          </div>
        </div>
      )}

      {centered.length > 0 && (
        <div
          data-testid="viewport-centered"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-[1px]"
        >
          <div className="relative flex w-full max-w-md flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => centered.forEach((item) => onUnpin(item.id))}
              aria-label="Close centered viewport overlay"
              className="self-end inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm hover:bg-slate-50 whitespace-nowrap shrink-0"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Close Overlay
            </button>
            {centered.map((meta) => {
              const Comp = COMPONENT_MAP[meta.componentName];
              return <Comp key={meta.id} />;
            })}
          </div>
        </div>
      )}

      {topBanners.length === 0 && centered.length === 0 && (
        <button
          type="button"
          onClick={onClearAll}
          className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-lg hover:bg-slate-50 whitespace-nowrap shrink-0"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
          Clear {pinnedItems.length} Pinned Overlay{pinnedItems.length === 1 ? '' : 's'}
        </button>
      )}
    </>
  );
}
