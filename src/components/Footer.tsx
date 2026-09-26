import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../data/assets'
import { FOOTER_LINKS } from '../data/nav'

export function Footer() {
  const [email, setEmail] = useState('')

  function onSubscribe(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    alert('Subscribed to Al Ealami institutional commodity indices.')
    setEmail('')
  }

  return (
    <footer className="w-full bg-primary-container pt-space-xl pb-space-lg text-surface">
      <div className="mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-space-xl pb-space-xl md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Al Ealami Trading Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src={LOGO}
              />
              <span className="font-display text-headline-sm uppercase tracking-tight text-surface-container-lowest">
                Al Ealami
              </span>
            </div>
            <p className="font-body text-body-sm leading-relaxed text-on-primary-container">
              Institutional multi-commodity trading, cold-chain transport corridors, and sovereign
              procurement networks across GCC, Africa, and East Asia.
            </p>
            <div className="space-y-space-xs pt-space-xs">
              <p className="font-label text-label-sm uppercase tracking-wider text-secondary-fixed">
                Trade Accreditations
              </p>
              <div className="flex flex-wrap gap-space-xs">
                {['ISO 9001:2015', 'GDP PHARMA', 'HACCP CERTIFIED'].map((badge) => (
                  <span
                    key={badge}
                    className="bg-tertiary-container px-space-xs py-0.5 font-label text-label-sm text-tertiary-fixed"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-label text-label-lg uppercase tracking-wider text-secondary-fixed">
              Regional Operations
            </h4>
            <div className="space-y-space-sm font-body text-body-sm text-on-primary-container">
              <div className="space-y-0.5">
                <p className="font-medium text-surface-container-lowest">UAE Headquarters</p>
                <p>Level 28, Al Sila Tower, ADGM Square, Abu Dhabi, United Arab Emirates</p>
                <p className="font-label text-label-sm text-tertiary-fixed">+971 (0)2 449 8800</p>
              </div>
              <div className="space-y-0.5">
                <p className="font-medium text-surface-container-lowest">Dubai Logistics Hub</p>
                <p>JAFZA One, South Zone 1, Jebel Ali Free Zone, Dubai, UAE</p>
              </div>
              <div className="space-y-0.5">
                <p className="font-medium text-surface-container-lowest">Global Corridors</p>
                <p>Riyadh (KSA) • Singapore • Rotterdam (NL) • Mombasa (KE)</p>
              </div>
            </div>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-label text-label-lg uppercase tracking-wider text-secondary-fixed">
              Quick Navigation
            </h4>
            <ul className="space-y-space-xs font-body text-body-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-on-primary-container transition-colors hover:text-surface-container-lowest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-label text-label-lg uppercase tracking-wider text-secondary-fixed">
              Intelligence & Tenders
            </h4>
            <p className="font-body text-body-sm leading-relaxed text-on-primary-container">
              Subscribe to Al Ealami quarterly global commodity price indices and maritime shipping
              analytics.
            </p>
            <form className="flex flex-col gap-space-xs" onSubmit={onSubscribe}>
              <div className="flex w-full">
                <input
                  className="w-full bg-surface-container-low px-space-sm py-space-xs font-body text-body-sm text-on-surface focus:outline-none"
                  placeholder="executive@enterprise.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="shrink-0 bg-secondary-fixed px-space-md py-space-xs font-label text-label-md font-medium uppercase text-on-secondary-fixed transition-colors hover:bg-secondary-fixed-dim"
                >
                  Join
                </button>
              </div>
              <span className="font-label text-label-sm text-on-primary-container">
                Institutional dispatch only. Strict GDPR governance.
              </span>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md pt-space-lg font-label text-label-sm text-on-primary-container md:flex-row">
          <p>
            © 2025 Al Ealami Trading LLC. Commercial License No. CN-2849102. All Rights Reserved.
          </p>
          <div className="flex gap-space-md font-label text-label-sm">
            {['Incoterms 2020 Protocol', 'Trade Sanctions Policy', 'Terms of Carriage', 'Privacy Statement'].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors hover:text-surface-container-lowest"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
