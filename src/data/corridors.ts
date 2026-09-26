export type CorridorKey = 'middle-east' | 'asia-pacific' | 'europe' | 'africa'

export const CORRIDOR_DATA: Record<
  CorridorKey,
  {
    badge: string
    title: string
    desc: string
    ports: string
    transit: string
    volume: string
    goods: string
  }
> = {
  'middle-east': {
    badge: 'GCC Sovereign Hub',
    title: 'Arabian Gulf • Red Sea Strategic Corridor',
    desc: 'Primary operational hub headquartered in Abu Dhabi with direct berthing rights across Jebel Ali (Dubai), Khalifa Port, Dammam, and King Abdullah Port. Connecting regional downstream energy with import heavy machinery.',
    ports: 'Jebel Ali • Khalifa • Dammam',
    transit: '2 - 4 Days Intra-GCC',
    volume: '240,000 MT / Month',
    goods: 'Steel, Polymers, Pipes, Petrochem',
  },
  'asia-pacific': {
    badge: 'Far East Gateway',
    title: 'Singapore Straits • East Asia Industrial Belt',
    desc: 'Direct container lanes and breakbulk transport linking Shanghai, Ningbo, Busan, and Singapore to GCC energy and African raw materials corridors with expedited customs transit.',
    ports: 'Singapore • Shanghai • Busan',
    transit: '12 - 16 Days Sea Freight',
    volume: '410,000 MT / Month',
    goods: 'Electronics, Heavy Equipment, Metals',
  },
  europe: {
    badge: 'North Atlantic Terminal',
    title: 'Rotterdam • Antwerp • Mediterranean Axis',
    desc: 'Deepwater container conduits and multimodal rail links across Northern Europe and the Mediterranean, interfacing specialized metallurgical products and high-grade industrial valves.',
    ports: 'Rotterdam • Antwerp • Genoa',
    transit: '14 - 18 Days Maritime Line',
    volume: '185,000 MT / Month',
    goods: 'Specialty Alloys, Pharma, Machinery',
  },
  africa: {
    badge: 'Sub-Saharan Corridor',
    title: 'Mombasa • Durban • Djibouti Maritime Arc',
    desc: 'Strategic mineral ore extraction export corridors and agricultural commodities delivery routes servicing East and West African sovereign distribution authorities.',
    ports: 'Mombasa • Dar es Salaam • Durban',
    transit: '7 - 10 Days Direct Corridor',
    volume: '130,000 MT / Month',
    goods: 'Agricultural Bulk, Copper, Cement',
  },
}

export const CORRIDOR_TABS: { key: CorridorKey; label: string }[] = [
  { key: 'middle-east', label: 'Middle East & GCC' },
  { key: 'asia-pacific', label: 'Asia-Pacific' },
  { key: 'europe', label: 'Europe / North Sea' },
  { key: 'africa', label: 'Africa East/West' },
]
