import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <div className="min-h-screen bg-surface font-body text-body-md text-on-surface antialiased">
      <Header />
      <main className="w-full bg-surface pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
