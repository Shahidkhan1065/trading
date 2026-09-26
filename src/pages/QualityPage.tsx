import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'

const FRAMEWORKS = [
  {
    icon: 'verified_user',
    title: 'Third-Party Inspection',
    desc: 'SGS, Bureau Veritas, Intertek, and Saybolt pre-shipment and disport surveys with clean CCQ documentation for LC presentation.',
  },
  {
    icon: 'gavel',
    title: 'Sanctions & AML',
    desc: 'Tier-1 screening against OFAC, EU, and UN regimes. Level-3 KYC/AML on all counterparties before draft allocation.',
  },
  {
    icon: 'policy',
    title: 'Incoterms 2020',
    desc: 'CIF, FOB, CFR, DDP, and EXW protocols with transparent risk transfer and Institute Cargo Clauses A insurance where applicable.',
  },
  {
    icon: 'account_balance',
    title: 'Trade Finance',
    desc: 'Confirmed irrevocable LCs, DLCs, and SBLCs via Tier-1 banks under UCP 600. ADGM/DIFC escrow for sovereign contracts.',
  },
  {
    icon: 'local_shipping',
    title: 'GDP & HACCP',
    desc: 'Pharmaceutical GDP cold-chain corridors and HACCP-certified food-grade bonded vaults across JAFZA and regional hubs.',
  },
  {
    icon: 'workspace_premium',
    title: 'ISO Certifications',
    desc: 'ISO 9001:2015 quality management with continuous audit cycles across commercial and logistics operations.',
  },
]

export function QualityPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="w-full bg-surface-container-low px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px] space-y-space-sm">
          <span className="font-label text-label-md font-semibold tracking-widest text-secondary uppercase">
            Compliance & Trade Regulations
          </span>
          <h1 className="max-w-3xl font-display text-headline-lg tracking-tight text-on-surface uppercase">
            Quality Assurance & Institutional Compliance Framework
          </h1>
          <p className="max-w-2xl font-body text-body-lg text-on-surface-variant">
            Every Al Ealami shipment is bound to internationally enforceable inspection protocols, clean title
            transfers, and sovereign-grade regulatory compliance.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {FRAMEWORKS.map((f) => (
            <div key={f.title} className="space-y-space-sm bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center bg-surface-container text-primary-container">
                <Icon name={f.icon} className="text-[28px]" />
              </div>
              <h3 className="font-display text-headline-sm text-on-surface uppercase">{f.title}</h3>
              <p className="font-body text-body-sm text-on-surface-variant">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-space-xl bg-primary-container p-space-xl text-surface-container-lowest">
          <div className="flex flex-col items-start justify-between gap-space-lg lg:flex-row lg:items-center">
            <div className="space-y-space-xs">
              <h2 className="font-display text-headline-md uppercase">Need a Compliance Briefing?</h2>
              <p className="max-w-xl font-body text-body-md text-on-primary-container">
                Our legal and compliance desk can provide sanctions screening protocols, inspection agency
                appointments, and Incoterm risk allocation memos.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-secondary-container px-space-xl py-space-md font-display text-headline-sm font-semibold tracking-wider text-on-secondary-container uppercase hover:bg-secondary-fixed"
            >
              Contact Compliance Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
