export type PricingTopology =
  | '3-tier-featured'
  | '2-tier-toggle'
  | 'comparison-table'
  | 'single-hero'
  | 'slider-calculator'
  | 'usage-limits'
  | 'pricing-with-faq'
  | 'text-only'
  | 'badged-cards'
  | 'enterprise-split';

export type PricingStyle = 'minimal' | 'dark' | 'light-warm' | 'bold';

export interface PricingMeta {
  id: number;
  componentName: string;
  brand: string;
  domain: string;
  topology: PricingTopology;
  topologyLabel: string;
  style: PricingStyle;
  styleLabel: string;
  summary: string;
}

export const TOPOLOGY_LABELS: Record<PricingTopology, string> = {
  '3-tier-featured': '3-Tier Featured Middle',
  '2-tier-toggle': '2-Tier Monthly / Annual',
  'comparison-table': 'Comparison Table',
  'single-hero': 'Single Hero Price',
  'slider-calculator': 'Slider / Calculator',
  'usage-limits': 'Usage Limits',
  'pricing-with-faq': 'Pricing + FAQ Strip',
  'text-only': 'Minimal Text-Only',
  'badged-cards': 'Badged Cards',
  'enterprise-split': 'Enterprise Split-Card',
};

export const STYLE_LABELS: Record<PricingStyle, string> = {
  minimal: 'Minimal / Professional',
  dark: 'Dark',
  'light-warm': 'Light-Warm',
  bold: 'Bold / Colourful',
};

export interface FilterOptions {
  topology: PricingTopology | 'all';
  style: PricingStyle | 'all';
  query: string;
}

export function filterPricingSections<T extends PricingMeta>(
  items: T[],
  options: FilterOptions
): T[] {
  const normalizedQuery = options.query.trim().toLowerCase();

  return items.filter((item) => {
    if (options.topology !== 'all' && item.topology !== options.topology) {
      return false;
    }
    if (options.style !== 'all' && item.style !== options.style) {
      return false;
    }
    if (normalizedQuery.length > 0) {
      const searchable = [
        item.componentName,
        `#${item.id}`,
        item.brand,
        item.domain,
        item.topologyLabel,
        item.styleLabel,
        item.summary,
      ]
        .join(' ')
        .toLowerCase();
      return searchable.includes(normalizedQuery);
    }
    return true;
  });
}

export function calculateAnnualSavings(
  monthlyPrice: number,
  annualMonthlyPrice: number
): { annualTotal: number; savingsDollars: number; savingsPercent: number } {
  const safeMonthly = Math.max(0, monthlyPrice);
  const safeAnnualMonthly = Math.max(0, annualMonthlyPrice);
  const annualTotal = safeAnnualMonthly * 12;
  const fullYearAtMonthly = safeMonthly * 12;
  const savingsDollars = Math.max(0, fullYearAtMonthly - annualTotal);
  const savingsPercent =
    fullYearAtMonthly > 0
      ? Math.round((savingsDollars / fullYearAtMonthly) * 100)
      : 0;

  return { annualTotal, savingsDollars, savingsPercent };
}

export function calculateVolumeEmailCost(emailsInThousands: number): {
  monthlyCost: number;
  ratePerThousand: number;
  tierName: string;
} {
  const k = Math.max(10, Math.min(1000, emailsInThousands));
  if (k <= 50) {
    return { monthlyCost: Math.round(k * 0.9), ratePerThousand: 0.9, tierName: 'Starter Volume' };
  }
  if (k <= 250) {
    return { monthlyCost: Math.round(k * 0.72), ratePerThousand: 0.72, tierName: 'Growth Volume' };
  }
  return { monthlyCost: Math.round(k * 0.54), ratePerThousand: 0.54, tierName: 'Scale Volume' };
}

export function calculateGpuClusterCost(
  gpuCount: number,
  hoursPerMonth: number,
  regionMultiplier: number
): { hourlyRate: number; monthlyTotal: number } {
  const gpus = Math.max(1, Math.min(32, gpuCount));
  const hours = Math.max(40, Math.min(730, hoursPerMonth));
  const volumeDiscount = gpus >= 16 ? 0.85 : gpus >= 8 ? 0.92 : 1;
  const hourlyRate = Number((gpus * 2.15 * regionMultiplier * volumeDiscount).toFixed(2));
  const monthlyTotal = Math.round(hourlyRate * hours);
  return { hourlyRate, monthlyTotal };
}

export function calculatePayrollCost(
  employees: number,
  contractors: number
): { baseFee: number; employeeFee: number; contractorFee: number; totalMonthly: number } {
  const safeEmployees = Math.max(1, employees);
  const safeContractors = Math.max(0, contractors);
  const baseFee = 45;
  const employeeFee = safeEmployees * 8;
  const contractorFee = safeContractors * 5;
  return {
    baseFee,
    employeeFee,
    contractorFee,
    totalMonthly: baseFee + employeeFee + contractorFee,
  };
}

export function calculateStreamBandwidthCost(
  monthlyActiveUsersK: number,
  includeDvr: boolean,
  includeAnalytics: boolean
): { baseCost: number; addOnsCost: number; totalMonthly: number } {
  const users = Math.max(5, monthlyActiveUsersK);
  const baseCost = 39 + Math.round(users * 1.4);
  const addOnsCost = (includeDvr ? 49 : 0) + (includeAnalytics ? 29 : 0);
  return {
    baseCost,
    addOnsCost,
    totalMonthly: baseCost + addOnsCost,
  };
}

export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`;
}
