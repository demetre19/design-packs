import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateAnnualSavings,
  calculateGpuClusterCost,
  calculatePayrollCost,
  calculateStreamBandwidthCost,
  calculateVolumeEmailCost,
  filterPricingSections,
  formatCurrency,
  type PricingMeta,
} from './pricingHelpers';

const sampleMeta: PricingMeta[] = [
  {
    id: 1,
    componentName: 'Pricing1',
    brand: 'MetricFlow',
    domain: 'Product Analytics',
    topology: '3-tier-featured',
    topologyLabel: '3-Tier Featured Middle',
    style: 'minimal',
    styleLabel: 'Minimal / Professional',
    summary: 'Clean 3-tier SaaS pricing with elevated middle plan.',
  },
  {
    id: 2,
    componentName: 'Pricing2',
    brand: 'Obsidian Cloud',
    domain: 'Cloud Compute',
    topology: '3-tier-featured',
    topologyLabel: '3-Tier Featured Middle',
    style: 'dark',
    styleLabel: 'Dark',
    summary: 'Dark slate cloud compute tiers.',
  },
  {
    id: 17,
    componentName: 'Pricing17',
    brand: 'MailRelay',
    domain: 'Transactional Email',
    topology: 'slider-calculator',
    topologyLabel: 'Slider / Calculator',
    style: 'minimal',
    styleLabel: 'Minimal / Professional',
    summary: 'Interactive email volume slider.',
  },
];

test('filterPricingSections filters by topology, style, and query', () => {
  assert.equal(
    filterPricingSections(sampleMeta, { topology: 'all', style: 'all', query: '' }).length,
    3
  );
  assert.equal(
    filterPricingSections(sampleMeta, { topology: '3-tier-featured', style: 'dark', query: '' })[0]
      ?.componentName,
    'Pricing2'
  );
  assert.equal(
    filterPricingSections(sampleMeta, { topology: 'all', style: 'all', query: 'mailrelay' })[0]
      ?.id,
    17
  );
  assert.equal(
    filterPricingSections(sampleMeta, { topology: 'all', style: 'all', query: 'nonexistent' })
      .length,
    0
  );
});

test('calculateAnnualSavings computes annual total, dollar savings, and percentage', () => {
  const res = calculateAnnualSavings(50, 40);
  assert.equal(res.annualTotal, 480);
  assert.equal(res.savingsDollars, 120);
  assert.equal(res.savingsPercent, 20);
});

test('calculateVolumeEmailCost applies volume tiers accurately', () => {
  assert.deepEqual(calculateVolumeEmailCost(50), {
    monthlyCost: 45,
    ratePerThousand: 0.9,
    tierName: 'Starter Volume',
  });
  assert.deepEqual(calculateVolumeEmailCost(200), {
    monthlyCost: 144,
    ratePerThousand: 0.72,
    tierName: 'Growth Volume',
  });
  assert.deepEqual(calculateVolumeEmailCost(500), {
    monthlyCost: 270,
    ratePerThousand: 0.54,
    tierName: 'Scale Volume',
  });
});

test('calculateGpuClusterCost applies GPU volume discounts and hours', () => {
  const small = calculateGpuClusterCost(2, 100, 1);
  assert.equal(small.hourlyRate, 4.3);
  assert.equal(small.monthlyTotal, 430);

  const large = calculateGpuClusterCost(16, 100, 1);
  assert.equal(large.hourlyRate, 29.24);
  assert.equal(large.monthlyTotal, 2924);
});

test('calculatePayrollCost and calculateStreamBandwidthCost compute totals', () => {
  assert.deepEqual(calculatePayrollCost(10, 4), {
    baseFee: 45,
    employeeFee: 80,
    contractorFee: 20,
    totalMonthly: 145,
  });

  assert.deepEqual(calculateStreamBandwidthCost(50, true, false), {
    baseCost: 109,
    addOnsCost: 49,
    totalMonthly: 158,
  });
});

test('formatCurrency formats USD with comma grouping', () => {
  assert.equal(formatCurrency(2490), '$2,490');
});
