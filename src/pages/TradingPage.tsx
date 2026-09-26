import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { IMAGES } from '../data/assets'
import { INCOTERMS, type IncotermKey } from '../data/incoterms'

type Filter = 'all' | 'metals' | 'electrical' | 'agri' | 'chemicals'

const TABS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Divisions (4)' },
  { id: 'metals', label: 'Industrial & Metals' },
  { id: 'electrical', label: 'Electrical & Construction' },
  { id: 'agri', label: 'Agri-Commodities & Food' },
  { id: 'chemicals', label: 'Energy & Chemicals' },
]

const DIVISIONS = [
  {
    category: 'metals' as const,
    badge: 'Division 01 // Heavy Metallurgy',
    code: 'MET-IND-880',
    title: 'Industrial Raw Materials & Structural Steel',
    desc: 'Consolidated procurement and direct mill allocation for structural steel shapes, seamless carbon line pipe, reinforcing bar, and non-ferrous ingots serving EPC contractors, offshore yards, and mega-infrastructure developments across GCC and East Africa.',
    img: IMAGES.metals,
    imgAlt: 'Al Ealami Industrial Steel and Heavy Raw Materials Logistics Warehouse',
    corridor: 'Corridor: Jebel Ali • Dammam',
    stock: 'Ready Stock 140K MT',
    imageLeft: true,
    specs: [
      ['Specification Standards', 'ASTM A36, A572, A106, DIN 17100, JIS G3101', 'EN 10025 S355JR Available'],
      ['Minimum Order Quantity (MOQ)', '500 Metric Tons (Breakbulk)', 'FCL Containerized: 100 MT'],
      ['Primary Origin Points', 'Japan, South Korea, Turkey, UAE', 'Mill Test Certificates 3.1 & 3.2'],
    ],
    chips: ['Seamless C-Steel', 'H-Beams & UB', 'Deformed Rebar Gr 60', 'Hot Rolled Coils (HRC)'],
    cta: 'Inquire Metallurgy',
    division: 'Industrial Raw Materials & Steel',
  },
  {
    category: 'electrical' as const,
    badge: 'Division 02 // Power & Civil Works',
    code: 'ELEC-INFRA-410',
    title: 'Construction & Heavy Electrical Supplies',
    desc: 'Engineered electrical balance of plant (eBoP), high and extra-high voltage transmission cabling, substation switchgear modules, ductile iron pressure piping, and heavy earthwork hardware engineered for power generation, municipal utilities, and renewable solar arrays.',
    img: IMAGES.electrical,
    imgAlt: 'Power distribution and cable infrastructure warehouse',
    corridor: 'Tested: KEMA & ASTA Certified',
    stock: 'Immediate Dispatch',
    imageLeft: false,
    specs: [
      ['Specification Standards', 'IEC 60502, IEC 60840, IEEE C37, BS 5467', 'ISO 2531 Ductile Water Piping'],
      ['Minimum Order Quantity (MOQ)', '3,000 Meters (HV / MV Cable)', 'Full Substation Bay Assembly Sets'],
      ['Primary Origin Points', 'Germany, France, Saudi Arabia, Oman', 'Pre-commissioning factory witness'],
    ],
    chips: ['XLPE Armoured 33kV', 'GIS Substation Skids', 'DI Piping Class K9', 'Copper Busbars (99.99%)'],
    cta: 'Inquire Electrical',
    division: 'Construction & Heavy Electrical Supplies',
  },
  {
    category: 'agri' as const,
    badge: 'Division 03 // Essential Food Security',
    code: 'AGRI-GRAIN-109',
    title: 'Agricultural Commodities & Bulk Foodstuff',
    desc: 'National strategic reserve trading and commercial supply of milling wheat, animal feed barley, non-GMO yellow corn, refined ICUMSA 45 white cane sugar, and bulk crude sunflower/palm oils. Backed by dedicated charter tonnage and port transshipment elevators.',
    img: IMAGES.agri,
    imgAlt: 'Agricultural grain shipping and harbor discharge terminal',
    corridor: 'Corridors: Black Sea • Santos • Salalah',
    stock: 'GAFTA • FOSFA Compliant',
    imageLeft: true,
    specs: [
      ['Specification Standards', 'GAFTA 119/120, FOSFA 53, ISO 22000, HACCP', 'Phytosanitary & Radiation Clean'],
      ['Minimum Order Quantity (MOQ)', '12,500 MT (Handymax Lot)', 'Sugar: 2,500 MT Containerized'],
      ['Primary Origin Points', 'Brazil, Australia, Romania, India, Ukraine', 'Independent SGS Loading Inspection'],
    ],
    chips: ['Milling Wheat 12.5%', 'ICUMSA 45 Sugar', 'Crude Degummed Soy', 'Feed Barley Grade 2'],
    cta: 'Inquire Agri-Bulk',
    division: 'Agricultural Commodities & Foodstuff',
  },
  {
    category: 'chemicals' as const,
    badge: 'Division 04 // Polymers & Specialized Liquids',
    code: 'POLY-CHEM-602',
    title: 'Petrochemicals & Industrial Polymers',
    desc: 'High-throughput commercial allocation of virgin polymer resins (HDPE, LDPE, PP, PVC), industrial chemical solvents, glycols, and synthetic lubricants. Engineered for blow molding, automotive extrusion, flexible film packaging, and industrial chemical processing plants.',
    img: IMAGES.chemicals,
    imgAlt: 'Petrochemical and polymer processing logistics facility',
    corridor: 'EU REACH & GHS Certified',
    stock: 'ISO Tank / Bulk Bag',
    imageLeft: false,
    specs: [
      ['Specification Standards', 'ASTM D1238 (MFI), ISO 1133, REACH (EC) 1907/2006', 'Full SDS & Certificate of Analysis'],
      ['Minimum Order Quantity (MOQ)', '100 Metric Tons (Resins)', 'Liquid Bulk: 4 x 24,000L ISO Tanks'],
      ['Primary Origin Points', 'Saudi Arabia, UAE, South Korea, Singapore', 'Dedicated bonded chemical storage'],
    ],
    chips: ['HDPE Film Grade', 'PP Homo/Copolymer', 'Monoethylene Glycol (MEG)', 'PVC Suspension K-67'],
    cta: 'Inquire Petrochemicals',
    division: 'Petrochemicals & Industrial Polymers',
  },
]

export function TradingPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [incoterm, setIncoterm] = useState<IncotermKey>('CIF')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalDivision, setModalDivision] = useState('Industrial Raw Materials & Steel')

  const visible = DIVISIONS.filter((d) => filter === 'all' || d.category === filter)
  const term = INCOTERMS[incoterm]

  function openModal(division: string) {
    setModalDivision(division)
    setModalOpen(true)
  }

  function onSpecSubmit(e: FormEvent) {
    e.preventDefault()
    alert('Specification request logged. Dispatching encrypted telemetry to the relevant commodity desk.')
    setModalOpen(false)
  }

  return (
    <div className="flex w-full flex-col">
      <section className="w-full bg-surface-container-low px-margin-mobile py-space-sm md:px-margin lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-space-sm font-label text-label-md">
          <div className="flex items-center gap-space-xs text-on-surface-variant">
            <Link to="/" className="tracking-wider uppercase transition-colors hover:text-on-surface">
              Hub
            </Link>
            <span>/</span>
            <span className="font-semibold tracking-wider text-on-surface uppercase">Trading Divisions</span>
            <span>/</span>
            <span className="font-semibold tracking-wider text-secondary uppercase">Commodity Catalog 2025</span>
          </div>
          <div className="flex items-center gap-space-md font-label text-label-sm text-on-surface-variant">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-secondary" /> GLOBAL INVENTORY: 418,200 MT
            </span>
            <span className="hidden text-outline-variant sm:inline">|</span>
            <span className="hidden sm:inline">INSPECTION ACCREDITATION: SGS / BV / INTERTEK</span>
            <span className="hidden text-outline-variant md:inline">|</span>
            <span className="hidden md:inline">SYSTEM STATUS: ALL CORRIDORS ACTIVE</span>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-space-xl lg:grid-cols-12">
          <div className="space-y-space-sm lg:col-span-8">
            <div className="inline-flex items-center gap-space-xs bg-surface-container px-space-sm py-0.5 font-label text-label-sm tracking-widest text-on-surface-variant uppercase">
              <Icon name="verified" className="text-[14px] text-secondary" />
              Institutional Supply Chain Infrastructure
            </div>
            <h1 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
              Commercial Trading Divisions & Specialized Portfolios
            </h1>
            <p className="max-w-3xl font-body text-body-lg text-on-surface-variant">
              Direct sovereign-tier procurement, bulk allocation, and multi-modal logistics networks across
              heavy metallurgy, infrastructure systems, essential foodstuffs, and industrial polymers.
            </p>
          </div>
          <div className="flex flex-col items-stretch justify-end gap-space-xs sm:flex-row lg:col-span-4 lg:flex-col">
            <button
              type="button"
              className="flex items-center justify-center gap-space-xs bg-primary px-space-md py-space-sm font-display text-headline-sm tracking-wider text-on-primary uppercase shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
              onClick={() =>
                alert(
                  'Generating institutional PDF specification catalog for Al Ealami Trading Divisions (18.4 MB)... Download will begin shortly.',
                )
              }
            >
              <Icon name="download" className="text-[20px] text-secondary-fixed" />
              Download Spec Catalog (PDF)
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-space-xs bg-secondary-container px-space-md py-space-sm font-display text-headline-sm tracking-wider text-on-secondary-container uppercase shadow-sm transition-all hover:bg-secondary-fixed"
              onClick={() => openModal('General Commodity Inquiries')}
            >
              <Icon name="request_quote" className="text-[20px]" />
              Request Custom Specs
            </button>
          </div>
        </div>

        <div className="mx-auto mt-space-xl flex max-w-[1440px] flex-wrap gap-space-xs bg-surface-container-low p-1.5 shadow-sm">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-space-md py-space-xs font-label text-label-md tracking-wider uppercase transition-colors ${
                filter === tab.id
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] space-y-space-xl px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        {visible.map((d) => (
          <article
            key={d.code}
            className="w-full overflow-hidden bg-surface-container-lowest shadow-sm"
            data-category={d.category}
          >
            <div className="h-1.5 w-full bg-secondary-fixed" />
            <div className="grid grid-cols-1 xl:grid-cols-12">
              <div
                className={`relative flex flex-col bg-surface-container-high xl:col-span-5 ${
                  d.imageLeft ? '' : 'order-1 xl:order-2'
                }`}
              >
                <div className="relative h-80 min-h-[340px] w-full xl:h-full">
                  <img alt={d.imgAlt} className="h-full w-full object-cover" src={d.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between font-label text-label-sm text-on-primary">
                    <span className="bg-primary/80 px-2 py-1 tracking-wider uppercase backdrop-blur-sm">
                      {d.corridor}
                    </span>
                    <span className="bg-secondary px-2 py-1 font-semibold text-on-secondary uppercase">
                      {d.stock}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col justify-between space-y-space-md p-space-lg md:p-space-xl xl:col-span-7 ${
                  d.imageLeft ? '' : 'order-2 xl:order-1'
                }`}
              >
                <div>
                  <div className="mb-space-xs flex flex-wrap items-center justify-between gap-space-xs">
                    <span className="font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
                      {d.badge}
                    </span>
                    <span className="bg-surface-container px-2 py-0.5 font-label text-label-sm text-on-surface-variant uppercase">
                      Code: {d.code}
                    </span>
                  </div>
                  <h2 className="font-display text-headline-md tracking-tight text-on-surface uppercase">
                    {d.title}
                  </h2>
                  <p className="mt-space-xs font-body text-body-md leading-relaxed text-on-surface-variant">
                    {d.desc}
                  </p>
                </div>

                <div className="space-y-space-sm bg-surface-container-low p-space-md">
                  <h3 className="flex items-center gap-1.5 font-label text-label-md font-semibold tracking-wider text-on-surface uppercase">
                    <Icon name="tune" className="text-[16px] text-secondary" />
                    Institutional Specifications & Standards
                  </h3>
                  <div className="grid grid-cols-1 gap-space-sm font-body text-body-sm md:grid-cols-3">
                    {d.specs.map(([label, value, note]) => (
                      <div key={label} className="bg-surface-container-lowest p-space-sm">
                        <span className="block font-label text-label-sm text-on-surface-variant uppercase">
                          {label}
                        </span>
                        <span className="mt-1 block font-label text-label-md font-semibold text-on-surface">
                          {value}
                        </span>
                        <span className="mt-1 block font-label text-label-sm text-on-surface-variant">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-space-md pt-space-xs sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1.5">
                    {d.chips.map((chip) => (
                      <span
                        key={chip}
                        className="bg-surface-container px-2 py-1 font-label text-label-sm text-on-surface"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="flex shrink-0 items-center gap-1 bg-primary px-space-md py-space-xs font-label text-label-md tracking-wider text-on-primary uppercase transition-colors hover:bg-secondary hover:text-on-secondary"
                    onClick={() => openModal(d.division)}
                  >
                    {d.cta}
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Trade Guarantee */}
      <section className="w-full bg-surface-container-low px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px] space-y-space-lg">
          <div className="flex flex-col items-start justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <span className="block font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
                Institutional Compliance Tier
              </span>
              <h2 className="font-display text-headline-md tracking-tight text-on-surface uppercase">
                Trade Guarantee & Quality Verification Framework
              </h2>
            </div>
            <p className="max-w-xl font-body text-body-sm text-on-surface-variant">
              Every shipment initiated by Al Ealami Trading is bound to strict internationally enforceable
              inspection protocols, clean title transfers, and Incoterms 2020 regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
            <div className="space-y-space-md bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-6">
              <div className="flex items-center gap-space-sm pb-space-xs">
                <Icon name="verified_user" className="text-[28px] text-secondary" />
                <div>
                  <h3 className="font-display text-headline-sm text-on-surface uppercase">
                    Accredited Partner Testing
                  </h3>
                  <p className="font-label text-label-sm text-on-surface-variant">
                    Mandatory Pre-Shipment & Disport Surveys
                  </p>
                </div>
              </div>
              <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
                All metallurgical assays, grain moisture-content analyses, and chemical compositions are
                independently validated by third-party laboratories. Clean Certificates of Quantity & Quality
                (CCQ) accompany financial documentation for immediate letter-of-credit presentation.
              </p>
              <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
                {[
                  ['SGS S.A.', 'Chemical & Bulk Grain'],
                  ['Bureau Veritas', 'Marine & Metallurgy'],
                  ['Intertek Group', 'Polymer & Heavy BoP'],
                ].map(([name, role]) => (
                  <div key={name} className="bg-surface-container p-space-sm text-center">
                    <span className="block font-label text-label-md font-semibold text-on-surface uppercase">
                      {name}
                    </span>
                    <span className="mt-1 block font-label text-label-sm text-on-surface-variant">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-space-md bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-6">
              <div>
                <div className="flex items-center gap-space-sm pb-space-xs">
                  <Icon name="local_shipping" className="text-[28px] text-secondary" />
                  <div>
                    <h3 className="font-display text-headline-sm text-on-surface uppercase">
                      Supported Incoterms® 2020 Protocols
                    </h3>
                    <p className="font-label text-label-sm text-on-surface-variant">
                      Click any term below to inspect risk & insurance allocation
                    </p>
                  </div>
                </div>
                <div className="mt-space-md grid grid-cols-5 gap-space-xs">
                  {(Object.keys(INCOTERMS) as IncotermKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setIncoterm(key)}
                      className={`py-space-sm text-center font-label text-label-md tracking-wider uppercase transition-colors ${
                        incoterm === key
                          ? 'bg-primary text-secondary-fixed'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
                <div className="mt-space-sm bg-surface-container p-space-md transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-label text-label-md font-semibold text-on-surface uppercase">
                      {term.title}
                    </span>
                    <span className="bg-secondary px-2 py-0.5 font-label text-label-sm text-on-secondary uppercase">
                      {term.badge}
                    </span>
                  </div>
                  <p className="mt-2 font-body text-body-sm text-on-surface-variant">{term.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-xs font-label text-label-sm text-on-surface-variant">
                <span>Arbitration: LCIA London / ADGM Courts</span>
                <span className="font-medium text-secondary">UCP 600 Letter of Credit Banking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-container px-margin-mobile py-space-xl text-surface md:px-margin lg:px-margin-desktop">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="space-y-space-sm lg:col-span-8">
            <span className="block font-label text-label-sm tracking-widest text-secondary-fixed uppercase">
              Direct Commercial Desk
            </span>
            <h2 className="font-display text-headline-lg tracking-tight text-surface-container-lowest uppercase">
              Require Specialized Metallurgical Graces or Bespoke Bulk Tenders?
            </h2>
            <p className="max-w-2xl font-body text-body-lg text-on-primary-container">
              Our international trade finance desk executes custom bilateral supply agreements, sovereign
              barter arrangements, and long-term delivery off-take agreements.
            </p>
          </div>
          <div className="flex flex-col gap-space-sm sm:flex-row lg:col-span-4 lg:flex-col">
            <Link
              to="/contact"
              className="bg-secondary-fixed px-space-lg py-space-md text-center font-display text-headline-sm tracking-wider text-on-secondary-fixed uppercase shadow-md transition-colors hover:bg-secondary-fixed-dim"
            >
              Open Formal Tender / RFQ
            </Link>
            <button
              type="button"
              className="bg-surface-container-lowest/10 px-space-lg py-space-sm text-center font-label text-label-md tracking-wider text-surface uppercase transition-colors hover:bg-surface-container-lowest/20"
              onClick={() => alert('Al Ealami Commodity Index v2025 dispatched to clipboard and downloaded.')}
            >
              Download Product Spec Sheet Index
            </button>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-container/70 p-4 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div className="relative w-full max-w-2xl space-y-space-md bg-surface-container-lowest p-space-lg shadow-2xl md:p-space-xl">
            <div className="flex items-center justify-between pb-space-sm">
              <div>
                <span className="block font-label text-label-sm font-semibold text-secondary uppercase">
                  Commercial Desk Inquiry
                </span>
                <h3 className="font-display text-headline-sm text-on-surface uppercase">
                  Request Custom Technical Specifications
                </h3>
              </div>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center bg-surface-container text-on-surface hover:bg-surface-container-high"
                onClick={() => setModalOpen(false)}
              >
                <Icon name="close" className="text-[20px]" />
              </button>
            </div>
            <form className="space-y-space-sm" onSubmit={onSpecSubmit}>
              <div className="grid grid-cols-1 gap-space-sm md:grid-cols-2">
                <div>
                  <label className="mb-1 block font-label text-label-sm text-on-surface-variant uppercase">
                    Target Trading Division
                  </label>
                  <input
                    className="w-full bg-surface-container-low p-space-sm font-body text-body-sm text-on-surface focus:bg-surface-container focus:outline-none"
                    value={modalDivision}
                    onChange={(e) => setModalDivision(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-1 block font-label text-label-sm text-on-surface-variant uppercase">
                    Target Volume (Metric Tons)
                  </label>
                  <input
                    className="w-full bg-surface-container-low p-space-sm font-body text-body-sm text-on-surface focus:bg-surface-container focus:outline-none"
                    placeholder="e.g. 5,000 MT"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-space-sm md:grid-cols-2">
                <div>
                  <label className="mb-1 block font-label text-label-sm text-on-surface-variant uppercase">
                    Preferred Incoterm
                  </label>
                  <select className="w-full bg-surface-container-low p-space-sm font-body text-body-sm text-on-surface focus:outline-none">
                    <option value="CIF">CIF — Port of Destination</option>
                    <option value="FOB">FOB — Port of Loading</option>
                    <option value="CFR">CFR — Port of Destination</option>
                    <option value="DDP">DDP — Buyer Warehouse</option>
                    <option value="EXW">EXW — Origin Facility</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-label text-label-sm text-on-surface-variant uppercase">
                    Destination Port / Hub
                  </label>
                  <input
                    className="w-full bg-surface-container-low p-space-sm font-body text-body-sm text-on-surface focus:outline-none"
                    placeholder="e.g. Port of Rotterdam / Jebel Ali"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block font-label text-label-sm text-on-surface-variant uppercase">
                  Corporate Email & Entity Name
                </label>
                <input
                  className="w-full bg-surface-container-low p-space-sm font-body text-body-sm text-on-surface focus:outline-none"
                  placeholder="procurement.officer@enterprise.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="mb-1 block font-label text-label-sm text-on-surface-variant uppercase">
                  Bespoke Metallurgy / Chemical / Assay Requirements
                </label>
                <textarea
                  className="w-full bg-surface-container-low p-space-sm font-body text-body-sm text-on-surface focus:outline-none"
                  placeholder="Provide detailed grade parameters, tensile strength, packing specs..."
                  rows={3}
                />
              </div>
              <div className="flex items-center justify-between pt-space-xs">
                <span className="flex items-center gap-1 font-label text-label-sm text-on-surface-variant">
                  <Icon name="lock" className="text-[16px] text-secondary" />
                  Encrypted Sovereign Routing
                </span>
                <button
                  type="submit"
                  className="bg-secondary px-space-lg py-space-sm font-label text-label-md font-semibold tracking-wider text-on-secondary uppercase transition-colors hover:bg-secondary-fixed-dim"
                >
                  Transmit RFQ Dispatch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
