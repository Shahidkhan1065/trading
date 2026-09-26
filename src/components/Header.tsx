import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LOGO } from '../data/assets'
import { NAV_LINKS } from '../data/nav'
import { Icon } from './Icon'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] w-full items-center justify-between gap-gutter px-margin-mobile md:px-margin lg:px-margin-desktop">
        <Link to="/" className="flex shrink-0 items-center gap-space-md">
          <img alt="Al Ealami Trading Logo" className="h-8 w-auto object-contain" src={LOGO} />
          <div className="flex flex-col">
            <span className="font-display text-headline-sm tracking-tight text-on-surface uppercase">
              Al Ealami Trading
            </span>
            <span className="font-label text-label-sm uppercase tracking-widest text-on-surface-variant">
              Global Enterprise Network
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-space-lg xl:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-body text-body-sm uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'font-semibold text-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-space-md">
          <div className="hidden items-center gap-space-xs bg-surface-container px-space-sm py-space-xs font-label text-label-md text-on-surface-variant sm:flex">
            <span className="font-semibold text-on-surface">EN</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-on-surface">AR</span>
          </div>
          <div className="hidden items-center gap-space-xs font-label text-label-md text-on-surface-variant lg:flex">
            <Icon name="call" className="text-[18px] text-on-surface" />
            <span>+971 4 800 EALAMI</span>
          </div>
          <Link
            to="/contact"
            className="flex items-center justify-center bg-secondary-container px-space-md py-space-xs font-display text-[14px] leading-[20px] font-semibold uppercase tracking-wider text-on-secondary-container transition-colors hover:bg-secondary-fixed"
          >
            Request a Quote
          </Link>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
            <Icon name="person" className="text-[18px] text-on-primary" />
          </div>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-[22px] text-on-surface" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-surface-container bg-surface px-margin-mobile py-space-md xl:hidden">
          <nav className="flex flex-col gap-space-sm">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-body text-body-sm uppercase tracking-wider ${
                    isActive ? 'font-semibold text-on-surface' : 'text-on-surface-variant'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
