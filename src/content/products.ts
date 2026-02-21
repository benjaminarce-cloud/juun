// ─────────────────────────────────────────────────────────
// JUUN wellness — Product Configuration
// Flavors, packs, and checkout params live here.
// ─────────────────────────────────────────────────────────

export interface Flavor {
  key: string
  label: string         // Display name
  canLabel: string      // Shorter label on can
  gradient: {
    from: string
    to: string
  }
  glow: string          // rgba for ambient glow behind can
  accentText: string    // text color for flavor name
}

export interface Pack {
  key: string
  label: string
  note: string
}

export const FLAVORS: Flavor[] = [
  {
    key: 'frambuesa',
    label: 'frambuesa · acai',
    canLabel: 'frambuesa · acai',
    gradient: {
      from: '#c94b8b',
      to:   '#7a1538',
    },
    glow: 'rgba(201, 75, 139, 0.10)',
    accentText: '#b03070',
  },
  {
    key: 'fresa',
    label: 'fresa · menta',
    canLabel: 'fresa · menta',
    gradient: {
      from: '#dba0b8',
      to:   '#5a9e72',
    },
    glow: 'rgba(90, 158, 114, 0.09)',
    accentText: '#3e8055',
  },
  {
    key: 'naranja',
    label: 'naranja · mango',
    canLabel: 'naranja · mango',
    gradient: {
      from: '#f5a623',
      to:   '#c97c10',
    },
    glow: 'rgba(245, 166, 35, 0.10)',
    accentText: '#b06010',
  },
]

export const PACKS: Pack[] = [
  { key: '1',  label: 'Individual', note: '1 lata'       },
  { key: '6',  label: '6 Pack',     note: 'Más popular'  },
  { key: '12', label: '12 Pack',    note: 'Mejor valor'  },
]

export const DEFAULT_FLAVOR_KEY = 'frambuesa'
export const DEFAULT_PACK_KEY   = '6'
export const DEFAULT_QTY        = 1
export const MAX_QTY            = 10
