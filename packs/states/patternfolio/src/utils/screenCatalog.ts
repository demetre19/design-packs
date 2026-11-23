export type ScreenCategory = 'auth' | 'error';

export type AuthVariantTag =
  | 'Split-Screen'
  | 'Centered Card'
  | 'Minimal'
  | 'Magic Link'
  | 'Social-First'
  | 'Testimonial'
  | 'Dark Glass'
  | 'Stepped'
  | 'Enterprise SSO'
  | 'Split Plan';

export type ErrorStyleTag = 'Typography-led' | 'Illustration SVG' | 'Minimal';

export interface ScreenEntry {
  id: string;
  code: string;
  title: string;
  category: ScreenCategory;
  archetype: AuthVariantTag | ErrorStyleTag;
  summary: string;
  highlights: string[];
}

export const SCREEN_CATALOG: ScreenEntry[] = [
  {
    id: 'Auth1',
    code: 'Auth 01',
    title: 'Split-Screen Brand Panel',
    category: 'auth',
    archetype: 'Split-Screen',
    summary: 'Architectural two-column sign-in pairing a dark brand blueprint panel with a crisp form.',
    highlights: ['Brand SVG motif', 'Show/hide password', 'Remember session'],
  },
  {
    id: 'Auth2',
    code: 'Auth 02',
    title: 'Centered Signup Card',
    category: 'auth',
    archetype: 'Centered Card',
    summary: 'Balanced single-elevation signup card with live 4-segment password strength meter.',
    highlights: ['Strength meter', 'Terms consent', 'Accessible validation'],
  },
  {
    id: 'Auth3',
    code: 'Auth 03',
    title: 'Minimal Single-Column',
    category: 'auth',
    archetype: 'Minimal',
    summary: 'Editorial Swiss sign-in built on underline inputs, serif headlines, and generous whitespace.',
    highlights: ['Underline inputs', 'Fraunces display', 'Zero card chrome'],
  },
  {
    id: 'Auth4',
    code: 'Auth 04',
    title: 'Email-Only Magic Link',
    category: 'auth',
    archetype: 'Magic Link',
    summary: 'Passwordless login with inbox confirmation state and resend workflow.',
    highlights: ['Single email field', 'Inbox sent state', 'Resend trigger'],
  },
  {
    id: 'Auth5',
    code: 'Auth 05',
    title: 'Social-Login Prominent',
    category: 'auth',
    archetype: 'Social-First',
    summary: 'OAuth-first authentication featuring Google, GitHub, Apple, and Microsoft above email fallback.',
    highlights: ['4 inline SVG providers', 'Instant OAuth feedback', 'Email fallback'],
  },
  {
    id: 'Auth6',
    code: 'Auth 06',
    title: 'Two-Column with Testimonial',
    category: 'auth',
    archetype: 'Testimonial',
    summary: 'Warm editorial split layout pairing an attributed customer outcome quote with trial signup.',
    highlights: ['Attributed quote', 'Monogram SVG portrait', 'Trial creation'],
  },
  {
    id: 'Auth7',
    code: 'Auth 07',
    title: 'Dark Glass Card',
    category: 'auth',
    archetype: 'Dark Glass',
    summary: 'Frosted obsidian glass card with optical dark-mode contrast and optional 2FA code toggle.',
    highlights: ['Backdrop blur glass', '2FA code toggle', 'Optical dark contrast'],
  },
  {
    id: 'Auth8',
    code: 'Auth 08',
    title: 'Stepped Onboarding Signup',
    category: 'auth',
    archetype: 'Stepped',
    summary: 'Three-step interactive signup wizard covering credentials, workspace setup, and invites.',
    highlights: ['3 validated steps', 'Role & team sizing', 'Back/Next persistence'],
  },
  {
    id: 'Auth9',
    code: 'Auth 09',
    title: 'Enterprise SSO & Passkey',
    category: 'auth',
    archetype: 'Enterprise SSO',
    summary: 'B2B authentication switching cleanly between SAML domain discovery and Passkey verification.',
    highlights: ['SAML workspace slug', 'Passkey mode', 'Tab switcher'],
  },
  {
    id: 'Auth10',
    code: 'Auth 10',
    title: 'Split Signup with Plan Summary',
    category: 'auth',
    archetype: 'Split Plan',
    summary: 'Account creation paired with an itemized Pro Trial capability breakdown and password match check.',
    highlights: ['Password confirmation', 'Role selector', 'Plan summary'],
  },
  {
    id: 'Error1',
    code: 'Error 01',
    title: '404 Page Not Found',
    category: 'error',
    archetype: 'Typography-led',
    summary: 'Monumental serif 404 display numeral with hairline rules and curated recovery links.',
    highlights: ['Monumental 404 type', 'Quick route links', 'Return home CTA'],
  },
  {
    id: 'Error2',
    code: 'Error 02',
    title: '500 Internal Server Error',
    category: 'error',
    archetype: 'Illustration SVG',
    summary: 'Geometric server-rack fault SVG paired with tabular incident ID and simulated retry.',
    highlights: ['Server rack SVG', 'Tabular incident ID', 'Retry simulation'],
  },
  {
    id: 'Error3',
    code: 'Error 03',
    title: 'Empty Search Results',
    category: 'error',
    archetype: 'Minimal',
    summary: 'Interactive zero-results state with live query editing and clickable suggested queries.',
    highlights: ['Live query field', 'Suggested queries', 'Clear filter action'],
  },
  {
    id: 'Error4',
    code: 'Error 04',
    title: 'Empty Shopping Cart',
    category: 'error',
    archetype: 'Illustration SVG',
    summary: 'Bespoke tote/parcel SVG illustration with interactive quick-add preview and catalog CTA.',
    highlights: ['Parcel tote SVG', 'Sample item preview', 'Browse catalog CTA'],
  },
  {
    id: 'Error5',
    code: 'Error 05',
    title: 'No Notifications',
    category: 'error',
    archetype: 'Minimal',
    summary: 'Calm inbox-zero empty state with interactive preference toggle and refresh action.',
    highlights: ['Inbox-zero tone', 'Preferences panel', 'Refresh state'],
  },
  {
    id: 'Error6',
    code: 'Error 06',
    title: 'Offline Connection State',
    category: 'error',
    archetype: 'Illustration SVG',
    summary: 'Disconnected node-gap SVG explaining local draft preservation with live reconnect check.',
    highlights: ['Node-gap SVG', 'Draft sync note', 'Reconnect check'],
  },
  {
    id: 'Error7',
    code: 'Error 07',
    title: 'Scheduled Maintenance',
    category: 'error',
    archetype: 'Typography-led',
    summary: 'Swiss typographic maintenance notice with tabular countdown timer and status alerts.',
    highlights: ['Tabular countdown', 'Maintenance window', 'Alert subscription'],
  },
  {
    id: 'Error8',
    code: 'Error 08',
    title: 'Access Denied (403)',
    category: 'error',
    archetype: 'Minimal',
    summary: 'Clear role mismatch explanation with one-click access request confirmation.',
    highlights: ['Shield lock SVG', 'Role comparison', 'Request access flow'],
  },
  {
    id: 'Error9',
    code: 'Error 09',
    title: 'Coming Soon Launch',
    category: 'error',
    archetype: 'Typography-led',
    summary: 'Dark editorial release preview with milestone details and working waitlist signup.',
    highlights: ['Editorial dark canvas', 'Milestone preview', 'Waitlist signup'],
  },
  {
    id: 'Error10',
    code: 'Error 10',
    title: 'Request Timeout (504)',
    category: 'error',
    archetype: 'Illustration SVG',
    summary: 'Interrupted hourglass SVG with calm upstream guidance and live retry indicator.',
    highlights: ['Hourglass arc SVG', 'Safe data assurance', 'Live retry state'],
  },
];

export type CatalogFilter = 'all' | ScreenCategory;

export function filterScreens(
  screens: ScreenEntry[],
  category: CatalogFilter,
  query: string
): ScreenEntry[] {
  const normalized = query.trim().toLowerCase();
  return screens.filter((screen) => {
    const matchesCategory = category === 'all' || screen.category === category;
    if (!matchesCategory) return false;
    if (!normalized) return true;
    return (
      screen.id.toLowerCase().includes(normalized) ||
      screen.code.toLowerCase().includes(normalized) ||
      screen.title.toLowerCase().includes(normalized) ||
      screen.archetype.toLowerCase().includes(normalized) ||
      screen.summary.toLowerCase().includes(normalized)
    );
  });
}

export function resolveScreenFromQuery(search: string, screens: ScreenEntry[] = SCREEN_CATALOG): string {
  const params = new URLSearchParams(search);
  const requested = params.get('screen');
  if (!requested) return screens[0]?.id ?? 'Auth1';
  const match = screens.find((s) => s.id.toLowerCase() === requested.toLowerCase());
  return match ? match.id : screens[0]?.id ?? 'Auth1';
}

export function getAdjacentScreenId(
  currentId: string,
  direction: 'prev' | 'next',
  screens: ScreenEntry[] = SCREEN_CATALOG
): string {
  if (screens.length === 0) return currentId;
  const idx = screens.findIndex((s) => s.id === currentId);
  if (idx === -1) return screens[0].id;
  const nextIdx =
    direction === 'next'
      ? (idx + 1) % screens.length
      : (idx - 1 + screens.length) % screens.length;
  return screens[nextIdx].id;
}
