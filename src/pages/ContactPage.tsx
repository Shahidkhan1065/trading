import { useState, type FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { IMAGES } from '../data/assets'

const FAQS = [
  {
    q: 'What standard payment and banking instruments are accepted for bulk transactions?',
    a: 'We work exclusively through Tier-1 and Top-50 global banks via Confirmed, Irrevocable Letters of Credit (LC), Documentary Letters of Credit (DLC payable 100% at sight at port of discharge after SGS inspection), and Standby Letters of Credit (SBLC). For select long-term revolving government contracts, sovereign guarantee frameworks and structured escrow via ADGM or DIFC courts are utilized.',
  },
  {
    q: 'What documentation is mandatory for initial ICPO/LOI processing?',
    a: "Every commercial inquiry must include an Irrevocable Corporate Purchase Order (ICPO) or formal Letter of Intent (LOI) on corporate letterhead, signed by an authorized signatory. It must state complete commodity grade specifications, target metric tonnage, acceptable delivery schedule, nominated discharge port, and the Buyer's designated banking institution with full contact details.",
  },
  {
    q: 'Which third-party inspection agencies are deployed for quality certification?',
    a: 'All physical commodity parcels are independently tested, inspected, and certified at both the loading port and port of discharge by internationally accredited inspection entities, predominantly SGS, Bureau Veritas, Intertek, or Saybolt. Official certificates of quantity and quality (Q&Q) form an integral requirement of our bill of lading documentation packets.',
  },
  {
    q: 'How does Al Ealami Trading manage maritime demurrage and laytime risk?',
    a: 'Demurrage agreements follow strict BIMCO charterparty standards (such as NOR, GENCON, or ASBATANKVOY). Laytime allowances and demurrage rates per day (or pro rata) are established transparently inside the Commercial Contract based on current market fixtures in Singapore, London, and the Gulf.',
  },
]

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [files, setFiles] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex w-full flex-col">
      <section className="relative w-full overflow-hidden bg-primary-container px-margin-mobile py-space-xl text-surface-container-lowest md:px-margin lg:px-margin-desktop">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/95 to-tertiary-container" />
        <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-space-lg lg:grid-cols-12">
          <div className="space-y-space-sm lg:col-span-8">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-highest/10 px-space-sm py-0.5 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-fixed" />
              <span className="font-label text-label-sm tracking-widest text-secondary-fixed uppercase">
                Global Commercial Gateway // RFQ Console 4.2
              </span>
            </div>
            <h1 className="font-display text-headline-lg tracking-tight text-surface-container-lowest uppercase">
              Partner With <span className="text-secondary-fixed">Al Ealami Trading</span>
            </h1>
            <p className="max-w-3xl font-body text-body-lg text-on-primary-container">
              Submit your commercial trading specifications, bulk commodity requirements, or institutional
              logistics partnership proposals. Handled directly by registered trade directors across ADGM and
              JAFZA trade desks.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-space-sm sm:flex-row lg:col-span-4 lg:flex-col">
            <div className="flex items-center justify-between bg-tertiary-container/80 p-space-sm backdrop-blur-md">
              <div className="space-y-0.5">
                <span className="block font-label text-label-sm text-on-primary-container uppercase">
                  Average Response Time
                </span>
                <span className="font-label text-label-lg font-semibold text-surface-container-lowest">
                  3 hrs 42 mins
                </span>
              </div>
              <Icon name="speed" className="text-[28px] text-secondary-fixed" />
            </div>
            <div className="flex items-center justify-between bg-tertiary-container/80 p-space-sm backdrop-blur-md">
              <div className="space-y-0.5">
                <span className="block font-label text-label-sm text-on-primary-container uppercase">
                  Sovereign & Institutional SLA
                </span>
                <span className="font-label text-label-lg font-semibold text-secondary-fixed">
                  &lt; 24h Commercial Term Sheet
                </span>
              </div>
              <Icon name="verified_user" className="text-[28px] text-secondary-fixed" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 items-start gap-gutter-desktop lg:grid-cols-12">
          <div className="flex flex-col space-y-space-md lg:col-span-7">
            <div className="space-y-space-lg bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center justify-between bg-surface-container-low p-space-sm">
                {['Scope', 'Entity', 'Specs', 'Dossier'].map((step, i) => (
                  <div key={step} className="flex items-center gap-space-xs text-on-surface">
                    {i > 0 && <div className="mx-1 h-px w-8 bg-outline-variant" />}
                    <span className="flex h-6 w-6 items-center justify-center bg-primary-container font-label text-label-sm font-semibold text-surface-container-lowest">
                      {i + 1}
                    </span>
                    <span className="hidden font-label text-label-md uppercase sm:inline">{step}</span>
                  </div>
                ))}
              </div>

              <form className="space-y-space-lg" onSubmit={onSubmit}>
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label text-label-sm tracking-wider text-secondary uppercase">
                      Step 01 // Inquiry Protocol
                    </span>
                    <span className="font-label text-label-sm text-on-surface-variant">Mandatory</span>
                  </div>
                  <h3 className="font-display text-headline-sm text-on-surface uppercase">
                    Select Procurement & Operational Track
                  </h3>
                  <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-3">
                    {[
                      ['swap_horiz', 'Commercial Trading', 'Bulk commodity supply, tender lifting & arbitrage', true],
                      ['directions_boat', 'Freight & Charter', 'Dry bulk charter, cold-chain corridors & 4PL', false],
                      ['handshake', 'Supplier / Producer', 'Refinery representation & accredited farming consortia', false],
                    ].map(([icon, title, desc, checked]) => (
                      <label
                        key={String(title)}
                        className="flex cursor-pointer select-none flex-col justify-between space-y-space-xs bg-surface p-space-sm transition-all hover:bg-surface-container"
                      >
                        <div className="flex items-center justify-between">
                          <Icon name={String(icon)} className="text-[22px] text-primary-container" />
                          <input
                            className="h-4 w-4 accent-primary-container"
                            defaultChecked={Boolean(checked)}
                            name="procurement_type"
                            type="radio"
                          />
                        </div>
                        <div>
                          <span className="block font-display text-[15px] leading-tight text-on-surface">
                            {title}
                          </span>
                          <span className="font-body text-body-sm leading-snug text-on-surface-variant">
                            {desc}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-space-sm pt-space-xs">
                  <span className="font-label text-label-sm tracking-wider text-secondary uppercase">
                    Step 02 // Legal & Authorized Representative
                  </span>
                  <h3 className="font-display text-headline-sm text-on-surface uppercase">
                    Commercial Entity Credentials
                  </h3>
                  <div className="grid grid-cols-1 gap-space-sm md:grid-cols-2">
                    <Input label="Full Legal Name" placeholder="e.g. Tariq Al-Hashimi" required />
                    <Input
                      label="Corporate Email (Institutional Domain)"
                      placeholder="name@company.com"
                      type="email"
                      required
                    />
                    <Input
                      label="Registered Entity Name"
                      placeholder="e.g. Emirates Global Industries FZCO"
                      required
                    />
                    <div className="space-y-1">
                      <label className="block font-label text-label-md text-on-surface-variant uppercase">
                        Country of Legal Domicile
                      </label>
                      <select className="w-full bg-surface px-space-sm py-2.5 font-body text-body-md text-on-surface focus:bg-surface-container focus:outline-none">
                        <option>United Arab Emirates (UAE)</option>
                        <option>Kingdom of Saudi Arabia (KSA)</option>
                        <option>Singapore</option>
                        <option>United Kingdom</option>
                        <option>Netherlands / EU</option>
                        <option>Qatar</option>
                        <option>United States</option>
                        <option>Other Sovereign Jurisdiction</option>
                      </select>
                    </div>
                    <div className="space-y-1 md:col-span-2">
                      <label className="block font-label text-label-md text-on-surface-variant uppercase">
                        Direct Line / Trade Desk WhatsApp with Country Code
                      </label>
                      <div className="flex">
                        <span className="flex items-center bg-surface-container px-space-sm py-2.5 font-label text-label-md text-on-surface select-none">
                          +971
                        </span>
                        <input
                          className="w-full bg-surface px-space-sm py-2.5 font-body text-body-md text-on-surface focus:bg-surface-container focus:outline-none"
                          placeholder="50 123 4567"
                          required
                          type="tel"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-space-sm pt-space-xs">
                  <span className="font-label text-label-sm tracking-wider text-secondary uppercase">
                    Step 03 // Trading & Shipping Parameters
                  </span>
                  <h3 className="font-display text-headline-sm text-on-surface uppercase">Specification Matrix</h3>
                  <div className="grid grid-cols-1 gap-space-sm md:grid-cols-2">
                    <div className="space-y-1">
                      <label className="block font-label text-label-md text-on-surface-variant uppercase">
                        Commodity Segment
                      </label>
                      <select className="w-full bg-surface px-space-sm py-2.5 font-body text-body-md text-on-surface focus:outline-none">
                        <option>Refined Petroleum & Petrochemicals (EN590 / Jet A1 / Bitumen)</option>
                        <option>Agricultural Staples (Milling Wheat, Non-GMO Soy, Cane Sugar)</option>
                        <option>Industrial Metals (Aluminium Billets, Copper Cathode Grade A)</option>
                        <option>Fertilizers & Minerals (Urea 46%, Rock Phosphate, DAP)</option>
                        <option>Cold-Chain Pharmaceuticals & Perishables</option>
                        <option>Custom Industrial Raw Materials</option>
                      </select>
                    </div>
                    <Input
                      label="Target Metric Volume / Tonnage"
                      placeholder="e.g. 50,000 MT / Month (12M Revolving)"
                      required
                    />
                    <div className="space-y-1">
                      <label className="block font-label text-label-md text-on-surface-variant uppercase">
                        Required Incoterm (ICC 2020)
                      </label>
                      <div className="grid grid-cols-4 gap-1">
                        {['CIF', 'FOB', 'CFR', 'EXW'].map((term, i) => (
                          <label
                            key={term}
                            className="cursor-pointer bg-surface py-2 text-center font-label text-label-md hover:bg-surface-container"
                          >
                            <input
                              className="sr-only"
                              defaultChecked={i === 0}
                              name="incoterm"
                              type="radio"
                              value={term}
                            />
                            <span className="block">{term}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <Input
                      label="Designated Port of Discharge (POD)"
                      placeholder="e.g. Port of Fujairah / Rotterdam / Jurong"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-space-sm pt-space-xs">
                  <span className="font-label text-label-sm tracking-wider text-secondary uppercase">
                    Step 04 // Dossier & Commercial Drafts
                  </span>
                  <h3 className="font-display text-headline-sm text-on-surface uppercase">
                    Upload Technical Specifications / LOI / ICPO
                  </h3>
                  <div className="space-y-1">
                    <label className="block font-label text-label-md text-on-surface-variant uppercase">
                      Additional Contractual Terms / Quality Grades
                    </label>
                    <textarea
                      className="w-full bg-surface p-space-sm font-body text-body-md text-on-surface focus:bg-surface-container focus:outline-none"
                      placeholder="Specify SGS requirements, inspection protocols, target delivery schedule, or payment instrument preference (DLC / SBLC / CAD)..."
                      rows={3}
                    />
                  </div>
                  <div className="group relative cursor-pointer bg-surface-container-low p-space-lg text-center transition-colors hover:bg-surface-container">
                    <input
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                      multiple
                      type="file"
                      onChange={() => setFiles(true)}
                    />
                    <div className="flex flex-col items-center justify-center space-y-space-xs">
                      <div className="flex h-12 w-12 items-center justify-center bg-surface-container-lowest text-primary-container shadow-sm transition-transform group-hover:scale-105">
                        <Icon name="cloud_upload" className="text-[24px]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-label text-label-lg font-semibold text-on-surface uppercase">
                          Drop Commercial Documents or Browse Files
                        </p>
                        <p className="font-body text-body-sm text-on-surface-variant">
                          Supports PDF, XLSX, DOCX (Max 25MB). Confidential Non-Disclosure Governed.
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-space-xs pt-space-xs font-label text-label-sm text-on-surface-variant">
                        <Icon name="lock" className="text-[16px] text-secondary" />
                        <span>256-Bit Encrypted Data Storage in UAE ADGM Data Centers</span>
                      </div>
                    </div>
                  </div>
                  {files && (
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center justify-between bg-surface p-space-xs">
                        <div className="flex items-center gap-space-xs font-label text-label-md text-on-surface">
                          <Icon name="description" className="text-[18px] text-secondary" />
                          <span>Spec_Sheet_EN590_Q2.pdf (2.4 MB)</span>
                        </div>
                        <button
                          className="font-label text-label-sm text-error uppercase hover:underline"
                          type="button"
                          onClick={() => setFiles(false)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-space-sm pt-space-sm">
                  <div className="flex items-start gap-space-sm bg-surface-container p-space-sm">
                    <Icon name="verified" className="mt-0.5 shrink-0 text-[24px] text-secondary" />
                    <div className="space-y-0.5">
                      <p className="font-label text-label-md font-bold tracking-wider text-on-surface uppercase">
                        Institutional SLA Commitment
                      </p>
                      <p className="font-body text-body-sm text-on-surface-variant">
                        Upon formal submission, a dedicated desk senior trader will evaluate compliance and
                        provide a binding or non-binding Indicative Commercial Term Sheet within 24 business
                        hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch justify-between gap-space-md sm:flex-row sm:items-center">
                    <label className="flex cursor-pointer items-center gap-space-xs select-none">
                      <input className="h-4 w-4 accent-primary-container" required type="checkbox" />
                      <span className="font-body text-body-sm text-on-surface-variant">
                        I confirm legal authority to request procurement terms on behalf of named entity.
                      </span>
                    </label>
                    <button
                      className="flex shrink-0 items-center justify-center gap-space-xs bg-secondary-container px-space-xl py-space-sm font-display text-[16px] leading-[22px] font-semibold tracking-wider text-on-secondary-container uppercase transition-all hover:bg-secondary-fixed"
                      type="submit"
                    >
                      <span>Transmit RFQ Dossier</span>
                      <Icon name="arrow_forward" className="text-[18px]" />
                    </button>
                  </div>
                </div>

                {submitted && (
                  <div className="bg-secondary-fixed/30 p-space-md">
                    <div className="flex items-center gap-space-sm text-on-surface">
                      <Icon name="check_circle" className="text-[28px] text-secondary" />
                      <div>
                        <h4 className="font-display text-headline-sm uppercase">
                          RFQ Dossier Received • Ref #AE-2025-9941
                        </h4>
                        <p className="font-body text-body-sm">
                          Allocated to UAE Regional Desk. Verification protocol initiated. Term sheet ETA:
                          Within 24h.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="bg-surface-container-low p-space-md">
              <div className="mb-space-sm flex items-center justify-between">
                <span className="font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                  Active Port Clearance Capacity
                </span>
                <span className="font-label text-label-sm font-semibold text-secondary">Q2 2025 LIVE</span>
              </div>
              <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-4">
                {[
                  ['Jebel Ali (JAFZA)', '340k MT', 'Clearance: 14 hrs'],
                  ['Fujairah Bunkering', '620k BBL', 'Berth Rate: 99.2%'],
                  ['Jurong, SG', '195k MT', 'Active Desks: 4'],
                  ['Rotterdam, NL', '410k MT', 'EU CE Transit'],
                ].map(([port, vol, meta]) => (
                  <div key={port} className="bg-surface-container-lowest p-space-sm">
                    <span className="block font-label text-label-sm text-on-surface-variant uppercase">{port}</span>
                    <span className="font-display text-headline-sm text-on-surface">{vol}</span>
                    <span className="block font-label text-label-sm text-secondary">{meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-space-md lg:col-span-5">
            <div className="relative overflow-hidden bg-primary p-space-md text-surface-container-lowest">
              <div className="relative z-10 flex items-start justify-between">
                <div className="space-y-1">
                  <span className="block font-label text-label-sm tracking-wider text-secondary-fixed uppercase">
                    24/7 Global Maritime & Cargo Hotline
                  </span>
                  <h4 className="font-display text-headline-sm tracking-tight text-surface-container-lowest uppercase">
                    Active Vessel Divergence & Urgent Discharge
                  </h4>
                  <p className="font-body text-body-sm text-on-primary-container">
                    For existing vessels at anchor, customs delays, or sovereign tender emergencies.
                  </p>
                </div>
                <Icon name="crisis_alert" className="shrink-0 text-[32px] text-secondary-fixed" />
              </div>
              <div className="relative z-10 mt-space-sm flex flex-col items-stretch justify-between gap-space-xs pt-space-sm sm:flex-row sm:items-center">
                <a
                  className="flex items-center gap-space-xs font-label text-label-lg font-bold tracking-wider text-secondary-fixed hover:underline"
                  href="tel:+9714800325264"
                >
                  <Icon name="phone_in_talk" className="text-[18px]" />
                  <span>+971 4 800 EALAMI (Ext 9)</span>
                </a>
                <span className="bg-surface-container-lowest/10 px-space-xs py-0.5 font-label text-label-sm text-surface-container-lowest">
                  Priority Band 1
                </span>
              </div>
            </div>

            <div className="space-y-space-md bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
                  Corporate Governance
                </span>
                <span className="bg-surface-container px-space-xs py-0.5 font-label text-label-sm text-on-surface uppercase">
                  HQ Registry
                </span>
              </div>
              <div>
                <h3 className="font-display text-headline-sm text-on-surface uppercase">
                  Regional Headquarters // UAE
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Strategic governance, physical charter operations, and institutional escrow clearing.
                </p>
              </div>
              <div className="space-y-space-xs font-body text-body-sm">
                <div className="flex items-start gap-space-xs">
                  <Icon name="location_on" className="mt-0.5 shrink-0 text-[20px] text-primary-container" />
                  <span className="text-on-surface">
                    Level 28, Al Sila Tower, Abu Dhabi Global Market (ADGM) Square, Al Maryah Island, Abu
                    Dhabi, UAE
                  </span>
                </div>
                <div className="flex items-start gap-space-xs">
                  <Icon name="corporate_fare" className="mt-0.5 shrink-0 text-[20px] text-primary-container" />
                  <span className="text-on-surface">
                    Commercial Operations Center: Office 1402, JAFZA One, Jebel Ali Port, Dubai, UAE
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <Icon name="schedule" className="shrink-0 text-[20px] text-primary-container" />
                  <span className="font-label text-label-md text-on-surface-variant">
                    08:00 - 18:30 GST (GMT+4) • Mon - Fri
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <Icon name="call" className="shrink-0 text-[20px] text-primary-container" />
                  <span className="font-label text-label-md text-on-surface">+971 (0)2 449 8800</span>
                </div>
              </div>
              <div
                className="relative flex h-44 w-full items-end overflow-hidden bg-surface-container bg-cover bg-center p-space-sm"
                style={{ backgroundImage: `url('${IMAGES.adgm}')` }}
              >
                <div className="max-w-xs bg-primary-container/90 p-space-xs text-surface-container-lowest backdrop-blur-md">
                  <span className="block font-label text-label-sm tracking-wider text-secondary-fixed uppercase">
                    ADGM Trade Terminal
                  </span>
                  <span className="block font-body text-[12px] leading-tight text-surface-dim">
                    Direct access to maritime arbitration tribunals & financial exchanges.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-space-md bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-headline-sm text-on-surface uppercase">Global Branch Corridors</h4>
                <span className="font-label text-label-sm text-on-surface-variant uppercase">3 Overseas Desks</span>
              </div>
              <div className="space-y-space-sm">
                {[
                  [
                    'Asia-Pacific Trade Desk • Singapore',
                    'GMT+8',
                    'Marina Bay Financial Centre, Tower 3, Singapore 018982',
                    'Commodities: Fuel Oil • Agribulk',
                    '+65 6813 9400',
                  ],
                  [
                    'European & Charter Desk • London',
                    'GMT+0',
                    '25 Old Broad Street, City of London, EC2N 1HN, United Kingdom',
                    'Charter: Baltics / ARA Corridors',
                    '+44 20 7946 0812',
                  ],
                  [
                    'Red Sea Operations • Jeddah, KSA',
                    'GMT+3',
                    'King Abdullah Economic City (KAEC) Port Gateways, Jeddah, Saudi Arabia',
                    'Bunkering: Red Sea Transits',
                    '+966 12 608 7720',
                  ],
                ].map(([title, tz, addr, focus, phone]) => (
                  <div key={title} className="space-y-1 bg-surface-container-low p-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[16px] font-semibold text-on-surface uppercase">
                        {title}
                      </span>
                      <span className="bg-surface-container px-space-xs py-0.5 font-label text-label-sm text-on-surface">
                        {tz}
                      </span>
                    </div>
                    <p className="font-body text-body-sm text-on-surface-variant">{addr}</p>
                    <div className="flex items-center justify-between pt-1 font-label text-label-sm">
                      <span className="font-medium text-secondary">{focus}</span>
                      <span className="font-label text-label-md text-on-surface">{phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-space-sm bg-surface-container-lowest p-space-lg shadow-sm">
              <h4 className="font-display text-headline-sm text-on-surface uppercase">Direct Commercial Inboxes</h4>
              <div className="space-y-space-xs">
                {[
                  ['mark_email_read', 'Commercial & Bulk Purchasing', 'trade@alealamitrading.com'],
                  ['local_shipping', 'Vessel Chartering & Port Logistics', 'logistics@alealamitrading.com'],
                  ['gavel', 'Legal, Escrow & Compliance Verification', 'compliance@alealamitrading.com'],
                ].map(([icon, title, email]) => (
                  <a
                    key={email}
                    className="group flex items-center justify-between bg-surface p-space-xs transition-colors hover:bg-surface-container"
                    href={`mailto:${email}`}
                  >
                    <div className="flex items-center gap-space-xs">
                      <Icon name={icon} className="text-[20px] text-primary-container" />
                      <div>
                        <span className="block font-label text-label-md font-semibold text-on-surface">
                          {title}
                        </span>
                        <span className="font-label text-label-sm text-on-surface-variant">{email}</span>
                      </div>
                    </div>
                    <Icon
                      name="chevron_right"
                      className="text-[18px] text-on-surface-variant transition-transform group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-space-xs bg-surface-container-high p-space-md">
              <div className="flex items-center gap-space-xs">
                <Icon name="policy" className="text-[22px] text-secondary" />
                <span className="font-label text-label-md font-semibold text-on-surface uppercase">
                  International Sanctions & AML Compliance
                </span>
              </div>
              <p className="font-body text-body-sm text-on-surface-variant">
                Al Ealami Trading enforces strict Tier-1 compliance against OFAC, EU Sanctions, and UN Security
                Council regimes. All buyers and sellers are subject to Level-3 KYC/AML screening prior to draft
                allocation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-space-xl pt-space-lg">
          <div className="mb-space-lg max-w-4xl space-y-space-sm">
            <span className="font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
              Verification & Process Guidance
            </span>
            <h2 className="font-display text-headline-lg tracking-tight text-on-surface uppercase">
              Frequently Asked Commercial Questions
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              Crucial information regarding banking instruments, port discharge inspections, and LOI
              validations.
            </p>
          </div>
          <div className="space-y-space-xs">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className="overflow-hidden bg-surface-container-lowest shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between p-space-md text-left transition-colors hover:bg-surface"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-display text-[18px] text-on-surface uppercase">{faq.q}</span>
                  <Icon
                    name="expand_more"
                    className={`text-[24px] text-on-surface-variant transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="space-y-2 bg-surface-container-lowest p-space-md pt-0 font-body text-body-md text-on-surface-variant">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Input({
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
    <div className="space-y-1">
      <label className="block font-label text-label-md text-on-surface-variant uppercase">{label}</label>
      <input
        className="w-full bg-surface px-space-sm py-2.5 font-body text-body-md text-on-surface transition-colors focus:bg-surface-container focus:outline-none"
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  )
}
