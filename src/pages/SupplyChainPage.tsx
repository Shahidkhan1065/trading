import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { IMAGES } from '../data/assets'

const TRANSIT: Record<string, { sea: string; air: string; reefer: string }> = {
  'AEJEA-NLRTM': { sea: '14 - 16', air: '1 - 2', reefer: '15 - 17' },
  'AEJEA-KEMBA': { sea: '7 - 9', air: '1', reefer: '8 - 10' },
  'AEJEA-SGSIN': { sea: '9 - 11', air: '1', reefer: '10 - 12' },
  'AEJEA-SAJED': { sea: '4 - 6', air: '1', reefer: '5 - 6' },
  'CNSHA-AEJEA': { sea: '11 - 13', air: '1 - 2', reefer: '12 - 14' },
  'CNSHA-NLRTM': { sea: '24 - 28', air: '2', reefer: '26 - 30' },
  'SGSIN-AEJEA': { sea: '8 - 10', air: '1', reefer: '9 - 11' },
  'SGSIN-NLRTM': { sea: '19 - 22', air: '2', reefer: '20 - 24' },
}

const ROUTES = [
  ['Jebel Ali (AEJEA)', 'Rotterdam Gateway (NLRTM)', 'Maritime FCL', 'EALM Westbound Express', '14 - 16 Days', '3x Weekly', false],
  ['Dubai World Central (DWC)', 'Frankfurt Main (FRA)', 'Air Priority', 'B777-200F Heavy Air', '6.5 Hours', 'Daily Direct', true],
  ['Shanghai Ningbo (CNSHA)', 'Jebel Ali Terminal 2 (AEJEA)', 'Maritime FCL', 'Asia-Gulf Loop 1', '11 - 13 Days', '4x Weekly', false],
  ['Singapore Hub (SGSIN)', 'Mombasa Terminal (KEMBA)', 'Maritime Reefer', 'East Africa Cold Line', '12 - 14 Days', '2x Weekly', false],
  ['Abu Dhabi KIZAD', 'Riyadh Dry Port (SAR)', 'Cross-Border Land', 'GCC Intermodal Convoy', '24 - 36 Hours', 'Daily Scheduled', false],
]

export function SupplyChainPage() {
  const [origin, setOrigin] = useState('AEJEA')
  const [dest, setDest] = useState('NLRTM')
  const [mode, setMode] = useState('fcl')
  const [tracking, setTracking] = useState('EALM-8849-DXB')
  const [trackLabel, setTrackLabel] = useState('Execute Trace')

  const estimate = useMemo(() => {
    const key = `${origin}-${dest}`
    if (mode === 'air-charter') {
      return { days: '1 - 2', clearance: '4 - 8 Hours', freq: 'Daily Flights' }
    }
    if (mode === 'reefer') {
      return {
        days: TRANSIT[key]?.reefer ?? '12 - 15',
        clearance: '12 - 18 Hours',
        freq: '2 Cold-Line Runs',
      }
    }
    return {
      days: TRANSIT[key]?.sea ?? '10 - 14',
      clearance: '18 - 24 Hours',
      freq: '3 Direct Sailings',
    }
  }, [origin, dest, mode])

  function onTrack() {
    if (!tracking.trim()) {
      alert('Please insert a valid B/L, Container, or AWB tracking code.')
      return
    }
    setTrackLabel('Verifying...')
    setTimeout(() => setTrackLabel('Live Telemetry Active'), 600)
  }

  return (
    <div className="flex w-full flex-col">
      <section className="w-full bg-primary-container px-margin-mobile py-space-xs text-surface shadow-sm md:px-margin lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-space-sm font-label text-label-sm">
          <div className="flex items-center gap-space-sm">
            <span className="inline-flex items-center gap-1.5 bg-tertiary-container px-2 py-0.5 text-secondary-fixed">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-secondary-fixed" />
              PORT RADAR ACTIVE
            </span>
            <span className="font-mono text-on-primary-container">JEBEL ALI (AEJEA): DWELL 1.8D</span>
            <span className="hidden text-outline sm:inline">|</span>
            <span className="hidden font-mono text-on-primary-container sm:inline">ROTTERDAM (NLRTM): NORMAL FLOW</span>
            <span className="hidden text-outline md:inline">|</span>
            <span className="hidden font-mono text-on-primary-container md:inline">SINGAPORE (SGSIN): BERTH CLEAR</span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="font-semibold tracking-wider text-secondary-fixed">MARITIME WEATHER: CLEAR</span>
            <span className="text-on-primary-container">SYS CLOCK: 13:42:09 UTC</span>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-space-xl flex flex-col justify-between gap-space-lg lg:flex-row lg:items-end">
            <div className="max-w-4xl space-y-space-sm">
              <div className="flex items-center gap-space-xs font-label text-label-md tracking-widest text-secondary uppercase">
                <span className="h-2.5 w-2.5 bg-secondary" />
                <span>LOGISTICS ARCHITECTURE // TIER 1 COMMERCIAL CORRIDORS</span>
              </div>
              <h1 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
                Multimodal Freight, Strategic Warehousing & 3PL Logistics
              </h1>
              <p className="max-w-2xl font-body text-body-lg leading-relaxed text-on-surface-variant">
                End-to-end cargo movement across sea, air, and land with bonded distribution hubs and
                automated tracking.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-space-sm sm:flex-row">
              <a
                href="#freight-calculator"
                className="bg-primary px-space-lg py-space-sm text-center font-label text-label-md tracking-wider text-on-primary uppercase shadow-sm transition-all hover:bg-surface-container-highest hover:text-on-surface"
              >
                Route Lead Time Tool
              </a>
              <a
                href="#tracking-suite"
                className="bg-secondary-container px-space-lg py-space-sm text-center font-label text-label-md font-semibold tracking-wider text-on-secondary-container uppercase shadow-sm transition-all hover:bg-secondary-fixed"
              >
                Track Cargo Vessel
              </a>
            </div>
          </div>

          <div
            className="relative mb-space-xl w-full overflow-hidden bg-surface-container-lowest p-space-lg shadow-md"
            id="tracking-suite"
          >
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary-container to-primary" />
            <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12">
              <div className="space-y-space-xs lg:col-span-4">
                <div className="flex items-center gap-2">
                  <Icon name="radar" className="text-[20px] text-secondary" />
                  <span className="font-label text-label-md font-semibold text-on-surface uppercase">
                    Consignment Live Tracker
                  </span>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Query institutional Master Bill of Lading (MBL), Airway Bill (AWB), or Intermodal ISO
                  Container ID.
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-space-sm md:flex-row lg:col-span-8">
                <div className="relative flex-1">
                  <Icon
                    name="manage_search"
                    className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[20px] text-outline"
                  />
                  <input
                    className="w-full bg-surface-container-low py-space-sm pr-4 pl-10 font-label text-label-md tracking-wider text-on-surface uppercase focus:bg-surface focus:outline-none"
                    value={tracking}
                    onChange={(e) => setTracking(e.target.value)}
                    placeholder="e.g. MSKU9384921 / EALM-8849-DXB"
                    type="text"
                  />
                </div>
                <button
                  type="button"
                  onClick={onTrack}
                  className="flex shrink-0 items-center justify-center gap-2 bg-primary px-space-lg py-space-sm font-label text-label-md tracking-wider text-on-primary uppercase shadow-sm transition-colors hover:bg-surface-container-highest hover:text-on-surface"
                >
                  <span>{trackLabel}</span>
                  <Icon name="arrow_forward" className="text-[16px]" />
                </button>
              </div>
            </div>

            <div className="mt-space-lg bg-surface-container-low p-space-md pt-space-md">
              <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="bg-surface-container px-2 py-0.5 font-label text-label-sm text-on-surface uppercase">
                    B/L: EALM-8849-DXB
                  </span>
                  <span className="bg-secondary-container px-2 py-0.5 font-label text-label-sm font-semibold text-on-secondary-container uppercase">
                    VESSEL: AL FARAH V.204
                  </span>
                </div>
                <div className="font-label text-label-sm text-on-surface-variant">
                  STATUS: <span className="font-bold text-secondary">IN TRANSIT // RED SEA CORRIDOR</span> •
                  ETA: 48 HOURS
                </div>
              </div>
              <div className="grid grid-cols-1 gap-space-sm pt-space-xs sm:grid-cols-4">
                {[
                  ['01. Origin Cleared', 'Jebel Ali (AEJEA)', 'Manifest signed: 14 Oct', false],
                  ['02. Ocean Waypoint', 'Strait of Malacca', 'Speed: 19.4 knots', false],
                  ['03. Current Sector', 'Gulf of Aden Transit', 'AIS Pos Verified: 10m ago', true],
                  ['04. Final Discharge', 'Rotterdam (NLRTM)', 'Projected Berth: Bay 14', false],
                ].map(([step, place, meta, active]) => (
                  <div
                    key={String(step)}
                    className={`p-space-sm ${active ? 'bg-secondary-container/20' : 'bg-surface-container-lowest'} ${!active && step.toString().startsWith('04') ? 'opacity-75' : ''}`}
                  >
                    <div
                      className={`font-label text-label-sm font-semibold uppercase ${active ? 'flex items-center gap-1 font-bold text-secondary' : step.toString().startsWith('04') ? 'text-outline' : 'text-secondary'}`}
                    >
                      {active && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />}
                      {step}
                    </div>
                    <div className="mt-1 font-display text-[15px] font-semibold text-on-surface">{place}</div>
                    <div className="mt-0.5 font-label text-label-sm text-on-surface-variant">{meta}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section
        className="w-full bg-surface-container px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop"
        id="freight-calculator"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-space-lg max-w-2xl">
            <span className="mb-space-xs block font-label text-label-md tracking-widest text-secondary uppercase">
              Strategic Sourcing Instrument
            </span>
            <h2 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
              Freight Route & Lead Time Estimator
            </h2>
            <p className="mt-space-xs font-body text-body-md text-on-surface-variant">
              Calculate verified maritime sailing times, air charter turnarounds, and customs dwell
              intervals across our primary operating terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
            <div className="space-y-space-md bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-7">
              <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                <Select
                  label="Origin Hub / Terminal"
                  value={origin}
                  onChange={setOrigin}
                  options={[
                    ['AEJEA', 'Jebel Ali Port (AEJEA) - Dubai, UAE'],
                    ['SGSIN', 'Port of Singapore (SGSIN) - Singapore'],
                    ['CNSHA', 'Port of Shanghai (CNSHA) - China'],
                    ['NLRTM', 'Port of Rotterdam (NLRTM) - Netherlands'],
                    ['USNYC', 'Port of New York / New Jersey (USNYC)'],
                  ]}
                />
                <Select
                  label="Destination Corridor"
                  value={dest}
                  onChange={setDest}
                  options={[
                    ['NLRTM', 'Port of Rotterdam (NLRTM) - Europe Gateway'],
                    ['AEJEA', 'Jebel Ali Port (AEJEA) - Dubai Hub'],
                    ['KEMBA', 'Mombasa Port (KEMBA) - East Africa'],
                    ['SGSIN', 'Port of Singapore (SGSIN) - ASEAN Hub'],
                    ['SAJED', 'Jeddah Islamic Port (SAJED) - Saudi Arabia'],
                  ]}
                />
              </div>
              <div className="grid grid-cols-1 gap-space-md sm:grid-cols-3">
                <Select
                  label="Equipment / Cargo Mode"
                  value={mode}
                  onChange={setMode}
                  options={[
                    ['fcl', "40' High-Cube (FCL Maritime)"],
                    ['lcl', 'LCL Consolidated Cargo'],
                    ['reefer', 'Cold Chain Reefer (-25°C to +4°C)'],
                    ['air-charter', 'B747-400F Priority Air Cargo'],
                    ['bulk', 'Break-bulk / Project Vessel'],
                  ]}
                />
                <Select
                  label="Incoterms Basis"
                  value="CIF"
                  onChange={() => {}}
                  options={[
                    ['CIF', 'CIF (Cost, Insurance & Freight)'],
                    ['FOB', 'FOB (Free on Board)'],
                    ['DAP', 'DAP (Delivered at Place)'],
                    ['EXW', 'EXW (Ex Works)'],
                  ]}
                />
                <Select
                  label="Hazardous / Special"
                  value="none"
                  onChange={() => {}}
                  options={[
                    ['none', 'Standard Non-Hazmat'],
                    ['pharma', 'GDP Pharma Class II'],
                    ['haz-imo', 'IMO Hazmat Certified'],
                  ]}
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs font-label text-label-sm text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <Icon name="verified" className="text-[16px] text-secondary" />
                  Rates derived from Al Ealami Q3 Maritime Ledger
                </span>
                <button
                  type="button"
                  className="bg-primary px-space-md py-space-xs font-semibold tracking-wider text-on-primary uppercase transition-colors hover:bg-surface-container-highest hover:text-on-surface"
                >
                  Refresh Telemetry
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-primary-container p-space-lg text-surface shadow-md lg:col-span-5">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between pb-space-sm">
                  <span className="font-label text-label-md tracking-wider text-secondary-fixed uppercase">
                    Operational Calculation
                  </span>
                  <span className="bg-tertiary-container px-2 py-0.5 font-label text-label-sm text-tertiary-fixed uppercase">
                    CERTIFIED QUOTE READY
                  </span>
                </div>
                <div className="space-y-space-xs">
                  <span className="block font-label text-label-sm tracking-wider text-on-primary-container uppercase">
                    Estimated Port-to-Port Transit
                  </span>
                  <div className="flex items-baseline gap-space-sm">
                    <span className="font-display text-display-xl font-bold text-surface-container-lowest">
                      {estimate.days}
                    </span>
                    <span className="font-display text-headline-sm text-secondary-fixed">Calendar Days</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                  <div className="bg-tertiary-container/40 p-space-sm">
                    <span className="block font-label text-label-sm text-on-primary-container uppercase">
                      Customs Clearance
                    </span>
                    <span className="mt-1 block font-label text-label-lg font-semibold text-surface-container-lowest">
                      {estimate.clearance}
                    </span>
                  </div>
                  <div className="bg-tertiary-container/40 p-space-sm">
                    <span className="block font-label text-label-sm text-on-primary-container uppercase">
                      Weekly Departures
                    </span>
                    <span className="mt-1 block font-label text-label-lg font-semibold text-surface-container-lowest">
                      {estimate.freq}
                    </span>
                  </div>
                </div>
                <div className="space-y-1 bg-tertiary-container/60 p-space-sm">
                  <div className="flex justify-between font-label text-label-sm text-on-primary-container">
                    <span>Vessel Allocation: High Availability</span>
                    <span className="font-semibold text-secondary-fixed">98.4% On-Time Index</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-lowest/10">
                    <div className="h-1.5 w-[92%] bg-secondary-fixed" />
                  </div>
                </div>
              </div>
              <div className="pt-space-md">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-space-xs bg-secondary-fixed px-space-md py-space-sm font-label text-label-md font-semibold tracking-wider text-on-secondary-fixed uppercase transition-colors hover:bg-secondary-fixed-dim"
                >
                  <span>Lock Capacity Allocation (RFQ)</span>
                  <Icon name="verified" className="text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full bg-surface px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px] space-y-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div className="space-y-space-xs">
              <span className="block font-label text-label-md tracking-widest text-secondary uppercase">
                Structural Capabilities
              </span>
              <h2 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
                Enterprise Logistics Divisions
              </h2>
            </div>
            <p className="max-w-md font-body text-body-sm text-on-surface-variant">
              Al Ealami operates an integrated proprietary and syndicated carrier infrastructure spanning 48
              deepwater ports and 22 air freight hubs worldwide.
            </p>
          </div>

          <ServiceBlock
            badge="Division 01 // Maritime"
            title="Ocean Freight & Deepwater Charters"
            desc="Consolidated FCL/LCL maritime transportation, specialized bulk vessel charters, and port terminal stevedoring connecting the Arabian Gulf to Europe, North America, and Far East hubs."
            img={IMAGES.heroPort}
            imgAlt="Massive modern maritime container terminal port at sunset"
            caption="PORT OPERATIONS // TERMINAL 4 DEEP DRAFT BERTH"
            checks={[
              'Full Container Load (FCL) & Less-than-Container (LCL) consolidation',
              'Break-bulk and heavy-lift industrial machinery charters',
              'Proprietary demurrage management and inland container depot (ICD) rail links',
            ]}
            stats={[
              ['Annual TEU Volume', '142,000+'],
              ['Global Port Pairings', '180+'],
            ]}
            reverse={false}
          />

          <ServiceBlock
            badge="Division 02 // Aviation"
            title="Air Cargo Solutions & Priority Charter"
            desc="Expedited scheduled belly-hold allotments and bespoke Boeing 747/777 full-freighter charters for time-critical industrial, medical, and sovereign cargo transfers."
            img={IMAGES.airCargo}
            imgAlt="Boeing cargo aircraft being loaded on tarmac"
            caption="AIRPORT RAMP OPERATIONS // HIGH-CAPACITY FREIGHTER LOAD"
            checks={[
              'Next-Flight-Out (NFO) priority chartering across 6 continents',
              'Active temperature packaging (-70°C to +25°C) with continuous datalogging',
              'Tarmac ramp supervision and customs airside security escort',
            ]}
            stats={[
              ['Tonnage Handled/Mo', '8,400 MT'],
              ['Charter Response', '< 120 Mins'],
            ]}
            reverse
          />

          <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-2">
            <div className="flex flex-col justify-between overflow-hidden bg-surface-container-lowest shadow-sm">
              <div className="relative h-[260px] w-full overflow-hidden bg-surface-container">
                <img
                  alt="Automated logistics distribution warehouse"
                  className="h-full w-full object-cover"
                  src={IMAGES.warehouse}
                />
                <div className="absolute top-4 left-4 bg-primary px-2 py-1 font-label text-label-sm text-on-primary uppercase">
                  JAFZA Hub 04 // 65,000 SQM
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-space-md p-space-lg">
                <div className="space-y-space-xs">
                  <span className="bg-surface-container px-2 py-0.5 font-label text-label-sm font-semibold text-secondary uppercase">
                    Division 03 // 3PL & Storage
                  </span>
                  <h3 className="font-display text-headline-md tracking-tight text-on-surface uppercase">
                    Smart Warehousing & Contract Logistics
                  </h3>
                  <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
                    Strategic bonded distribution centers featuring multi-tier racked storage, automated
                    RFID/barcode inventory systems, and multi-chamber climate-controlled zones.
                  </p>
                </div>
                <div className="space-y-space-xs">
                  {[
                    'Bonded free-zone storage with deferment of customs duties',
                    'Pick, pack, serial tracking, and EDI enterprise ERP synchronisation',
                    'Pharmaceutical GDP certified & HACCP food-grade cold vaults',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-space-sm font-body text-body-sm text-on-surface">
                      <Icon name="verified" className="text-[18px] text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-surface-container pt-space-sm font-label text-label-sm">
                  <span className="text-on-surface-variant">TOTAL FOOTPRINT: 140,000+ SQM</span>
                  <span className="font-semibold text-secondary">WMS CLOUD INTEGRATION</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-surface-container-lowest p-space-lg shadow-sm lg:p-space-xl">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-container px-2 py-0.5 font-label text-label-sm font-semibold text-secondary uppercase">
                    Division 04 // Regulatory
                  </span>
                  <Icon name="policy" className="text-[28px] text-on-surface-variant" />
                </div>
                <div className="space-y-space-xs">
                  <h3 className="font-display text-headline-md tracking-tight text-on-surface uppercase">
                    Customs Brokerage & Cross-Border Compliance
                  </h3>
                  <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
                    Dedicated in-house licensed customs brokers managing HS/TARIC code classification, GCC
                    Common Customs Law filing, certificate of origin validation, and sovereign export control
                    protocols.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-space-sm pt-space-xs sm:grid-cols-2">
                  {[
                    ['TARIC Harmonization', 'Automated duty tariff valuation and tax minimization advisory.'],
                    ['AEO Certification', 'Authorized Economic Operator status for green-lane border release.'],
                    ['Sovereign Permits', 'SABER (KSA), MOIAT (UAE), and CE conformity clearance protocols.'],
                    ['Sanctions Screening', 'Rigorous OFAC, EU, and UN dual-use compliance verification.'],
                  ].map(([t, d]) => (
                    <div key={t} className="space-y-1 bg-surface-container-low p-space-sm">
                      <div className="font-label text-label-md font-semibold text-on-surface uppercase">{t}</div>
                      <div className="font-body text-body-sm text-on-surface-variant">{d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-space-lg">
                <div className="flex items-center justify-between bg-surface-container p-space-md">
                  <div className="flex items-center gap-space-sm">
                    <Icon name="verified_user" className="text-secondary" />
                    <span className="font-label text-label-md font-semibold text-on-surface uppercase">
                      GCC Direct Clearance Guarantee
                    </span>
                  </div>
                  <span className="font-label text-label-sm text-on-surface-variant">&lt; 6 Hours Dwell Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor table */}
      <section className="w-full bg-surface-container px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px] space-y-space-lg">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <span className="mb-space-xs block font-label text-label-md tracking-widest text-secondary uppercase">
                Scheduled Transport Matrix
              </span>
              <h2 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
                Active Trade Corridors & Lead Schedules
              </h2>
            </div>
            <div className="font-label text-label-sm text-on-surface-variant">
              AUDITED AS OF: <span className="font-semibold text-on-surface">OCTOBER 2025</span> • REVISED
              WEEKLY
            </div>
          </div>
          <div className="w-full overflow-x-auto bg-surface-container-lowest shadow-sm">
            <table className="w-full text-left font-body text-body-sm">
              <thead className="bg-primary font-label text-label-md tracking-wider text-on-primary uppercase">
                <tr>
                  {['Origin Hub', 'Destination Port', 'Transport Mode', 'Carrier / Service', 'Transit Dwell', 'Schedule', 'Status'].map(
                    (h, i) => (
                      <th key={h} className={`px-space-md py-space-sm font-semibold ${i === 6 ? 'text-right' : ''}`}>
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {ROUTES.map(([originHub, destPort, modeLabel, carrier, dwell, schedule, air], i) => (
                  <tr
                    key={String(originHub)}
                    className={`transition-colors hover:bg-surface-container-low ${i % 2 ? 'bg-surface-container-low/30' : ''}`}
                  >
                    <td className="px-space-md py-space-sm font-semibold text-on-surface">{originHub}</td>
                    <td className="px-space-md py-space-sm">{destPort}</td>
                    <td className="px-space-md py-space-sm">
                      <span
                        className={`px-2 py-0.5 font-label text-label-sm uppercase ${air ? 'bg-secondary-container font-semibold text-on-secondary-container' : 'bg-surface-container'}`}
                      >
                        {modeLabel}
                      </span>
                    </td>
                    <td className="px-space-md py-space-sm font-mono text-label-sm">{carrier}</td>
                    <td className="px-space-md py-space-sm font-mono font-semibold text-on-surface">{dwell}</td>
                    <td className="px-space-md py-space-sm">{schedule}</td>
                    <td className="px-space-md py-space-sm text-right">
                      <span className="font-label text-label-sm font-bold text-secondary uppercase">
                        • Active Flow
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary px-margin-mobile py-space-xl text-on-primary md:px-margin lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-space-xl lg:flex-row">
          <div className="max-w-3xl space-y-space-sm">
            <span className="block font-label text-label-md tracking-widest text-secondary-fixed uppercase">
              Direct Corporate Engagement
            </span>
            <h2 className="font-display text-headline-lg tracking-tight text-surface-container-lowest uppercase">
              Ready to Allocate Volume or Reserve Long-Term Logistics Capacity?
            </h2>
            <p className="font-body text-body-md leading-relaxed text-outline-variant">
              Our global logistics desk prepares structured RFQ solutions including contracted demurrage
              guarantees, dedicated air charter slots, and cross-border customs advisory.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-space-md sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="bg-secondary-container px-space-xl py-space-md text-center font-display text-[15px] font-semibold tracking-wider text-on-secondary-container uppercase shadow-md transition-colors hover:bg-secondary-fixed"
            >
              Submit Logistics Tender (RFQ)
            </Link>
            <Link
              to="/about"
              className="bg-transparent px-space-lg py-space-md text-center font-display text-[15px] font-semibold tracking-wider text-surface-container-lowest uppercase transition-colors hover:bg-surface/10"
            >
              Download Network Manifest
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: [string, string][]
}) {
  return (
    <div className="space-y-space-xs">
      <label className="block font-label text-label-md font-semibold tracking-wider text-on-surface uppercase">
        {label}
      </label>
      <select
        className="w-full bg-surface-container-low px-space-md py-space-sm font-body text-body-sm text-on-surface focus:bg-surface focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
    </div>
  )
}

function ServiceBlock({
  badge,
  title,
  desc,
  img,
  imgAlt,
  caption,
  checks,
  stats,
  reverse,
}: {
  badge: string
  title: string
  desc: string
  img: string
  imgAlt: string
  caption: string
  checks: string[]
  stats: [string, string][]
  reverse: boolean
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-space-lg overflow-hidden bg-surface-container-lowest shadow-sm lg:grid-cols-12">
      <div
        className={`relative h-[360px] overflow-hidden bg-primary-container lg:col-span-7 lg:h-[460px] ${reverse ? 'order-1 lg:order-2' : ''}`}
      >
        <img alt={imgAlt} className="h-full w-full object-cover" src={img} />
        <div
          className={`absolute bottom-4 ${reverse ? 'right-4' : 'left-4'} flex items-center gap-2 bg-primary/80 px-space-md py-space-xs font-label text-label-sm text-on-primary backdrop-blur-md`}
        >
          <span className="h-2 w-2 rounded-full bg-secondary-fixed" />
          <span>{caption}</span>
        </div>
      </div>
      <div
        className={`space-y-space-md p-space-lg lg:col-span-5 lg:p-space-xl ${reverse ? 'order-2 lg:order-1' : ''}`}
      >
        <div className="space-y-space-xs">
          <span className="bg-surface-container px-2 py-0.5 font-label text-label-sm font-semibold text-secondary uppercase">
            {badge}
          </span>
          <h3 className="font-display text-headline-md tracking-tight text-on-surface uppercase">{title}</h3>
          <p className="font-body text-body-md leading-relaxed text-on-surface-variant">{desc}</p>
        </div>
        <div className="space-y-space-xs pt-space-xs">
          {checks.map((c) => (
            <div key={c} className="flex items-center gap-space-sm font-body text-body-sm text-on-surface">
              <Icon name="check_circle" className="text-[20px] text-secondary" />
              <span>{c}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-space-md pt-space-xs">
          {stats.map(([l, v]) => (
            <div key={l} className="bg-surface-container-low px-space-sm py-space-xs">
              <span className="block font-label text-label-sm text-on-surface-variant uppercase">{l}</span>
              <span className="font-display text-headline-sm font-semibold text-on-surface">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
