import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { IMAGES } from '../data/assets'
import { CORRIDOR_DATA, CORRIDOR_TABS, type CorridorKey } from '../data/corridors'

const DIVISIONS = [
  {
    id: '01',
    tag: 'Bulk & Structural',
    title: 'Industrial Commodities & Metals',
    desc: 'Primary and secondary raw materials, rebar, structural steel, aluminum billets, petrochemical polymers, and heavy manufacturing inputs.',
    img: IMAGES.metals,
    rows: [
      ['Incoterms', 'CIF, FOB, CFR, DDP'],
      ['Min Order Quantity', '500 MT Standard'],
    ],
    cta: 'Procure Commodity →',
  },
  {
    id: '02',
    tag: 'FCL / LCL / Breakbulk',
    title: 'Global Ocean & Multimodal Freight',
    desc: 'Full-vessel chartering, dry-bulk liners, deep-water port operations, ISO containerized shipments, and trans-Eurasian rail connections.',
    img: IMAGES.heroPort,
    rows: [
      ['Container Types', "20' / 40' / OT / Reefer"],
      ['Port Terminals', '120+ Direct Gateways'],
    ],
    cta: 'Book Vessel Slot →',
  },
  {
    id: '03',
    tag: 'Time-Definite Express',
    title: 'Air Cargo & Express Logistics',
    desc: 'Dedicated heavy air freighters, temperature-controlled pharmaceutical corridors, priority aerospace AOG dispatches, and emergency cargo.',
    img: IMAGES.airCargo,
    rows: [
      ['Dispatch Window', '< 12-24 Hours Turnaround'],
      ['Specialized Handling', 'Pharma GDP, Dangerous Goods'],
    ],
    cta: 'Charter Aircraft →',
  },
  {
    id: '04',
    tag: 'Bonded & Freezone',
    title: 'Warehousing & 3PL Distribution',
    desc: 'Freezone bonded hubs in Jebel Ali, ADGM and Rotterdam with automated racking, inventory cross-docking, and end-mile distribution.',
    img: IMAGES.warehouse,
    rows: [
      ['Storage Area', '450,000+ SQM Combined'],
      ['Integration', 'WMS / SAP / Oracle Live EDI'],
    ],
    cta: 'Reserve Facility →',
  },
]

const PILLARS = [
  {
    icon: 'account_balance',
    title: 'Trade Finance & LC Structuring',
    desc: 'Documentary letters of credit (DLC, SBLC), deferred payment options, and sovereign trade financing structured through top-tier global institutions.',
    badge: '• UCP 600 Governed',
  },
  {
    icon: 'verified',
    title: 'Assurance & Origin Testing',
    desc: 'Independent SGS, Bureau Veritas, and Cotecna pre-shipment inspections ensuring material purity, mechanical grade, and accurate weight documentation.',
    badge: '• SGS Verified Portals',
  },
  {
    icon: 'hub',
    title: 'Direct Tier-1 Producers',
    desc: 'Vetted partnerships directly with smelters, refineries, and industrial manufacturers eliminating intermediary inflation and speculative price gouging.',
    badge: '• 400+ Qualified Mills',
  },
  {
    icon: 'shield_with_heart',
    title: 'Direct Customs Clearance',
    desc: 'Licensed in-house customs brokers managing Harmonized Tariff Schedules, bilateral free trade protocols, and accelerated bonded transit lanes.',
    badge: '• Fast-Track Green Channel',
  },
]

const PARTNERS = [
  ['DP WORLD', 'Licensed Operator'],
  ['MAERSK', 'Direct Carrier Allocation'],
  ['SGS GLOBAL', 'Certified Inspection'],
  ['BUREAU VERITAS', 'Quality Verification'],
  ['EMIRATES SKY', 'Airfreight Allotment'],
  ['ADGM REGISTERED', 'Financial Free Zone'],
]

const TESTIMONIALS = [
  {
    quote:
      '“Al Ealami Trading restructured our bulk hot-rolled coils delivery into King Abdulaziz Port with absolute punctuality. Their documentary LC execution eliminated foreign exchange risk completely.”',
    name: 'Tariq Al-Mansoor',
    role: 'VP Procurement • Gulf Infrastructure Conglomerate',
  },
  {
    quote:
      '“Chartering 3 dedicated 777 air freighters for pharmaceutical cool-chain transfers between Dubai and West Africa was managed impeccably. Real-time temperature logging was compliant with international GDP standards.”',
    name: 'Dr. Helene Van Dijk',
    role: 'Global Logistics Director • Euro-Med LifeSciences',
  },
  {
    quote:
      '“Having an integrated partner handling both bonded freezone storage at JAFZA and multimodal ocean logistics provided our supply chain with an unmatched operational moat.”',
    name: 'Chen Wei Lin',
    role: 'Managing Director • Asia-Pacific Raw Materials Ltd',
  },
]

export function HomePage() {
  const [corridor, setCorridor] = useState<CorridorKey>('middle-east')
  const c = CORRIDOR_DATA[corridor]

  function onRfq(e: FormEvent) {
    e.preventDefault()
    alert('Quotation request submitted to Al Ealami Trading Desk. Reference #AE-2025-RFQ generated.')
  }

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative -mt-20 w-full overflow-hidden bg-primary-container text-surface-container-lowest">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${IMAGES.heroPort}')`,
            filter: 'brightness(0.42) saturate(1.15)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/75 to-primary-container/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,214,91,0.08),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-[1440px] px-margin-mobile pt-32 pb-20 md:px-margin md:pb-28 lg:px-margin-desktop">
          <div className="mb-space-lg inline-flex items-center gap-space-xs bg-surface-container-lowest/10 px-space-sm py-1 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 animate-ping rounded-full bg-secondary-fixed" />
            <span className="-ml-2.5 h-1.5 w-1.5 rounded-full bg-secondary-container" />
            <span className="pl-1 font-label text-label-sm uppercase tracking-widest text-secondary-fixed">
              Global Trade Network • Live Telemetry Active
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-gutter lg:grid-cols-12">
            <div className="space-y-space-md lg:col-span-8">
              <h1 className="font-display text-display-xl-mobile leading-none font-bold tracking-tight text-surface-container-lowest uppercase md:text-display-xl">
                Connecting Global Markets <br className="hidden sm:inline" />
                <span className="text-secondary-fixed">Through Precision</span> Trading & Logistics
              </h1>
              <p className="max-w-2xl font-body text-body-lg leading-relaxed text-tertiary-fixed">
                Al Ealami Trading is an international multi-commodity trading house and end-to-end
                logistics partner bridging manufacturers, industrial buyers, and global trade
                corridors.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-md">
                <a
                  href="#divisions"
                  className="group inline-flex items-center gap-space-xs bg-secondary-container px-space-lg py-space-sm font-display text-headline-sm uppercase tracking-wider text-on-secondary-container shadow-md transition-all hover:bg-secondary-fixed"
                >
                  <span>Explore Trading Divisions</span>
                  <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#rfq-desk"
                  className="inline-flex items-center gap-space-xs bg-surface-container-lowest/10 px-space-lg py-space-sm font-display text-headline-sm uppercase tracking-wider text-surface-container-lowest shadow-sm backdrop-blur-md transition-all hover:bg-surface-container-lowest/20"
                >
                  <Icon name="request_quote" className="text-secondary-fixed" />
                  <span>Request Formal RFQ</span>
                </a>
              </div>
            </div>

            <div className="mt-space-lg lg:col-span-4 lg:mt-0">
              <div className="space-y-space-sm bg-surface-container-lowest/10 p-space-md shadow-xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-space-xs">
                  <span className="font-label text-label-sm uppercase tracking-widest text-secondary-fixed">
                    Vessel Real-Time Stream
                  </span>
                  <span className="bg-tertiary-container px-1.5 py-0.5 font-label text-label-sm text-tertiary-fixed">
                    JAFZA • ADGM
                  </span>
                </div>
                <div className="space-y-space-xs text-surface-container-lowest">
                  <div className="flex items-center justify-between bg-surface-container-lowest/5 p-space-xs">
                    <div>
                      <p className="font-label text-label-md font-semibold">MV AL-EALAMI VOYAGE 409</p>
                      <p className="font-label text-label-sm text-on-primary-container">
                        Rotterdam → Jebel Ali (CIF)
                      </p>
                    </div>
                    <span className="bg-secondary-container px-2 py-0.5 font-label text-label-sm font-bold text-on-secondary-container uppercase">
                      Berthing
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-lowest/5 p-space-xs">
                    <div>
                      <p className="font-label text-label-md font-semibold">AIR CHARTER AE-772</p>
                      <p className="font-label text-label-sm text-on-primary-container">
                        DXB Hub → Singapore Changi
                      </p>
                    </div>
                    <span className="bg-tertiary-container px-2 py-0.5 font-label text-label-sm font-bold text-tertiary-fixed uppercase">
                      En Route
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-space-xs font-label text-label-sm text-outline-variant">
                  <span>Bunker Index: $592.40/MT</span>
                  <span className="text-secondary-fixed">LC Facility Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-space-xl grid grid-cols-2 gap-gutter bg-surface-container-lowest/5 p-space-md pt-space-lg shadow-lg backdrop-blur-md md:grid-cols-4">
            {[
              ['38+', 'Countries Served', 'Integrated trade gateways', 'text-secondary-fixed'],
              ['1.8M', 'Metric Tons Traded', 'Annual cross-border throughput', 'text-surface-container-lowest'],
              ['99.4%', 'On-Time Dispatch', 'Ocean & multimodal freight SLA', 'text-secondary-container'],
              ['ISO', '9001:2015 • GDP', 'Global compliance certified', 'text-surface-container-lowest'],
            ].map(([stat, label, sub, color]) => (
              <div key={label} className="space-y-1">
                <p className={`font-display text-display-xl leading-none font-bold ${color}`}>{stat}</p>
                <p className="font-label text-label-md font-medium tracking-wider text-surface-container-lowest uppercase">
                  {label}
                </p>
                <p className="font-body text-body-sm text-on-primary-container">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="w-full overflow-hidden bg-surface-container-high py-space-xs">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-space-md px-margin-mobile md:px-margin lg:px-margin-desktop">
          <div className="flex shrink-0 items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="font-label text-label-sm font-bold tracking-wider text-on-surface uppercase">
              Live Indices:
            </span>
          </div>
          <div className="flex items-center gap-space-lg overflow-x-auto py-1 whitespace-nowrap">
            <span className="font-label text-label-md text-on-surface">
              Hot-Rolled Coil (FOB AG): <strong className="text-secondary">$615/MT (+1.4%)</strong>
            </span>
            <span className="font-label text-label-md text-on-surface">
              Billet Steel (CFR GCC): <strong className="text-on-surface-variant">$520/MT</strong>
            </span>
            <span className="font-label text-label-md text-on-surface">
              Ocean Freight SCFI: <strong className="text-secondary">2,145 pts</strong>
            </span>
            <span className="font-label text-label-md text-on-surface">
              Industrial Copper Gr-A: <strong className="text-on-surface-variant">$9,310/MT</strong>
            </span>
            <span className="font-label text-label-md text-on-surface">
              Jet Fuel FOB ME: <strong className="text-secondary">$94.80/bbl</strong>
            </span>
          </div>
          <div className="hidden shrink-0 items-center gap-space-xs md:flex">
            <span className="font-label text-label-sm text-on-surface-variant">UTC 08:44:12</span>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="w-full bg-surface py-space-xl" id="divisions">
        <div className="mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin lg:px-margin-desktop">
          <div className="flex flex-col justify-between pb-space-lg md:flex-row md:items-end">
            <div className="space-y-space-xs">
              <p className="font-label text-label-md font-semibold tracking-widest text-secondary uppercase">
                Institutional Trading Capabilities
              </p>
              <h2 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
                Enterprise Commercial Divisions
              </h2>
            </div>
            <p className="max-w-md pt-space-xs font-body text-body-md text-on-surface-variant md:pt-0">
              Integrated commodity arbitrage, chartering, multimodal routing, and bonded warehousing
              engineered for global scale.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {DIVISIONS.map((d) => (
              <div
                key={d.id}
                className="group flex flex-col justify-between bg-surface-container-lowest shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-60 w-full overflow-hidden bg-surface-container">
                  <img
                    alt={d.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={d.img}
                  />
                  <div className="absolute top-space-sm left-space-sm">
                    <span className="bg-primary-container px-space-xs py-0.5 font-label text-label-sm font-bold tracking-wider text-secondary-fixed uppercase">
                      Division {d.id}
                    </span>
                  </div>
                  <div className="absolute right-space-xs bottom-space-xs bg-surface-container-lowest/90 px-space-xs py-0.5">
                    <span className="font-label text-label-sm font-semibold text-on-surface">{d.tag}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between space-y-space-md p-space-md">
                  <div className="space-y-space-xs">
                    <h3 className="font-display text-headline-sm text-on-surface uppercase transition-colors group-hover:text-secondary">
                      {d.title}
                    </h3>
                    <p className="line-clamp-3 font-body text-body-sm text-on-surface-variant">{d.desc}</p>
                  </div>
                  <div className="space-y-space-xs pt-space-xs">
                    {d.rows.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-center justify-between font-label text-label-sm text-outline"
                      >
                        <span>{k}</span>
                        <span className="font-semibold text-on-surface">{v}</span>
                      </div>
                    ))}
                    <Link
                      to="/contact"
                      className="mt-space-sm block w-full bg-surface-container py-space-xs text-center font-label text-label-md font-semibold tracking-wider text-on-surface uppercase transition-colors hover:bg-primary-container hover:text-surface-container-lowest"
                    >
                      {d.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin lg:px-margin-desktop">
          <div className="mx-auto max-w-2xl space-y-space-xs pb-space-lg text-center">
            <p className="font-label text-label-md font-semibold tracking-widest text-secondary uppercase">
              Strategic Edge
            </p>
            <h2 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
              Institutional Architecture & Governance
            </h2>
            <p className="font-body text-body-md text-on-surface-variant">
              Built on fiscal strength, certified provenance, and sovereign-grade compliance mechanisms.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="space-y-space-sm bg-surface-container-lowest p-space-md shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center bg-surface-container text-primary-container">
                  <Icon name={p.icon} className="text-[28px]" />
                </div>
                <h4 className="font-display text-headline-sm text-on-surface uppercase">{p.title}</h4>
                <p className="font-body text-body-sm text-on-surface-variant">{p.desc}</p>
                <div className="pt-space-xs">
                  <span className="font-label text-label-sm font-bold tracking-wider text-secondary uppercase">
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section className="w-full bg-surface py-space-xl">
        <div className="mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin lg:px-margin-desktop">
          <div className="flex flex-col justify-between pb-space-lg lg:flex-row lg:items-end">
            <div className="space-y-space-xs">
              <p className="font-label text-label-md font-semibold tracking-widest text-secondary uppercase">
                Geopolitical Reach
              </p>
              <h2 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
                Active Trans-Continental Trade Corridors
              </h2>
            </div>
            <div className="flex items-center gap-space-xs overflow-x-auto pt-space-sm lg:pt-0">
              {CORRIDOR_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setCorridor(tab.key)}
                  className={`px-space-md py-1.5 font-label text-label-md tracking-wider uppercase transition-colors ${
                    corridor === tab.key
                      ? 'bg-primary-container text-surface-container-lowest'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-gutter bg-surface-container-lowest p-space-md shadow-md md:p-space-lg lg:grid-cols-12">
            <div className="space-y-space-md lg:col-span-5">
              <div className="space-y-space-xs">
                <span className="bg-secondary-container/30 px-space-xs py-0.5 font-label text-label-sm font-bold tracking-widest text-secondary uppercase">
                  {c.badge}
                </span>
                <h3 className="font-display text-headline-md text-on-surface uppercase">{c.title}</h3>
                <p className="font-body text-body-md text-on-surface-variant">{c.desc}</p>
              </div>
              <div className="grid grid-cols-2 gap-space-md bg-surface-container-low p-space-sm py-space-xs">
                <div>
                  <p className="font-label text-label-sm text-on-surface-variant uppercase">Key Gateway Ports</p>
                  <p className="font-display text-headline-sm font-semibold text-on-surface">{c.ports}</p>
                </div>
                <div>
                  <p className="font-label text-label-sm text-on-surface-variant uppercase">Average Transit Time</p>
                  <p className="font-display text-headline-sm font-semibold text-secondary">{c.transit}</p>
                </div>
                <div>
                  <p className="font-label text-label-sm text-on-surface-variant uppercase">Monthly Volume</p>
                  <p className="font-display text-headline-sm font-semibold text-on-surface">{c.volume}</p>
                </div>
                <div>
                  <p className="font-label text-label-sm text-on-surface-variant uppercase">Key Commodities</p>
                  <p className="font-display text-headline-sm font-semibold text-on-surface">{c.goods}</p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-space-xs bg-primary px-space-md py-space-xs font-label text-label-md tracking-wider text-on-primary uppercase transition-colors hover:bg-surface-tint"
                >
                  <span>View Route Manifest</span>
                  <Icon name="file_download" className="text-[16px]" />
                </Link>
                <span className="font-label text-label-sm text-outline">Customs Clearance Pre-Approved</span>
              </div>
            </div>

            <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-primary-container p-space-md text-surface-container-lowest md:p-space-lg lg:col-span-7">
              <div className="absolute inset-0 bg-[radial-gradient(#fed65b_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-label text-label-sm font-semibold tracking-wider text-secondary-fixed uppercase">
                  Corridor Route Coordinates
                </span>
                <span className="font-label text-label-sm text-on-primary-container">
                  N 25° 16&apos; 12&quot; | E 55° 18&apos; 21&quot;
                </span>
              </div>
              <div className="relative z-10 my-auto py-space-md">
                <svg className="h-auto w-full" fill="none" viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="text-on-primary-container/40"
                    d="M 40 160 Q 200 40, 360 120 T 660 70"
                    stroke="currentColor"
                    strokeDasharray="6 6"
                    strokeWidth="2"
                  />
                  <path
                    className="text-secondary-fixed"
                    d="M 40 160 Q 200 40, 360 120"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <circle className="fill-primary-container stroke-secondary-fixed" cx="40" cy="160" r="7" strokeWidth="3" />
                  <text fill="#f6fafe" fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" x="40" y="195">
                    JEBEL ALI (DXB)
                  </text>
                  <text fill="#76849f" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="40" y="210">
                    ORIGIN TERMINAL
                  </text>
                  <circle className="fill-secondary-container" cx="210" cy="70" r="5" />
                  <text fill="#fed65b" fontFamily="JetBrains Mono" fontSize="11" textAnchor="middle" x="210" y="50">
                    KHALIFA PORT (AUH)
                  </text>
                  <g transform="translate(360, 120)">
                    <circle className="animate-pulse fill-secondary-container/20" cx="0" cy="0" r="14" />
                    <circle className="fill-secondary-fixed" cx="0" cy="0" r="6" />
                    <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="11" fontWeight="bold" textAnchor="middle" x="0" y="-12">
                      VESSEL AL-EALAMI I
                    </text>
                  </g>
                  <circle className="fill-primary-container stroke-tertiary-fixed" cx="660" cy="70" r="7" strokeWidth="3" />
                  <text fill="#d5e3ff" fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" x="640" y="105">
                    ROTTERDAM / SHANGHAI
                  </text>
                  <text fill="#76849f" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="640" y="120">
                    DISCHARGE CONDUIT
                  </text>
                </svg>
              </div>
              <div className="relative z-10 grid grid-cols-3 gap-space-xs border-t border-on-primary-container/20 pt-space-xs text-center">
                <div>
                  <p className="font-label text-label-sm text-on-primary-container uppercase">Average Sea Swell</p>
                  <p className="font-label text-label-md font-medium text-surface-container-lowest">1.1 m • Calm</p>
                </div>
                <div>
                  <p className="font-label text-label-sm text-on-primary-container uppercase">Port Congestion</p>
                  <p className="font-label text-label-md font-medium text-secondary-fixed">Minimal (&lt;8h)</p>
                </div>
                <div>
                  <p className="font-label text-label-sm text-on-primary-container uppercase">GPS Tracking</p>
                  <p className="font-label text-label-md font-medium text-surface-container-lowest">AIS Live Satellite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full bg-surface-container-low py-space-lg">
        <div className="mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin lg:px-margin-desktop">
          <div className="mb-space-md flex flex-col items-center justify-between gap-space-md md:flex-row">
            <p className="font-label text-label-md font-semibold tracking-widest text-outline uppercase">
              Accredited Sovereign & Maritime Alliances
            </p>
            <div className="flex items-center gap-space-xs font-label text-label-sm text-outline">
              <Icon name="verified_user" className="text-[16px] text-secondary" />
              <span>Verified Under International Chamber of Commerce (ICC) Regulations</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-space-md sm:grid-cols-3 md:grid-cols-6">
            {PARTNERS.map(([name, role]) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center bg-surface-container-lowest p-space-sm text-center shadow-sm"
              >
                <span className="font-display text-headline-sm font-bold tracking-tighter text-on-surface">
                  {name}
                </span>
                <span className="font-label text-label-sm text-outline uppercase">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-surface py-space-xl">
        <div className="mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin lg:px-margin-desktop">
          <div className="space-y-space-xs pb-space-lg">
            <p className="font-label text-label-md font-semibold tracking-widest text-secondary uppercase">
              Institutional Validation
            </p>
            <h2 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
              Executive Stakeholder Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between space-y-space-md bg-surface-container-lowest p-space-lg shadow-sm"
              >
                <div className="space-y-space-sm">
                  <div className="flex text-secondary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="text-[18px]" />
                    ))}
                  </div>
                  <p className="font-body text-body-md leading-relaxed text-on-surface">{t.quote}</p>
                </div>
                <div className="pt-space-sm">
                  <p className="font-display text-headline-sm text-on-surface">{t.name}</p>
                  <p className="font-label text-label-sm text-outline uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Desk */}
      <section className="w-full bg-primary-container py-space-xl text-surface-container-lowest" id="rfq-desk">
        <div className="mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
            <div className="space-y-space-md lg:col-span-5">
              <div className="space-y-space-xs">
                <span className="font-label text-label-md font-semibold tracking-widest text-secondary-fixed uppercase">
                  Tender & Procurement Portal
                </span>
                <h2 className="font-display text-headline-lg tracking-tight text-surface-container-lowest uppercase">
                  Request a Formal Institutional Quotation
                </h2>
                <p className="font-body text-body-md leading-relaxed text-on-primary-container">
                  Connect directly with our commercial desk for multi-ton commodity orders, vessel slots,
                  or time-sensitive multimodal supply chain contracts.
                </p>
              </div>
              <div className="space-y-space-sm pt-space-xs">
                {[
                  ['speed', '4-Hour Commercial SLA', 'Initial feasibility assessment and indicative freight index provided within 240 minutes.'],
                  ['lock', 'Mutual NDA Governed', 'Strict institutional confidentiality on pricing, shipping manifests, and banking coordinates.'],
                  ['support_agent', 'Direct Broker Dispatch', 'Desk assigned trade representative stationed in Abu Dhabi or Singapore.'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="flex items-start gap-space-sm">
                    <Icon name={icon} className="shrink-0 text-[22px] text-secondary-fixed" />
                    <div>
                      <p className="font-label text-label-md font-semibold text-surface-container-lowest uppercase">
                        {title}
                      </p>
                      <p className="font-body text-body-sm text-on-primary-container">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-space-xs bg-surface-container-lowest/10 p-space-md">
                <p className="font-label text-label-sm tracking-wider text-secondary-fixed uppercase">
                  Direct Trading Floor Desk
                </p>
                <p className="font-display text-headline-sm text-surface-container-lowest">
                  +971 4 800 EALAMI / +971 (0)2 449 8800
                </p>
                <p className="font-label text-label-sm text-on-primary-container">
                  trading-desk@alealamitrading.com
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-lg text-on-surface shadow-2xl lg:col-span-7">
              <form className="space-y-space-md" onSubmit={onRfq}>
                <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
                  <Field label="Organization / Enterprise Legal Entity *" placeholder="e.g. Saudi Aramco Sub-contractor LLC" required />
                  <Field label="Authorized Officer Name & Title *" placeholder="Full Name (Procurement Officer)" required />
                  <Field label="Corporate Email Address *" placeholder="procurement@organization.com" type="email" required />
                  <Field label="Telephone / Direct Mobile *" placeholder="+971 50 000 0000" type="tel" required />
                </div>
                <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
                  <SelectField
                    label="Trading Division *"
                    options={[
                      'Industrial Commodities & Metals',
                      'Global Ocean Freight',
                      'Air Cargo & Aviation Charter',
                      'Warehousing & 3PL Hubs',
                    ]}
                  />
                  <SelectField
                    label="Target Incoterm *"
                    options={[
                      'CIF - Cost, Insurance & Freight',
                      'FOB - Free on Board',
                      'CFR - Cost and Freight',
                      'DDP - Delivered Duty Paid',
                      'EXW - Ex Works',
                    ]}
                  />
                  <Field label="Target Metric Tons / TEU" placeholder="e.g. 2,500 MT or 40 TEU" />
                </div>
                <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
                  <Field label="Port of Loading (POL)" placeholder="e.g. Jebel Ali Port, UAE or Rotterdam" />
                  <Field label="Port of Discharge (POD)" placeholder="e.g. Dammam Port, KSA or Singapore" />
                </div>
                <div className="space-y-space-xs">
                  <label className="font-label text-label-md font-semibold text-on-surface-variant uppercase">
                    Commodity Specifications & Technical Requirements *
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low px-space-sm py-2 font-body text-body-sm text-on-surface focus:outline-none"
                    placeholder="Enter precise material grades, chemical composition tolerance, packing standards..."
                    required
                    rows={3}
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-space-md pt-space-xs sm:flex-row">
                  <label className="flex items-center gap-space-xs font-label text-label-sm text-outline">
                    <input
                      defaultChecked
                      className="h-4 w-4 accent-primary"
                      type="checkbox"
                    />
                    Require Al Ealami Bilateral Non-Disclosure Agreement
                  </label>
                  <button
                    type="submit"
                    className="w-full bg-secondary-container px-space-xl py-space-sm font-display text-headline-sm font-semibold tracking-wider text-on-secondary-container uppercase shadow-md transition-all hover:bg-secondary-fixed sm:w-auto"
                  >
                    Transmit RFQ →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({
  label,
  placeholder,
  type = 'text',
  required,
}: {
  label: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="space-y-space-xs">
      <label className="font-label text-label-md font-semibold text-on-surface-variant uppercase">{label}</label>
      <input
        className="w-full bg-surface-container-low px-space-sm py-2 font-body text-body-sm text-on-surface focus:outline-none"
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  )
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-space-xs">
      <label className="font-label text-label-md font-semibold text-on-surface-variant uppercase">{label}</label>
      <select className="w-full bg-surface-container-low px-space-sm py-2 font-body text-body-sm text-on-surface focus:outline-none">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}
