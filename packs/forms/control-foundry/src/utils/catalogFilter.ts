import type { ControlCategory, ControlSpec, FilterCategory } from '../types/controls';

export const CONTROL_SPECS: ControlSpec[] = [
  {
    id: 'Btn1',
    index: '01',
    title: 'Primary, Secondary, Ghost & Destructive Set',
    category: 'core',
    categoryLabel: 'Core Actions',
    summary: 'Full four-tier action hierarchy with hover, focus-visible ring, and toggleable disabled states in an editorial publish bar.',
    ariaNote: 'Native <button>, disabled attribute, focus-visible ring',
  },
  {
    id: 'Btn2',
    index: '02',
    title: 'Icon-Only Toolbar Buttons',
    category: 'core',
    categoryLabel: 'Core Actions',
    summary: 'Compact document toolbar actions with explicit accessible labels, hover tooltips, and persistent toggle states.',
    ariaNote: 'Unique aria-label & aria-pressed on icon triggers',
  },
  {
    id: 'Btn3',
    index: '03',
    title: 'Segmented Button Group',
    category: 'core',
    categoryLabel: 'Core Actions',
    summary: 'Mutually exclusive timeframe selector switching live telemetry metrics across Day, Week, Month, and Quarter.',
    ariaNote: 'role="group" with aria-pressed active state',
  },
  {
    id: 'Btn4',
    index: '04',
    title: 'Split Button with Dropdown',
    category: 'core',
    categoryLabel: 'Core Actions',
    summary: 'Primary commit action joined with a chevron menu to switch execution mode before triggering.',
    ariaNote: 'aria-haspopup="menu" & aria-expanded on trigger',
  },
  {
    id: 'Btn5',
    index: '05',
    title: 'Floating Action Button (FAB)',
    category: 'core',
    categoryLabel: 'Core Actions',
    summary: 'Viewport-anchored quick-compose trigger inside a mobile frame with expandable speed-dial sub-actions.',
    ariaNote: 'aria-expanded speed-dial menu with Escape support',
  },
  {
    id: 'Btn6',
    index: '06',
    title: 'Inline Spinner Loading Button',
    category: 'feedback',
    categoryLabel: 'Feedback & Variants',
    summary: 'Async submission control with inline rotating spinner, locked label geometry, and verified completion state.',
    ariaNote: 'aria-busy & aria-live status announcement',
  },
  {
    id: 'Btn7',
    index: '07',
    title: 'Progress Fill Loading Button',
    category: 'feedback',
    categoryLabel: 'Feedback & Variants',
    summary: 'Determinate upload control with a smooth left-to-right fill bar, tabular percentage readout, and cancel support.',
    ariaNote: 'role="progressbar" value tracking & aria-busy',
  },
  {
    id: 'Btn8',
    index: '08',
    title: 'Directional Gradient Buttons',
    category: 'feedback',
    categoryLabel: 'Feedback & Variants',
    summary: 'High-contrast satin gradient call-to-action controls with subtle elevation shift in a plan upgrade card.',
    ariaNote: 'WCAG AA foreground contrast & focus-visible offset',
  },
  {
    id: 'Btn9',
    index: '09',
    title: 'Hairline Outline Buttons',
    category: 'feedback',
    categoryLabel: 'Feedback & Variants',
    summary: 'Crisp bordered secondary and cautionary outline controls for permission and webhook management.',
    ariaNote: 'Semantic border + text contrast without color-only cues',
  },
  {
    id: 'Btn10',
    index: '10',
    title: 'Pill vs Square Radius Variants',
    category: 'feedback',
    categoryLabel: 'Feedback & Variants',
    summary: 'Interactive geometry comparator switching button silhouettes between architectural square, rounded, and full pill.',
    ariaNote: 'aria-pressed radius selector & uniform hit targets',
  },
  {
    id: 'Btn11',
    index: '11',
    title: 'Buttons with Live Badge Count',
    category: 'utilities',
    categoryLabel: 'State & Disclosure',
    summary: 'Action buttons displaying tabular numeric counters for pending reviews, inbox items, and queued exports.',
    ariaNote: 'Descriptive aria-label including live count & tabular-nums',
  },
  {
    id: 'Btn12',
    index: '12',
    title: 'Multi-State Toggle Buttons',
    category: 'utilities',
    categoryLabel: 'State & Disclosure',
    summary: 'Formatting control cluster toggling bold, italic, underline, and code styling on a live editable preview.',
    ariaNote: 'aria-pressed boolean state on each toggle button',
  },
  {
    id: 'Btn13',
    index: '13',
    title: 'Copy-to-Clipboard Button',
    category: 'utilities',
    categoryLabel: 'State & Disclosure',
    summary: 'One-click CLI snippet copy button with instant icon swap, success confirmation label, and timed reset.',
    ariaNote: 'aria-live="polite" clipboard confirmation feedback',
  },
  {
    id: 'Btn14',
    index: '14',
    title: 'Back-to-Top Scroll Trigger',
    category: 'utilities',
    categoryLabel: 'State & Disclosure',
    summary: 'Contextual scroll-return button that reveals once the reader scrolls down inside a long specification panel.',
    ariaNote: 'Smooth scroll reset & explicit aria-label',
  },
  {
    id: 'Btn15',
    index: '15',
    title: 'Expand / Collapse Disclosure Triggers',
    category: 'utilities',
    categoryLabel: 'State & Disclosure',
    summary: 'Interactive accordion rows revealing release notes and security policies with rotating directional chevrons.',
    ariaNote: 'aria-expanded & aria-controls linked to region id',
  },
  {
    id: 'Btn16',
    index: '16',
    title: 'External Link with Icon Indicator',
    category: 'links',
    categoryLabel: 'Links & Confirmation',
    summary: 'Reference documentation links pairing target="_blank" semantics with a nudging diagonal external arrow.',
    ariaNote: 'rel="noopener noreferrer" & screen-reader new-tab notice',
  },
  {
    id: 'Btn17',
    index: '17',
    title: 'Animated Underline Link',
    category: 'links',
    categoryLabel: 'Links & Confirmation',
    summary: 'Navigation directory links featuring a smooth origin-left scale-x underline glide on hover and keyboard focus.',
    ariaNote: 'Compositor transform scaleX & focus-visible outline',
  },
  {
    id: 'Btn18',
    index: '18',
    title: 'Visited State Link',
    category: 'links',
    categoryLabel: 'Links & Confirmation',
    summary: 'Archive reading list demonstrating distinct unvisited vs visited link states with interactive visit tracking.',
    ariaNote: 'Native :visited CSS paired with explicit visited badge',
  },
  {
    id: 'Btn19',
    index: '19',
    title: 'Inline Text Links in Paragraph Context',
    category: 'links',
    categoryLabel: 'Links & Confirmation',
    summary: 'Long-form editorial prose with inline reference links using measured underline offset and footnote preview.',
    ariaNote: 'Accessible contrast & underline differentiation inside prose',
  },
  {
    id: 'Btn20',
    index: '20',
    title: 'Two-Step Confirmation Button',
    category: 'links',
    categoryLabel: 'Links & Confirmation',
    summary: 'High-stakes destructive safeguard requiring an explicit second confirmation click or automatic timeout cancel.',
    ariaNote: 'aria-live state transition preventing accidental clicks',
  },
];

export const CATEGORY_LABELS: Record<FilterCategory, string> = {
  all: 'All Controls',
  core: 'Core Actions',
  feedback: 'Feedback & Variants',
  utilities: 'State & Disclosure',
  links: 'Links & Confirmation',
};

export function filterControlSpecs(
  specs: ControlSpec[],
  category: FilterCategory,
  query: string
): ControlSpec[] {
  const normalized = query.trim().toLowerCase();
  return specs.filter((spec) => {
    const matchesCategory = category === 'all' || spec.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalized) {
      return true;
    }
    return (
      spec.id.toLowerCase().includes(normalized) ||
      spec.title.toLowerCase().includes(normalized) ||
      spec.summary.toLowerCase().includes(normalized) ||
      spec.categoryLabel.toLowerCase().includes(normalized) ||
      spec.ariaNote.toLowerCase().includes(normalized)
    );
  });
}

export function countByCategory(
  specs: ControlSpec[]
): Record<FilterCategory, number> {
  const counts: Record<FilterCategory, number> = {
    all: specs.length,
    core: 0,
    feedback: 0,
    utilities: 0,
    links: 0,
  };

  for (const spec of specs) {
    counts[spec.category as ControlCategory] += 1;
  }

  return counts;
}

export function clampProgress(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(100, Math.max(0, Math.round(value)));
}

export function formatBadgeCount(count: number, cap = 99): string {
  const safe = Math.max(0, Math.floor(count));
  if (safe > cap) {
    return `${cap}+`;
  }
  return String(safe);
}
