export type ModalKind =
  | 'Confirmation'
  | 'Destructive'
  | 'Form'
  | 'Media'
  | 'Cookie Consent'
  | 'Announcement'
  | 'Settings'
  | 'Wizard'
  | 'Command Palette'
  | 'Slide-Over'
  | 'Alert Toast';

export type ModalLayout =
  | 'Centered Small'
  | 'Centered Medium'
  | 'Centered Large'
  | 'Right Slide-Over'
  | 'Bottom-Anchored Mobile'
  | 'Floating Banner / Toast';

export type StyleFamily =
  | 'Minimal'
  | 'Bold'
  | 'Dark'
  | 'Glass'
  | 'Warm Editorial';

export interface ModalSpec {
  id: number;
  exportName: string;
  title: string;
  summary: string;
  kind: ModalKind;
  layout: ModalLayout;
  styleFamily: StyleFamily;
  triggerLabel: string;
}

export const MODAL_SPECS: ModalSpec[] = [
  {
    id: 1,
    exportName: 'Modal1',
    title: 'Publish Production Release',
    summary: 'Pre-flight release confirmation with changelog verification toggle and explicit publish action.',
    kind: 'Confirmation',
    layout: 'Centered Small',
    styleFamily: 'Minimal',
    triggerLabel: 'Publish release',
  },
  {
    id: 2,
    exportName: 'Modal2',
    title: 'Delete Workspace Permanently',
    summary: 'Destructive confirmation gated by typing the exact workspace slug before deletion unlocks.',
    kind: 'Destructive',
    layout: 'Centered Small',
    styleFamily: 'Minimal',
    triggerLabel: 'Delete workspace',
  },
  {
    id: 3,
    exportName: 'Modal3',
    title: 'Create Team Account',
    summary: 'Vibrant signup dialog with real-time email validation, password strength meter, and role selector.',
    kind: 'Form',
    layout: 'Centered Medium',
    styleFamily: 'Bold',
    triggerLabel: 'Create account',
  },
  {
    id: 4,
    exportName: 'Modal4',
    title: 'Weekly Editorial Dispatch',
    summary: 'Warm editorial newsletter modal with Fraunces serif typography, topic preferences, and email form.',
    kind: 'Form',
    layout: 'Centered Medium',
    styleFamily: 'Warm Editorial',
    triggerLabel: 'Subscribe to dispatch',
  },
  {
    id: 5,
    exportName: 'Modal5',
    title: 'Product Experience Feedback',
    summary: 'Frosted glass feedback dialog anchoring as a bottom sheet on mobile and centered on desktop.',
    kind: 'Form',
    layout: 'Bottom-Anchored Mobile',
    styleFamily: 'Glass',
    triggerLabel: 'Share feedback',
  },
  {
    id: 6,
    exportName: 'Modal6',
    title: 'Architectural Vector Lightbox',
    summary: 'Full-featured dark image lightbox with inline SVG artwork slides, zoom toggle, and keyboard arrows.',
    kind: 'Media',
    layout: 'Centered Large',
    styleFamily: 'Dark',
    triggerLabel: 'Inspect gallery',
  },
  {
    id: 7,
    exportName: 'Modal7',
    title: 'Interactive Walkthrough Player',
    summary: 'Dark theater video dialog with custom interactive scrub timeline, play/pause, mute, and chapters.',
    kind: 'Media',
    layout: 'Centered Large',
    styleFamily: 'Dark',
    triggerLabel: 'Watch walkthrough',
  },
  {
    id: 8,
    exportName: 'Modal8',
    title: 'Cookie & Privacy Banner',
    summary: 'Bottom-anchored minimal cookie banner with expandable granular toggles for analytics and marketing.',
    kind: 'Cookie Consent',
    layout: 'Floating Banner / Toast',
    styleFamily: 'Minimal',
    triggerLabel: 'Manage cookies',
  },
  {
    id: 9,
    exportName: 'Modal9',
    title: 'Editorial Privacy Ledger',
    summary: 'Warm editorial cookie preference center that docks to the bottom edge on mobile screens.',
    kind: 'Cookie Consent',
    layout: 'Bottom-Anchored Mobile',
    styleFamily: 'Warm Editorial',
    triggerLabel: 'Review privacy ledger',
  },
  {
    id: 10,
    exportName: 'Modal10',
    title: 'Autumn Studio Launch Offer',
    summary: 'High-energy gradient announcement modal featuring geometric SVG art and one-click promo code copy.',
    kind: 'Announcement',
    layout: 'Centered Medium',
    styleFamily: 'Bold',
    triggerLabel: 'View launch offer',
  },
  {
    id: 11,
    exportName: 'Modal11',
    title: 'Release 4.2 Feature Spotlight',
    summary: 'Translucent glass changelog modal highlighting three new capabilities with interactive acknowledgment.',
    kind: 'Announcement',
    layout: 'Centered Large',
    styleFamily: 'Glass',
    triggerLabel: 'Explore release notes',
  },
  {
    id: 12,
    exportName: 'Modal12',
    title: 'Workspace Settings Panel',
    summary: 'Large minimal settings dialog with internal category tabs, accessible toggle switches, and save state.',
    kind: 'Settings',
    layout: 'Centered Large',
    styleFamily: 'Minimal',
    triggerLabel: 'Workspace settings',
  },
  {
    id: 13,
    exportName: 'Modal13',
    title: 'Audio & Studio Preferences',
    summary: 'Right-hand frosted glass slide-over drawer with live gain slider, low-latency switch, and shortcuts.',
    kind: 'Settings',
    layout: 'Right Slide-Over',
    styleFamily: 'Glass',
    triggerLabel: 'Studio preferences',
  },
  {
    id: 14,
    exportName: 'Modal14',
    title: 'Invoice & Dispatch Inspector',
    summary: 'Editorial right slide-over panel with tabular itemized figures, note entry, and approval action.',
    kind: 'Slide-Over',
    layout: 'Right Slide-Over',
    styleFamily: 'Warm Editorial',
    triggerLabel: 'Inspect invoice',
  },
  {
    id: 15,
    exportName: 'Modal15',
    title: 'Three-Step Project Setup Wizard',
    summary: 'Multi-step onboarding modal with live validation, stack cards, progress indicator, and launch summary.',
    kind: 'Wizard',
    layout: 'Centered Large',
    styleFamily: 'Bold',
    triggerLabel: 'Start setup wizard',
  },
  {
    id: 16,
    exportName: 'Modal16',
    title: 'Quick Action Command Palette',
    summary: 'Dark keyboard-driven command palette with live search filtering, arrow navigation, and instant run.',
    kind: 'Command Palette',
    layout: 'Centered Medium',
    styleFamily: 'Dark',
    triggerLabel: 'Open command palette',
  },
  {
    id: 17,
    exportName: 'Modal17',
    title: 'Revoke Production API Token',
    summary: 'Glass destructive confirmation dialog requiring explicit impact acknowledgment before revoking keys.',
    kind: 'Destructive',
    layout: 'Bottom-Anchored Mobile',
    styleFamily: 'Glass',
    triggerLabel: 'Revoke API token',
  },
  {
    id: 18,
    exportName: 'Modal18',
    title: 'Pro Plan Upgrade Checkout',
    summary: 'Bold right slide-over confirmation panel with billing cycle toggle, promo discount, and tabular total.',
    kind: 'Confirmation',
    layout: 'Right Slide-Over',
    styleFamily: 'Bold',
    triggerLabel: 'Upgrade workspace',
  },
  {
    id: 19,
    exportName: 'Modal19',
    title: 'Sync Interrupted Alert Dialog',
    summary: 'Dark floating alert-toast dialog anchored bottom-right with retry state simulation and dismiss action.',
    kind: 'Alert Toast',
    layout: 'Floating Banner / Toast',
    styleFamily: 'Dark',
    triggerLabel: 'Simulate sync alert',
  },
  {
    id: 20,
    exportName: 'Modal20',
    title: 'Archive Export Ready Notice',
    summary: 'Warm editorial floating alert-toast dialog with SVG crest, download progress state, and dismiss button.',
    kind: 'Alert Toast',
    layout: 'Floating Banner / Toast',
    styleFamily: 'Warm Editorial',
    triggerLabel: 'Show export ready',
  },
];

export const ALL_KINDS: ModalKind[] = [
  'Confirmation',
  'Destructive',
  'Form',
  'Media',
  'Cookie Consent',
  'Announcement',
  'Settings',
  'Wizard',
  'Command Palette',
  'Slide-Over',
  'Alert Toast',
];

export const ALL_STYLES: StyleFamily[] = [
  'Minimal',
  'Bold',
  'Dark',
  'Glass',
  'Warm Editorial',
];

export const ALL_LAYOUTS: ModalLayout[] = [
  'Centered Small',
  'Centered Medium',
  'Centered Large',
  'Right Slide-Over',
  'Bottom-Anchored Mobile',
  'Floating Banner / Toast',
];

export interface CatalogFilter {
  search: string;
  kind: ModalKind | 'All';
  styleFamily: StyleFamily | 'All';
  layout: ModalLayout | 'All';
}

export function filterModalSpecs(specs: ModalSpec[], filter: CatalogFilter): ModalSpec[] {
  const query = filter.search.trim().toLowerCase();
  return specs.filter((spec) => {
    if (filter.kind !== 'All' && spec.kind !== filter.kind) return false;
    if (filter.styleFamily !== 'All' && spec.styleFamily !== filter.styleFamily) return false;
    if (filter.layout !== 'All' && spec.layout !== filter.layout) return false;
    if (!query) return true;
    const haystack = `${spec.exportName} ${spec.title} ${spec.summary} ${spec.kind} ${spec.layout} ${spec.styleFamily}`.toLowerCase();
    return haystack.includes(query);
  });
}

export function countByStyleFamily(specs: ModalSpec[]): Record<StyleFamily, number> {
  return specs.reduce(
    (acc, spec) => {
      acc[spec.styleFamily] += 1;
      return acc;
    },
    {
      Minimal: 0,
      Bold: 0,
      Dark: 0,
      Glass: 0,
      'Warm Editorial': 0,
    } as Record<StyleFamily, number>,
  );
}
