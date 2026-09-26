export const INCOTERMS = {
  CIF: {
    title: 'CIF — Cost, Insurance and Freight',
    desc: 'Al Ealami covers maritime transport costs and procures comprehensive cargo insurance (Institute Cargo Clauses A) up to the nominated port of destination. Risk transfers once goods are loaded on board at the origin terminal.',
    badge: 'Primary Sovereign Mode',
  },
  FOB: {
    title: 'FOB — Free On Board',
    desc: "Al Ealami clears goods for export and delivers them on board the buyer's nominated vessel at the designated origin port. The buyer assumes all costs, ocean freight, and insurance risk from that moment onward.",
    badge: 'Standard Breakbulk & Steel',
  },
  CFR: {
    title: 'CFR — Cost and Freight',
    desc: 'Al Ealami pays ocean freight carriage to the named discharge port. The buyer arranges marine cargo insurance and assumes transit loss risk upon loading onto the ocean carrier.',
    badge: 'Bulk Agri / Grain Traders',
  },
  DDP: {
    title: 'DDP — Delivered Duty Paid',
    desc: 'Al Ealami assumes maximum institutional obligation: handling ocean freight, port handling, customs clearance, import tariffs, and inland transport directly to buyer regional staging silos or warehouses.',
    badge: 'Turnkey Contractor Tier',
  },
  EXW: {
    title: 'EXW — Ex Works',
    desc: 'Commodities are prepared and verified at Al Ealami regional bonded warehouse or partner production mill. The buyer assumes total logistics responsibility and freight arrangement from warehouse gates.',
    badge: 'Local Spot Pickups',
  },
} as const

export type IncotermKey = keyof typeof INCOTERMS
