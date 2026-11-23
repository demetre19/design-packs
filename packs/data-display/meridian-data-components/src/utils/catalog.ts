export type ComponentCategory =
  | 'all'
  | 'tables'
  | 'metrics'
  | 'feeds'
  | 'time'
  | 'progress';

export type ComponentStyle = 'all' | 'minimal' | 'dark' | 'colourful';
export type ComponentDensity = 'all' | 'compact' | 'roomy';

export interface CatalogMeta {
  id: string;
  number: number;
  title: string;
  archetype: string;
  category: Exclude<ComponentCategory, 'all'>;
  style: Exclude<ComponentStyle, 'all'>;
  density: Exclude<ComponentDensity, 'all'>;
  summary: string;
  keywords: string[];
}

export const CATALOG_ITEMS: CatalogMeta[] = [
  {
    id: 'Data1',
    number: 1,
    title: 'Invoice Ledger Table',
    archetype: 'Sortable Data Table',
    category: 'tables',
    style: 'minimal',
    density: 'compact',
    summary: 'Multi-column sortable accounts receivable ledger with checkbox selection, status pills, and inline row actions.',
    keywords: ['table', 'sort', 'invoice', 'pills', 'checkbox', 'actions'],
  },
  {
    id: 'Data2',
    number: 2,
    title: 'Service Incident & Deployment Table',
    archetype: 'Sortable Data Table',
    category: 'tables',
    style: 'dark',
    density: 'compact',
    summary: 'High-contrast dark operations table with latency sorting, active row inspection, and quick mitigation actions.',
    keywords: ['table', 'dark', 'sort', 'incident', 'deployment', 'latency'],
  },
  {
    id: 'Data3',
    number: 3,
    title: 'Executive Revenue KPI Deck',
    archetype: 'Stats / KPI Cards',
    category: 'metrics',
    style: 'minimal',
    density: 'roomy',
    summary: 'Four-column financial KPI cards with period switching, target pacing bars, and selectable card focus.',
    keywords: ['kpi', 'stats', 'revenue', 'mrr', 'cards', 'minimal'],
  },
  {
    id: 'Data4',
    number: 4,
    title: 'Compute Cluster Telemetry Cards',
    archetype: 'Stats / KPI Cards',
    category: 'metrics',
    style: 'dark',
    density: 'compact',
    summary: 'Dark infrastructure KPI strip with region switcher, utilization thresholds, and tabular resource figures.',
    keywords: ['kpi', 'dark', 'telemetry', 'cluster', 'cpu', 'memory'],
  },
  {
    id: 'Data5',
    number: 5,
    title: 'Campaign Acquisition KPI Tiles',
    archetype: 'Stats / KPI Cards',
    category: 'metrics',
    style: 'colourful',
    density: 'roomy',
    summary: 'Colourful high-contrast campaign metrics with channel breakdown and quarter-over-quarter comparisons.',
    keywords: ['kpi', 'colourful', 'marketing', 'campaign', 'conversion'],
  },
  {
    id: 'Data6',
    number: 6,
    title: 'Product Funnel Sparkline Rows',
    archetype: 'Dashboard Rows',
    category: 'metrics',
    style: 'minimal',
    density: 'roomy',
    summary: 'Metric rows pairing big tabular numbers, interactive SVG sparklines, and signed timeframe deltas.',
    keywords: ['sparkline', 'dashboard', 'rows', 'big number', 'delta', 'funnel'],
  },
  {
    id: 'Data7',
    number: 7,
    title: 'Treasury Liquidity Sparkline Rows',
    archetype: 'Dashboard Rows',
    category: 'metrics',
    style: 'dark',
    density: 'compact',
    summary: 'Dark financial watchlist rows with sortable balances, SVG sparklines, and expandable currency allocation.',
    keywords: ['sparkline', 'dark', 'treasury', 'balance', 'watchlist'],
  },
  {
    id: 'Data8',
    number: 8,
    title: 'Platform Release & Changelog Feed',
    archetype: 'List Feed',
    category: 'feeds',
    style: 'minimal',
    density: 'roomy',
    summary: 'Editorial release feed with category filter tabs, bookmark state, and expandable engineering notes.',
    keywords: ['feed', 'list', 'changelog', 'releases', 'bookmark'],
  },
  {
    id: 'Data9',
    number: 9,
    title: 'Customer Escalation & Support Feed',
    archetype: 'List Feed',
    category: 'feeds',
    style: 'colourful',
    density: 'compact',
    summary: 'Colour-coded omnichannel support queue with priority filter and one-click triage acknowledgement.',
    keywords: ['feed', 'colourful', 'support', 'inbox', 'triage'],
  },
  {
    id: 'Data10',
    number: 10,
    title: 'Migration Milestone Timeline',
    archetype: 'Timeline View',
    category: 'time',
    style: 'minimal',
    density: 'roomy',
    summary: 'Chronological vertical milestone timeline with status filtering and expandable deliverable checklists.',
    keywords: ['timeline', 'milestones', 'roadmap', 'minimal'],
  },
  {
    id: 'Data11',
    number: 11,
    title: 'Incident Post-Mortem Timeline',
    archetype: 'Timeline View',
    category: 'time',
    style: 'dark',
    density: 'compact',
    summary: 'Dark UTC-stamped response timeline with severity markers, phase filtering, and responder attribution.',
    keywords: ['timeline', 'dark', 'incident', 'utc', 'postmortem'],
  },
  {
    id: 'Data12',
    number: 12,
    title: 'Security & Compliance Audit Log',
    archetype: 'Activity Log',
    category: 'feeds',
    style: 'minimal',
    density: 'compact',
    summary: 'Dense semantic audit stream with actor search, action-type filtering, and payload inspection selection.',
    keywords: ['activity', 'log', 'audit', 'security', 'compliance'],
  },
  {
    id: 'Data13',
    number: 13,
    title: 'Git & CI Build Activity Log',
    archetype: 'Activity Log',
    category: 'feeds',
    style: 'dark',
    density: 'compact',
    summary: 'Dark monospace pipeline log with branch filtering, commit SHA copy feedback, and build status labels.',
    keywords: ['activity', 'log', 'dark', 'git', 'ci', 'commits'],
  },
  {
    id: 'Data14',
    number: 14,
    title: 'Weekly Executive Schedule Strip',
    archetype: 'Calendar Strip',
    category: 'time',
    style: 'minimal',
    density: 'roomy',
    summary: '7-day selectable calendar strip with week navigation and synchronized daily agenda list below.',
    keywords: ['calendar', 'strip', 'schedule', 'week', 'agenda'],
  },
  {
    id: 'Data15',
    number: 15,
    title: 'Sprint Cadence & Streak Strip',
    archetype: 'Calendar Strip',
    category: 'time',
    style: 'colourful',
    density: 'compact',
    summary: 'Colourful 14-day intensity calendar strip with selectable day detail and check-in completion toggles.',
    keywords: ['calendar', 'strip', 'colourful', 'streak', 'sprint'],
  },
  {
    id: 'Data16',
    number: 16,
    title: 'Workspace Onboarding Progress Tracker',
    archetype: 'Progress Tracker',
    category: 'progress',
    style: 'minimal',
    density: 'roomy',
    summary: 'Multi-step setup tracker with ARIA progress bar, interactive step completion toggles, and step guidance.',
    keywords: ['progress', 'tracker', 'onboarding', 'steps', 'checklist'],
  },
  {
    id: 'Data17',
    number: 17,
    title: 'Quarterly OKR Progress Tracker',
    archetype: 'Progress Tracker',
    category: 'progress',
    style: 'colourful',
    density: 'roomy',
    summary: 'Colourful objective tracker with team filtering, confidence indicators, and expandable key results.',
    keywords: ['progress', 'tracker', 'colourful', 'okr', 'goals'],
  },
  {
    id: 'Data18',
    number: 18,
    title: 'Compute Tier Comparison Table',
    archetype: 'Comparison Table',
    category: 'tables',
    style: 'minimal',
    density: 'roomy',
    summary: 'Semantic plan matrix with monthly/annual billing toggle, highlighted tier selection, and concrete quota specs.',
    keywords: ['comparison', 'table', 'pricing', 'tiers', 'billing'],
  },
  {
    id: 'Data19',
    number: 19,
    title: 'Engineering Velocity Leaderboard',
    archetype: 'Leaderboard Rows',
    category: 'progress',
    style: 'colourful',
    density: 'compact',
    summary: 'Ranked contributor rows with metric sorting, rank delta arrows, proportional bars, and active selection.',
    keywords: ['leaderboard', 'rows', 'colourful', 'ranking', 'velocity'],
  },
  {
    id: 'Data20',
    number: 20,
    title: 'Design System Asset File List',
    archetype: 'File List',
    category: 'tables',
    style: 'minimal',
    density: 'compact',
    summary: 'Sortable repository file list with multi-select checkboxes, star toggles, file metadata, and quick actions.',
    keywords: ['file', 'list', 'sortable', 'documents', 'assets'],
  },
];

export interface CatalogFilter {
  category: ComponentCategory;
  style: ComponentStyle;
  density: ComponentDensity;
  query: string;
}

export function filterCatalog(items: CatalogMeta[], filter: CatalogFilter): CatalogMeta[] {
  const normalizedQuery = filter.query.trim().toLowerCase();

  return items.filter((item) => {
    if (filter.category !== 'all' && item.category !== filter.category) {
      return false;
    }
    if (filter.style !== 'all' && item.style !== filter.style) {
      return false;
    }
    if (filter.density !== 'all' && item.density !== filter.density) {
      return false;
    }
    if (normalizedQuery.length > 0) {
      const haystack = [
        item.id,
        item.title,
        item.archetype,
        item.summary,
        item.style,
        item.density,
        ...item.keywords,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    }
    return true;
  });
}

export function buildSparklinePolyline(
  values: number[],
  width: number,
  height: number,
  padding = 3
): { points: string; coords: Array<{ x: number; y: number; value: number }> } {
  if (values.length === 0) {
    return { points: '', coords: [] };
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const usableW = Math.max(1, width - padding * 2);
  const usableH = Math.max(1, height - padding * 2);

  const coords = values.map((value, idx) => {
    const x =
      values.length === 1
        ? width / 2
        : padding + (idx / (values.length - 1)) * usableW;
    const y = padding + usableH - ((value - min) / span) * usableH;
    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      value,
    };
  });

  const points = coords.map((c) => `${c.x},${c.y}`).join(' ');
  return { points, coords };
}
