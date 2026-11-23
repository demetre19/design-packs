export type FeedbackCategory =
  | 'All'
  | 'Toasts & Snackbars'
  | 'Banners & Announcements'
  | 'Forms & Connectivity'
  | 'Consent & Modals'
  | 'Progress & Skeletons'
  | 'Outcomes & Error States';

export type FeedbackPlacement =
  | 'All'
  | 'Bottom-Right'
  | 'Top-Right'
  | 'Top Banner'
  | 'Bottom Bar'
  | 'Bottom-Center'
  | 'Centered'
  | 'Inline';

export interface FeedbackMeta {
  id: string;
  componentName: `Feedback${number}`;
  number: number;
  title: string;
  category: Exclude<FeedbackCategory, 'All'>;
  placement: Exclude<FeedbackPlacement, 'All'>;
  ariaRole: string;
  dismissBehavior: string;
  summary: string;
  supportsViewportPin: boolean;
  codeSnippet: string;
}

export const FEEDBACK_CATEGORIES: FeedbackCategory[] = [
  'All',
  'Toasts & Snackbars',
  'Banners & Announcements',
  'Forms & Connectivity',
  'Consent & Modals',
  'Progress & Skeletons',
  'Outcomes & Error States',
];

export const FEEDBACK_PLACEMENTS: FeedbackPlacement[] = [
  'All',
  'Top Banner',
  'Bottom-Right',
  'Top-Right',
  'Bottom-Center',
  'Bottom Bar',
  'Centered',
  'Inline',
];

export interface WebhookFormValues {
  email: string;
  webhookUrl: string;
  secret: string;
}

export interface WebhookFormErrors {
  email?: string;
  webhookUrl?: string;
  secret?: string;
}

export function validateWebhookForm(values: WebhookFormValues): {
  valid: boolean;
  errors: WebhookFormErrors;
  errorList: Array<{ field: keyof WebhookFormValues; message: string }>;
} {
  const errors: WebhookFormErrors = {};
  const trimmedEmail = values.email.trim();
  const trimmedUrl = values.webhookUrl.trim();
  const trimmedSecret = values.secret.trim();

  if (!trimmedEmail) {
    errors.email = 'Billing contact email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Enter a valid email address (for example, ops@company.com).';
  }

  if (!trimmedUrl) {
    errors.webhookUrl = 'Webhook endpoint URL is required.';
  } else if (!/^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(trimmedUrl)) {
    errors.webhookUrl = 'Endpoint must use HTTPS with a valid public domain.';
  }

  if (!trimmedSecret) {
    errors.secret = 'Signing secret is required.';
  } else if (trimmedSecret.length < 12) {
    errors.secret = 'Signing secret must be at least 12 characters.';
  }

  const errorList = (Object.keys(errors) as Array<keyof WebhookFormValues>)
    .filter((k) => Boolean(errors[k]))
    .map((field) => ({ field, message: errors[field]! }));

  return {
    valid: errorList.length === 0,
    errors,
    errorList,
  };
}

export function formatTransferStats(percent: number, totalMb = 24.0): {
  clampedPercent: number;
  transferredMb: string;
  totalMbFormatted: string;
  etaText: string;
  phaseLabel: string;
} {
  const clampedPercent = Math.max(0, Math.min(100, Math.round(percent)));
  const transferred = (clampedPercent / 100) * totalMb;
  const remainingSeconds = Math.max(0, Math.ceil(((100 - clampedPercent) / 100) * 12));

  let phaseLabel = 'Preparing archive';
  if (clampedPercent > 0 && clampedPercent < 35) {
    phaseLabel = 'Compressing Parquet partitions';
  } else if (clampedPercent >= 35 && clampedPercent < 85) {
    phaseLabel = 'Uploading encrypted chunks';
  } else if (clampedPercent >= 85 && clampedPercent < 100) {
    phaseLabel = 'Verifying SHA-256 checksum';
  } else if (clampedPercent === 100) {
    phaseLabel = 'Export verified and ready';
  }

  return {
    clampedPercent,
    transferredMb: transferred.toFixed(1),
    totalMbFormatted: totalMb.toFixed(1),
    etaText: clampedPercent === 100 ? 'Completed' : `${remainingSeconds}s remaining`,
    phaseLabel,
  };
}

export const FEEDBACK_CATALOG: FeedbackMeta[] = [
  {
    id: 'feedback-1',
    componentName: 'Feedback1',
    number: 1,
    title: 'Success Toast with Action & Auto-Dismiss',
    category: 'Toasts & Snackbars',
    placement: 'Bottom-Right',
    ariaRole: 'role="status"',
    dismissBehavior: '5s auto-dismiss · pause on hover · close button',
    summary:
      'Bottom-right confirmation toast with a primary follow-up action, hover-pausable countdown bar, and instant replay.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback1() {
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [remainingMs, setRemainingMs] = useState(5000);
  // Auto-dismisses after 5000ms unless hovered; includes View Invoice & Close buttons.
  return visible ? (
    <div role="status" aria-live="polite" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Emerald status icon, title, action link, dismiss button, and countdown bar */}
    </div>
  ) : <button onClick={() => setVisible(true)}>Replay Toast</button>;
}`,
  },
  {
    id: 'feedback-2',
    componentName: 'Feedback2',
    number: 2,
    title: 'Persistent Error Toast with Recovery',
    category: 'Toasts & Snackbars',
    placement: 'Bottom-Right',
    ariaRole: 'role="alert"',
    dismissBehavior: 'Persistent until dismissed or resolved',
    summary:
      'High-contrast dark-slate error toast that stays pinned until the operator retries the failed sync or dismisses it.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback2() {
  const [status, setStatus] = useState<'error' | 'retrying' | 'resolved' | 'dismissed'>('error');
  return (
    <div role="alert" aria-live="assertive" className="bg-slate-900 text-white rounded-xl p-4 shadow-lg">
      {/* Error code HTTP 502, Retry Sync action, and Close button */}
    </div>
  );
}`,
  },
  {
    id: 'feedback-3',
    componentName: 'Feedback3',
    number: 3,
    title: 'Dismissable Warning & Info Toast Stack',
    category: 'Toasts & Snackbars',
    placement: 'Top-Right',
    ariaRole: 'role="status" / role="alert"',
    dismissBehavior: 'Manual close per item · stack reflow',
    summary:
      'Action-free notification stack pairing an amber storage warning with a sky-blue maintenance advisory.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback3() {
  const [items, setItems] = useState([
    { id: 'warn', tone: 'warning', title: 'Storage at 88% capacity' },
    { id: 'info', tone: 'info', title: 'Maintenance Sunday 02:00 UTC' },
  ]);
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item) => (
        <div key={item.id} role={item.tone === 'warning' ? 'alert' : 'status'}>...</div>
      ))}
    </div>
  );
}`,
  },
  {
    id: 'feedback-4',
    componentName: 'Feedback4',
    number: 4,
    title: 'Page-Level Inline Alert Banner',
    category: 'Banners & Announcements',
    placement: 'Top Banner',
    ariaRole: 'role="alert"',
    dismissBehavior: 'Manual dismiss · restore trigger',
    summary:
      'Full-width top page banner warning of an expiring TLS certificate with a direct renewal CTA and clean dismiss control.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback4() {
  const [open, setOpen] = useState(true);
  const [renewed, setRenewed] = useState(false);
  return open ? (
    <div role="alert" className="w-full border-b border-amber-200 bg-amber-50 px-4 py-3">
      {/* Expiring certificate notice + Renew action + Close */}
    </div>
  ) : <button onClick={() => setOpen(true)}>Show Page Banner</button>;
}`,
  },
  {
    id: 'feedback-5',
    componentName: 'Feedback5',
    number: 5,
    title: 'Section-Level Contextual Alert Banner',
    category: 'Banners & Announcements',
    placement: 'Inline',
    ariaRole: 'role="status"',
    dismissBehavior: 'Expandable details + manual close',
    summary:
      'Scoped advisory banner living inside a settings card explaining read-only billing locks with inline details disclosure.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback5() {
  const [visible, setVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  return visible ? (
    <div role="status" className="rounded-lg border border-sky-200 bg-sky-50/80 p-3.5">
      {/* Section-scoped read-only notice with expandable policy details */}
    </div>
  ) : null;
}`,
  },
  {
    id: 'feedback-6',
    componentName: 'Feedback6',
    number: 6,
    title: 'Product Release Announcement Bar',
    category: 'Banners & Announcements',
    placement: 'Top Banner',
    ariaRole: 'role="status"',
    dismissBehavior: 'Close button · persistent preference state',
    summary:
      'Crisp dark-ink announcement strip introducing a product release with inline changelog preview and dismiss action.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback6() {
  const [dismissed, setDismissed] = useState(false);
  return !dismissed ? (
    <div role="status" className="bg-slate-950 text-white px-4 py-2.5 flex items-center justify-between">
      {/* Release headline, Read Changelog toggle, Close X */}
    </div>
  ) : null;
}`,
  },
  {
    id: 'feedback-7',
    componentName: 'Feedback7',
    number: 7,
    title: 'Live Form Validation & Error Summary',
    category: 'Forms & Connectivity',
    placement: 'Inline',
    ariaRole: 'role="alert" + aria-describedby',
    dismissBehavior: 'Clears automatically as fields become valid',
    summary:
      'Interactive webhook configuration form with field-level inline errors, valid check confirmations, and a jump-to-field error summary.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback7() {
  const [values, setValues] = useState({ email: '', webhookUrl: '', secret: '' });
  const [submitted, setSubmitted] = useState(false);
  // Validates email, HTTPS URL, and 12+ char signing secret with accessible error summary
}`,
  },
  {
    id: 'feedback-8',
    componentName: 'Feedback8',
    number: 8,
    title: 'Confirmation Snackbar with Undo',
    category: 'Toasts & Snackbars',
    placement: 'Bottom-Center',
    ariaRole: 'role="status"',
    dismissBehavior: '6s auto-dismiss · Undo action restores item',
    summary:
      'Compact bottom-center charcoal snackbar confirming destructive batch archive with an instant working Undo action.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback8() {
  const [archivedCount, setArchivedCount] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(true);
  // Undo restores archived rows immediately; 6s timer auto-closes snackbar.
}`,
  },
  {
    id: 'feedback-9',
    componentName: 'Feedback9',
    number: 9,
    title: 'Cookie Consent Bar (Bottom Banner)',
    category: 'Consent & Modals',
    placement: 'Bottom Bar',
    ariaRole: 'role="region" + role="status"',
    dismissBehavior: 'Dismisses on Accept, Essential Only, or Save',
    summary:
      'Full-width bottom privacy consent bar with one-click Accept All, Essential Only, and inline preference toggles.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback9() {
  const [choice, setChoice] = useState<string | null>(null);
  const [manageOpen, setManageOpen] = useState(false);
  // Bottom docked consent bar with inline Analytics & Functional toggles
}`,
  },
  {
    id: 'feedback-10',
    componentName: 'Feedback10',
    number: 10,
    title: 'Cookie Consent Modal Variant',
    category: 'Consent & Modals',
    placement: 'Centered',
    ariaRole: 'role="dialog" aria-modal="true"',
    dismissBehavior: 'Closes on Save Preferences, Reject All, or Escape',
    summary:
      'Centered privacy preference modal with locked Necessary cookies, toggleable categories, and live saved status.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback10() {
  const [open, setOpen] = useState(true);
  const [prefs, setPrefs] = useState({ analytics: true, personalization: false });
  // Centered modal card with role="dialog" and explicit save/reject controls
}`,
  },
  {
    id: 'feedback-11',
    componentName: 'Feedback11',
    number: 11,
    title: 'Countdown Event Announcement Strip',
    category: 'Banners & Announcements',
    placement: 'Top Banner',
    ariaRole: 'role="status"',
    dismissBehavior: 'Dismissable · RSVP confirmation toggle',
    summary:
      'Top announcement strip with live tabular-numeral maintenance countdown and one-click reminder opt-in.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback11() {
  const [visible, setVisible] = useState(true);
  const [subscribed, setSubscribed] = useState(false);
  // Live tabular countdown + Notify Me confirmation + Close button
}`,
  },
  {
    id: 'feedback-12',
    componentName: 'Feedback12',
    number: 12,
    title: 'Offline & Reconnecting Network Indicator',
    category: 'Forms & Connectivity',
    placement: 'Centered',
    ariaRole: 'role="alert" / role="status"',
    dismissBehavior: 'Auto-hides 3s after connection is restored',
    summary:
      'Interactive connection state strip cycling Offline, Reconnecting with retry countdown, and auto-clearing Back Online notice.',
    supportsViewportPin: true,
    codeSnippet: `export function Feedback12() {
  const [networkState, setNetworkState] = useState<'offline' | 'reconnecting' | 'online'>('offline');
  // Simulates offline loss, automatic retry countdown, manual Retry Now, and restored confirmation
}`,
  },
  {
    id: 'feedback-13',
    componentName: 'Feedback13',
    number: 13,
    title: 'Determinate Progress Bar with ETA & Controls',
    category: 'Progress & Skeletons',
    placement: 'Inline',
    ariaRole: 'role="progressbar"',
    dismissBehavior: 'Pause, Resume, Cancel, or Restart transfer',
    summary:
      'File export progress monitor showing live percentage, megabyte throughput, phase labels, and working pause/cancel controls.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback13() {
  const [percent, setPercent] = useState(64);
  const [running, setRunning] = useState(true);
  return (
    <div role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      {/* Progress bar, phase label, MB/total, ETA, Pause/Restart */}
    </div>
  );
}`,
  },
  {
    id: 'feedback-14',
    componentName: 'Feedback14',
    number: 14,
    title: 'Labeled Spinners & Multi-Phase Busy States',
    category: 'Progress & Skeletons',
    placement: 'Centered',
    ariaRole: 'role="status"',
    dismissBehavior: 'Transitions cleanly to Ready / Complete',
    summary:
      'Three coordinated spinner patterns: a multi-step verification spinner, an inline submit button spinner, and a compact sync indicator.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback14() {
  const [phase, setPhase] = useState<'idle' | 'validating' | 'indexing' | 'done'>('validating');
  return (
    <div role="status" aria-live="polite">
      {/* Smooth SVG ring spinner paired with dynamic phase text */}
    </div>
  );
}`,
  },
  {
    id: 'feedback-15',
    componentName: 'Feedback15',
    number: 15,
    title: 'Card Grid Skeleton Loader',
    category: 'Progress & Skeletons',
    placement: 'Inline',
    ariaRole: 'role="status" aria-busy',
    dismissBehavior: 'Toggles between skeleton & loaded card',
    summary:
      'Geometry-matched project card skeleton with shimmer blocks and an interactive toggle to preview the exact loaded layout.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback15() {
  const [loading, setLoading] = useState(true);
  return (
    <div role="status" aria-busy={loading} aria-label={loading ? 'Loading project card' : 'Project card loaded'}>
      {/* Matched-height skeleton lines vs populated card */}
    </div>
  );
}`,
  },
  {
    id: 'feedback-16',
    componentName: 'Feedback16',
    number: 16,
    title: 'Activity List Skeleton Loader',
    category: 'Progress & Skeletons',
    placement: 'Inline',
    ariaRole: 'role="status" aria-busy',
    dismissBehavior: 'Toggles between 4-row skeleton & live feed',
    summary:
      'Audit feed list skeleton preserving avatar, two-line copy, and right-aligned tabular timestamp geometry.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback16() {
  const [loading, setLoading] = useState(true);
  return (
    <div role="status" aria-busy={loading}>
      {/* 4 structured skeleton list rows with Reload Feed toggle */}
    </div>
  );
}`,
  },
  {
    id: 'feedback-17',
    componentName: 'Feedback17',
    number: 17,
    title: 'Data Table Skeleton Loader',
    category: 'Progress & Skeletons',
    placement: 'Inline',
    ariaRole: 'role="status" aria-busy',
    dismissBehavior: 'Toggles between skeleton rows & tabular data',
    summary:
      'Billing ledger table keeping persistent column headers while skeleton cells match exact 40px row height.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback17() {
  const [loading, setLoading] = useState(true);
  return (
    <div role="status" aria-busy={loading}>
      {/* Persistent table headers + 4 matched-height skeleton rows */}
    </div>
  );
}`,
  },
  {
    id: 'feedback-18',
    componentName: 'Feedback18',
    number: 18,
    title: 'Animated Success Checkmark Confirmation',
    category: 'Outcomes & Error States',
    placement: 'Centered',
    ariaRole: 'role="status"',
    dismissBehavior: 'Replay animation & receipt download feedback',
    summary:
      'Centered payment confirmation card with an SVG stroke-draw checkmark, tabular transaction receipt details, and replay trigger.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback18() {
  const [animationKey, setAnimationKey] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  return (
    <div role="status" aria-live="polite" className="text-center">
      {/* Animated SVG checkmark + TXN-89412 summary + Replay */}
    </div>
  );
}`,
  },
  {
    id: 'feedback-19',
    componentName: 'Feedback19',
    number: 19,
    title: 'Inline Panel Fetch Error with Recovery',
    category: 'Outcomes & Error States',
    placement: 'Inline',
    ariaRole: 'role="alert"',
    dismissBehavior: 'Recovers to populated metrics on Retry',
    summary:
      'In-layout error state inside an analytics panel with HTTP 503 diagnostics, expandable trace details, and live retry recovery.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback19() {
  const [state, setState] = useState<'error' | 'retrying' | 'loaded'>('error');
  return state !== 'loaded' ? (
    <div role="alert" className="rounded-lg border border-red-200 bg-red-50/60 p-5">
      {/* Error message, expandable error code, Retry Fetch button */}
    </div>
  ) : (
    <div>{/* Populated metrics view with Simulate Failure button */}</div>
  );
}`,
  },
  {
    id: 'feedback-20',
    componentName: 'Feedback20',
    number: 20,
    title: 'Inline Integration Auth Error & Reconnect',
    category: 'Outcomes & Error States',
    placement: 'Centered',
    ariaRole: 'role="alert"',
    dismissBehavior: 'Clears upon re-authentication or dismiss',
    summary:
      'Centered layout error block for expired OAuth credentials with an interactive Reconnect flow and clear permission scope info.',
    supportsViewportPin: false,
    codeSnippet: `export function Feedback20() {
  const [authState, setAuthState] = useState<'expired' | 'connecting' | 'connected'>('expired');
  return (
    <div role="alert" className="rounded-lg border border-slate-200 bg-white p-6 text-center">
      {/* Expired token warning, Reconnect OAuth action, connected state */}
    </div>
  );
}`,
  },
];

export function filterFeedbackCatalog(
  items: FeedbackMeta[],
  filters: {
    category?: FeedbackCategory;
    placement?: FeedbackPlacement;
    query?: string;
  }
): FeedbackMeta[] {
  const category = filters.category ?? 'All';
  const placement = filters.placement ?? 'All';
  const normalizedQuery = (filters.query ?? '').trim().toLowerCase();

  return items.filter((item) => {
    if (category !== 'All' && item.category !== category) {
      return false;
    }
    if (placement !== 'All' && item.placement !== placement) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    const haystack = [
      item.componentName,
      item.title,
      item.category,
      item.placement,
      item.ariaRole,
      item.summary,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

export function getCategoryCounts(items: FeedbackMeta[]): Record<FeedbackCategory, number> {
  const counts: Record<FeedbackCategory, number> = {
    All: items.length,
    'Toasts & Snackbars': 0,
    'Banners & Announcements': 0,
    'Forms & Connectivity': 0,
    'Consent & Modals': 0,
    'Progress & Skeletons': 0,
    'Outcomes & Error States': 0,
  };
  for (const item of items) {
    counts[item.category] += 1;
  }
  return counts;
}
