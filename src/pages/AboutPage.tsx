import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { IMAGES } from '../data/assets'

export function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="relative w-full overflow-hidden bg-primary-container px-margin-mobile py-space-xl text-surface-container-lowest md:px-margin lg:px-margin-desktop">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${IMAGES.heroPort}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/80 to-primary-container/50" />
        <div className="relative z-10 mx-auto max-w-[1440px] space-y-space-sm py-space-lg">
          <span className="font-label text-label-md tracking-widest text-secondary-fixed uppercase">
            Institutional Profile
          </span>
          <h1 className="max-w-4xl font-display text-headline-lg tracking-tight uppercase md:text-display-xl">
            Building Sovereign-Grade Trade Infrastructure Across Global Corridors
          </h1>
          <p className="max-w-2xl font-body text-body-lg text-on-primary-container">
            Al Ealami Trading is an ADGM-registered multi-commodity trading house and logistics partner
            connecting manufacturers, industrial buyers, and maritime corridors across GCC, Africa, and East
            Asia.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-margin-mobile py-space-xl md:px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
          <div className="space-y-space-md lg:col-span-7">
            <h2 className="font-display text-headline-md text-on-surface uppercase">Our Mandate</h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              We structure institutional commodity flows — metals, agri-bulk, petrochemicals, and engineered
              electrical systems — with integrated ocean, air, and bonded warehouse capability. Every
              transaction is governed by Incoterms 2020, UCP 600 banking instruments, and independent
              third-party inspection.
            </p>
            <div className="grid grid-cols-2 gap-space-md pt-space-md">
              {[
                ['38+', 'Countries Served'],
                ['1.8M', 'MT Annual Throughput'],
                ['450k+', 'SQM Bonded Storage'],
                ['99.4%', 'On-Time Dispatch'],
              ].map(([v, l]) => (
                <div key={l} className="bg-surface-container-low p-space-md">
                  <p className="font-display text-display-xl font-bold text-secondary">{v}</p>
                  <p className="font-label text-label-md tracking-wider text-on-surface uppercase">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-space-md bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-5">
            <h3 className="font-display text-headline-sm text-on-surface uppercase">Governance Hubs</h3>
            {[
              ['UAE Headquarters', 'Level 28, Al Sila Tower, ADGM Square, Abu Dhabi'],
              ['Dubai Logistics', 'JAFZA One, South Zone 1, Jebel Ali Free Zone'],
              ['Singapore Desk', 'Marina Bay Financial Centre, Tower 3'],
              ['London Charter', '25 Old Broad Street, City of London'],
            ].map(([t, a]) => (
              <div key={t} className="border-b border-surface-container pb-space-sm">
                <p className="font-label text-label-md font-semibold text-secondary uppercase">{t}</p>
                <p className="font-body text-body-sm text-on-surface-variant">{a}</p>
              </div>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-space-xs bg-secondary-container px-space-lg py-space-sm font-display text-headline-sm font-semibold tracking-wider text-on-secondary-container uppercase hover:bg-secondary-fixed"
            >
              Engage Commercial Desk
              <Icon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
