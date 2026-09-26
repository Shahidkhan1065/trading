import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { QualityPage } from './pages/QualityPage'
import { SupplyChainPage } from './pages/SupplyChainPage'
import { TradingPage } from './pages/TradingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="trading-divisions" element={<TradingPage />} />
          <Route path="supply-chain" element={<SupplyChainPage />} />
          <Route path="quality" element={<QualityPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
