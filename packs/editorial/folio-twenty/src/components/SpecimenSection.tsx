import { useState } from 'react';
import { ShieldCheck, Zap, Compass, Terminal } from 'lucide-react';
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
  Card13,
  Card14,
  Card15,
  Card16,
  Card17,
  Card18,
  Card19,
  Card20,
} from './cards';
import {
  type CardSpec,
  type ViewMode,
  resolveVisibleContexts,
} from '../utils/cardCatalog';

interface SpecimenSectionProps {
  spec: CardSpec;
  globalViewMode: ViewMode;
}

function renderStandalone(id: string) {
  switch (id) {
    case 'card-1':
      return <Card1 />;
    case 'card-2':
      return <Card2 />;
    case 'card-3':
      return <Card3 />;
    case 'card-4':
      return <Card4 />;
    case 'card-5':
      return <Card5 />;
    case 'card-6':
      return <Card6 />;
    case 'card-7':
      return <Card7 />;
    case 'card-8':
      return <Card8 />;
    case 'card-9':
      return <Card9 />;
    case 'card-10':
      return <Card10 />;
    case 'card-11':
      return <Card11 />;
    case 'card-12':
      return <Card12 />;
    case 'card-13':
      return <Card13 />;
    case 'card-14':
      return <Card14 />;
    case 'card-15':
      return <Card15 />;
    case 'card-16':
      return <Card16 />;
    case 'card-17':
      return <Card17 />;
    case 'card-18':
      return <Card18 />;
    case 'card-19':
      return <Card19 />;
    case 'card-20':
      return <Card20 />;
    default:
      return null;
  }
}

function renderCollectionWrapper(id: string) {
  switch (id) {
    case 'card-1':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card1 />
          <Card1
            category="Material Craft"
            date="Oct 22, 2026"
            isoDate="2026-10-22"
            readTime="5 min read"
            title="Kiln Temperature Curves in Matte Ash Glazes"
            excerpt="Tracking oxygen reduction intervals across small-batch ceramic vessels fired in gas and wood kilns."
            authorName="Clara Lindholm"
            authorRole="Craft Correspondent"
            imageSrc="/src/assets/images/article_ceramics_editorial_1795319252529.jpg"
            imageAlt="Hand-thrown stoneware vessels on natural linen table"
          />
          <Card1
            category="Industrial Design"
            date="Nov 04, 2026"
            isoDate="2026-11-04"
            readTime="7 min read"
            title="Machined Aluminum Tolerances for Desk Luminaires"
            excerpt="Why counterweight friction hinges outperform spring-loaded arms in long-term studio use."
            authorName="Marcus Lin"
            authorRole="Hardware Analyst"
            imageSrc="/src/assets/images/product_monolith_lamp_1795319252333.jpg"
            imageAlt="Brushed anodized aluminum desk lamp on honed limestone"
          />
        </div>
      );

    case 'card-2':
      return (
        <div className="space-y-5 max-w-4xl">
          <Card2 />
          <Card2
            issue="Issue No. 18 · Spatial Light"
            date="Oct 19, 2026"
            isoDate="2026-10-19"
            readTime="8 min essay"
            title="Acoustic Plaster and Timber Baffles in Quiet Civic Halls"
            excerpt="Balancing reverberation times below 0.7 seconds inside poured-concrete museum atriums using concealed cedar slats."
            author="Henrik Vestergaard"
            location="Oslo"
            imageSrc="/src/assets/images/article_architecture_vertical_1795319252279.jpg"
            imageAlt="Concrete and oak museum hall with skylight shadows"
          />
        </div>
      );

    case 'card-3':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card3 />
          <Card3
            name="Tomasz Kowalski"
            role="Systems Architect"
            discipline="Runtime & Tooling"
            city="Warsaw"
            bio="Designs deterministic build pipelines, edge storage compilers, and low-latency collaborative canvases."
            email="tomasz@atelier-nord.ch"
            avatarSrc="/src/assets/images/portrait_lead_engineer_1795319252370.jpg"
          />
          <Card3
            name="Helena Brandt"
            role="Editorial Lead"
            discipline="Print & Monograph"
            city="Basel"
            bio="Directs archival book production, exhibition catalogs, and variable grid specifications for museums."
            email="helena@atelier-nord.ch"
            avatarSrc="/src/assets/images/portrait_creative_director_1795319252339.jpg"
          />
        </div>
      );

    case 'card-4':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card4 />
          <Card4
            name="Nadia Alverez"
            role="Staff Design Technologist"
            team="Component Architecture"
            tenureYears={5}
            shippedSystems={11}
            focus="Cross-platform design tokens, accessible keyboard grids, and high-contrast optical calibration."
            avatarSrc="/src/assets/images/portrait_creative_director_1795319252339.jpg"
          />
          <Card4
            name="Devon Brooks"
            role="Principal Infrastructure Lead"
            team="Telemetry & Storage"
            tenureYears={7}
            shippedSystems={19}
            focus="Time-series compression, streaming query caches, and regional failover verification."
            avatarSrc="/src/assets/images/portrait_lead_engineer_1795319252370.jpg"
          />
        </div>
      );

    case 'card-5':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card5 />
          <Card5
            quote="Consolidating twelve disparate marketing templates into one typographic system shortened our campaign launch cycle from three weeks to four days."
            outcomeMetric="4x Faster Launches"
            outcomeContext="Across 18 regional campaigns"
            authorName="Julian Mercer"
            authorTitle="Head of Brand"
            organization="Northbound Press"
          />
          <Card5
            quote="Accessible keyboard navigation and predictable tabular alignments eliminated every audit blocker before our enterprise renewal."
            outcomeMetric="100% Audit Pass"
            outcomeContext="WCAG 2.2 AA verification"
            authorName="Sora Takahashi"
            authorTitle="Director of Engineering"
            organization="Kyoto Grid Labs"
          />
        </div>
      );

    case 'card-6':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card6 />
          <Card6
            quote="Our members immediately noticed the snappier schedule cards—event signups jumped the very same afternoon we switched."
            outcome="+62% workshop signups in 14 days"
            authorName="Leo Lindqvist"
            authorHandle="@leoworkshop"
            role="Organizer, Nordic Craft"
            initialHelpfulCount={31}
            accentBg="bg-[#DBEAFE]"
          />
          <Card6
            quote="Zero clutter, crisp pricing math, and interactive counters that actually work without loading external widgets."
            outcome="$18,400 kit revenue week one"
            authorName="Maya Chen"
            authorHandle="@mayamakes"
            role="Co-founder, Paper & Ink"
            initialHelpfulCount={19}
            accentBg="bg-[#FCE7F3]"
          />
        </div>
      );

    case 'card-7':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card7 />
          <Card7
            indexLabel="02. Verification"
            title="WCAG AA Contrast Guardrails"
            summary="Foreground and surface pairings are calibrated to exceed 4.5:1 body contrast across light and paper grounds."
            specDetail="Includes focus-visible 2px high-contrast rings and non-color-only state indicators for every button."
            metricLabel="4.5:1 min · Focus rings"
            Icon={ShieldCheck}
          />
          <Card7
            indexLabel="03. Composition"
            title="Fluid Container Proportions"
            summary="Every block scales cleanly from a 320px narrow column to a balanced 3-up desktop showcase without clipping."
            specDetail="Flex-column outer shells pin footers to a shared horizontal baseline when adjacent titles wrap."
            metricLabel="320px–1440px · Flex-col"
            Icon={Compass}
          />
        </div>
      );

    case 'card-8':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card8 />
          <Card8
            category="Query Plane"
            title="Zero-Copy Index Streaming"
            description="Streams incremental B-tree deltas directly to client memory with bounded garbage collection pauses."
            p95Latency="8.2 ms"
            throughput="68k req/s"
            Icon={Zap}
          />
          <Card8
            category="Execution Sandbox"
            title="Isolated Worker Snapshots"
            description="Spins up pre-warmed micro-isolates per tenant request with deterministic memory ceilings."
            p95Latency="4.9 ms"
            throughput="94k req/s"
            Icon={Terminal}
          />
        </div>
      );

    case 'card-9':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card9 />
          <Card9
            collection="Edition 05 · Deskware"
            name="Stoneware Desk Tray"
            subtitle="Unglazed stoneware · Cork underside · Hand-turned in Kyoto"
            imageSrc="/src/assets/images/article_ceramics_editorial_1795319252529.jpg"
            imageAlt="Handcrafted stoneware ceramic vessels on linen"
            finishes={[
              { label: 'Raw Charcoal', price: 95, swatchClass: 'bg-zinc-800' },
              { label: 'Speckled Ash', price: 105, swatchClass: 'bg-stone-300' },
              { label: 'Terracotta', price: 110, swatchClass: 'bg-amber-700' },
            ]}
          />
          <Card9
            collection="Edition 06 · Print"
            name="Daylight Monograph Vol. II"
            subtitle="240pp Swiss-bound linen hardcover · 170gsm Munken Polar"
            imageSrc="/src/assets/images/article_architecture_vertical_1795319252279.jpg"
            imageAlt="Architectural daylight study book spread"
            finishes={[
              { label: 'Linen Grey', price: 68, swatchClass: 'bg-zinc-400' },
              { label: 'Deep Slate', price: 78, swatchClass: 'bg-slate-800' },
              { label: 'Signed Slipcase', price: 120, swatchClass: 'bg-stone-900' },
            ]}
          />
        </div>
      );

    case 'card-10':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card10 />
          <Card10
            edition="Studio Pack"
            title="Component Kit Pro"
            description="Full React 19 + Tailwind v4 source repository with unit-tested catalog utilities and SVG artwork."
            unitPrice={79}
            unitLabel="seat"
            deliverables={[
              '20 self-contained TypeScript components',
              'Full Figma & CSS variable token maps',
              'Priority Discord engineering channel',
            ]}
            headerBg="bg-[#FEF3C7]"
          />
          <Card10
            edition="Education Tier"
            title="Classroom Lab Bundle"
            description="Interactive layout primitives built for design cohorts, bootcamps, and university studios."
            unitPrice={24}
            unitLabel="student"
            deliverables={[
              'Accessible HTML5 semantic templates',
              'Instructor grading rubric examples',
              '12-month academic workspace access',
            ]}
            headerBg="bg-[#DCFCE7]"
          />
        </div>
      );

    case 'card-11':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card11 />
          <Card11
            label="Weekly Active Teams"
            value="4,892"
            deltaText="+12.6% vs Oct"
            trend="up"
            periodNote="Verified workspace logins"
            points={[18, 22, 24, 23, 29, 31, 35, 39, 44]}
          />
          <Card11
            label="Build Failure Rate"
            value="0.42%"
            deltaText="-0.19% vs Oct"
            trend="down"
            periodNote="Across 19,200 CI runs"
            points={[38, 35, 31, 32, 27, 25, 22, 20, 17]}
          />
        </div>
      );

    case 'card-12':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card12 />
          <Card12
            title="API Compute Units"
            primaryValue="148.2M"
            unitLabel="Rolling 30-day total"
            rows={[
              { label: 'GraphQL Edge', value: '82.1M', sharePercent: 55 },
              { label: 'REST Batch', value: '44.0M', sharePercent: 30 },
              { label: 'Webhooks', value: '22.1M', sharePercent: 15 },
            ]}
            bars={[55, 60, 58, 64, 70, 72, 68, 79, 85, 83, 91, 95]}
          />
          <Card12
            title="Indexed Documents"
            primaryValue="9.64M"
            unitLabel="Active cluster shards"
            rows={[
              { label: 'Catalog Records', value: '5.12M', sharePercent: 53 },
              { label: 'User Profiles', value: '2.94M', sharePercent: 31 },
              { label: 'Audit Logs', value: '1.58M', sharePercent: 16 },
            ]}
            bars={[32, 36, 41, 45, 48, 53, 59, 64, 71, 78, 86, 94]}
          />
        </div>
      );

    case 'card-13':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card13 />
          <Card13
            plateNumber="Plate V"
            title="Meridian Axis Study"
            medium="Gradient & Vector Lithograph"
            year="2026"
            curatorialNote="Explores the intersection of vertical architectural columns and horizon planes under low-angle northern light."
            gradientClass="from-[#0F172A] via-[#1E293B] to-[#94A3B8]"
            accentStroke="#F8FAFC"
          />
          <Card13
            plateNumber="Plate VI"
            title="Terrace Harmonic No. 2"
            medium="SVG Constructivist Study"
            year="2026"
            curatorialNote="Composed with strict integer ratios derived from modular stone courtyard pavers."
            gradientClass="from-[#292524] via-[#78716C] to-[#E7E5E4]"
            accentStroke="#FEF3C7"
          />
        </div>
      );

    case 'card-14':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card14 initialPalette={0} />
          <Card14
            editionCode="Print 14 / 50"
            title="Geometric Counterpoint"
            artist="Atelier Kobo"
            initialPalette={1}
          />
          <Card14
            editionCode="Print 27 / 50"
            title="Archway & Sun Disc"
            artist="Press Collective"
            initialPalette={2}
          />
        </div>
      );

    case 'card-15':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card15 />
          <Card15
            name="Mateo Lindqvist"
            handle="@mateolindqvist"
            location="Stockholm, Sweden"
            bio="Industrial designer crafting anodized aluminum hardware, rotary encoders, and tactile desk tools."
            worksCount={24}
            initialFollowers={890}
            avatarSrc="/src/assets/images/portrait_lead_engineer_1795319252370.jpg"
          />
          <Card15
            name="Nadia Alverez"
            handle="@nadiaalverez"
            location="Zurich, Switzerland"
            bio="Type systems director authoring variable serif families and multi-script architectural signage."
            worksCount={51}
            initialFollowers={2180}
            avatarSrc="/src/assets/images/portrait_creative_director_1795319252339.jpg"
          />
        </div>
      );

    case 'card-16':
      return (
        <div className="space-y-4 max-w-4xl">
          <Card16 />
          <Card16
            title="Senior Distributed Storage Engineer"
            department="Infrastructure"
            location="New York or Remote"
            arrangement="Full-time"
            compensation="$185k – $215k"
            summary="Build deterministic snapshot compaction and multi-region failover protocols for high-throughput customer workspaces."
            requirements={[
              '5+ years in Rust, Go, or C++ storage engines',
              'Experience debugging Raft or Paxos consensus edge cases',
            ]}
          />
          <Card16
            title="Editorial Product Designer"
            department="Brand & Publishing"
            location="London (Hybrid)"
            arrangement="Full-time"
            compensation="£95k – £115k"
            summary="Shape long-form reading layouts, interactive specimen tables, and typographic guidelines across our web publications."
            requirements={[
              'Portfolio demonstrating refined editorial typography',
              'Fluency prototyping directly in React and Tailwind CSS',
            ]}
          />
        </div>
      );

    case 'card-17':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card17 />
          <Card17
            month="DEC"
            day="11"
            isoDate="2026-12-11T17:00"
            timeRange="17:00 – 19:00 CET"
            title="Swiss Grid Systems in Modern Web Layouts"
            speaker="With Helena Brandt"
            venue="Kunsthalle Studio B, Basel"
            format="Live Colloquium"
          />
          <Card17
            month="JAN"
            day="09"
            isoDate="2027-01-09T19:00"
            timeRange="19:00 – 21:00 EST"
            title="Hardware Ergonomics & Tactile Feedback"
            speaker="With Marcus Lin"
            venue="Cooper Union Hall, New York"
            format="Evening Panel"
          />
        </div>
      );

    case 'card-18':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card18 />
          <Card18
            dateLabel="Sun, Dec 06 · 1:00 PM"
            isoDate="2026-12-06T13:00"
            title="Modular Bookbinding & Linen Covers"
            host="Hosted by Folio Bindery"
            location="Mission District Studio, SF"
            totalSeats={16}
            initialRemaining={4}
            bgClass="bg-[#FEF3C7]"
          />
          <Card18
            dateLabel="Thu, Dec 17 · 6:30 PM"
            isoDate="2026-12-17T18:30"
            title="Generative SVG Pattern Coding Night"
            host="Hosted by Grid Club"
            location="Shoreditch Loft 4, London"
            totalSeats={30}
            initialRemaining={11}
            bgClass="bg-[#DBEAFE]"
          />
        </div>
      );

    case 'card-19':
      return (
        <div className="space-y-6 max-w-4xl">
          <Card19 />
          <Card19
            releaseLabel="October Release"
            date="Oct 18, 2026"
            isoDate="2026-10-18"
            headline="Tabular Numerals & Dark Optical Contrast Tuning"
            summary="Refined font-weight compensation across dark charcoal cards and introduced deterministic sparkline scaling."
            items={[
              {
                kind: 'Added',
                text: 'Automatic SVG fallback surfaces when external or local media assets fail to decode.',
              },
              {
                kind: 'Improved',
                text: 'Aligned price and metric columns with font-mono tabular-nums across all product blocks.',
              },
              {
                kind: 'Fixed',
                text: 'Eliminated layout shift when toggling disclosure panels inside compact mobile viewports.',
              },
            ]}
          />
        </div>
      );

    case 'card-20':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card20 />
          <Card20
            heading="Accessibility & Keyboard Support"
            subtitle="Built-in WAI-ARIA compliance details."
            entries={[
              {
                question: 'Do interactive cards use native button elements?',
                answer:
                  'Yes. Every disclosure, bookmark, seat counter, and finish swatch uses a native button with visible focus rings.',
              },
              {
                question: 'Is prefers-reduced-motion respected?',
                answer:
                  'All transform and opacity transitions collapse immediately when the user enables reduced motion in their OS.',
              },
              {
                question: 'Are stats accessible to screen readers?',
                answer:
                  'Metric cards use semantic dl/dt/dd markup and pair trend arrows with explicit text labels.',
              },
            ]}
          />
          <Card20
            heading="Customization & Styling"
            subtitle="Tailoring surfaces, typography, and grids."
            entries={[
              {
                question: 'How do I switch a card to a custom brand accent?',
                answer:
                  'Replace the button or highlight utility classes directly in the card file—no global CSS overrides needed.',
              },
              {
                question: 'Can I mix standalone and 3-up grids?',
                answer:
                  'Yes. Passing custom props allows each instance in a 3-column grid to render unique copy and imagery.',
              },
              {
                question: 'Why are image-free gallery tiles pure SVG?',
                answer:
                  'Vector tiles render sharply at any DPI without network latency or broken image states.',
              },
            ]}
          />
        </div>
      );

    default:
      return null;
  }
}

export function SpecimenSection({ spec, globalViewMode }: SpecimenSectionProps) {
  const [localOverride, setLocalOverride] = useState<ViewMode | null>(null);
  const effectiveMode = localOverride ?? globalViewMode;
  const { showStandalone, showCollectionWrapper, collectionLabel } =
    resolveVisibleContexts(effectiveMode, spec.supports3Up);

  return (
    <section
      id={spec.id}
      aria-labelledby={`${spec.id}-heading`}
      className="py-10 border-t border-zinc-200/90 scroll-mt-12"
    >
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
            <span className="font-mono font-semibold text-zinc-900">
              {spec.number}. {spec.componentName}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-zinc-700">{spec.cardType}</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize">{spec.style} style</span>
            <span aria-hidden="true">·</span>
            <span>{spec.contextNote}</span>
          </div>

          <h2
            id={`${spec.id}-heading`}
            className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 text-balance"
          >
            {spec.title}
          </h2>

          <p className="mt-1.5 text-sm text-zinc-600">{spec.description}</p>
        </div>

        <div
          className="inline-flex items-center p-1 bg-zinc-200/70 rounded-lg self-start lg:self-end shrink-0"
          role="group"
          aria-label={`Grid context for ${spec.componentName}`}
        >
          {(['both', 'standalone', 'grid'] as const).map((mode) => {
            const isActive = effectiveMode === mode;
            const label =
              mode === 'both'
                ? 'Both Contexts'
                : mode === 'standalone'
                  ? 'Standalone'
                  : spec.supports3Up
                    ? '3-Up Grid'
                    : 'Stacked Rows';
            return (
              <button
                key={mode}
                type="button"
                onClick={() => setLocalOverride(mode === globalViewMode ? null : mode)}
                aria-pressed={isActive}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 ${
                  isActive
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </header>

      <div className="space-y-10">
        {showStandalone && (
          <div>
            <p className="text-xs font-medium text-zinc-500 mb-3">
              Standalone Card Context
            </p>
            <div className={spec.standaloneWidthClass}>
              {renderStandalone(spec.id)}
            </div>
          </div>
        )}

        {showCollectionWrapper && (
          <div>
            <p className="text-xs font-medium text-zinc-500 mb-3">
              {collectionLabel}
            </p>
            {renderCollectionWrapper(spec.id)}
          </div>
        )}
      </div>
    </section>
  );
}
