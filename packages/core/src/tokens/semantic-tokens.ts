export interface SemanticColors {
  'bg-canvas': {
    default: string
    _dark: string
  }
  'bg-surface': {
    default: string
    _dark: string
  }
  'bg-subtle': {
    default: string
    _dark: string
  }
  'bg-muted': {
    default: string
    _dark: string
  }
  default: {
    default: string
    _dark: string
  }
  inverted: {
    default: string
    _dark: string
  }
  emphasized: {
    default: string
    _dark: string
  }
  muted: {
    default: string
    _dark: string
  }
  subtle: {
    default: string
    _dark: string
  }
  border: {
    default: string
    _dark: string
  }
  accent: {
    default: string
    _dark: string
  }
  success: {
    default: string
    _dark: string
  }
  error: {
    default: string
    _dark: string
  }
  'bg-accent': string
  'bg-accent-subtle': string
  'bg-accent-muted': string
  'on-accent': string
  'on-accent-muted': string
  'on-accent-subtle': string
}
export interface SemanticThemeTokens {
  colors: SemanticColors
}
export default {
  colors: {
    'bg-canvas': {
      default: 'gray.50',
      _dark: 'gray.900',
    },
    'bg-surface': {
      default: 'white',
      _dark: 'gray.800',
    },
    'bg-subtle': {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    'bg-muted': {
      default: 'gray.100',
      _dark: 'gray.600',
    },
    default: {
      default: 'gray.900',
      _dark: 'white',
    },
    inverted: {
      default: 'white',
      _dark: 'gray.900',
    },
    emphasized: {
      default: 'gray.700',
      _dark: 'gray.100',
    },
    muted: {
      default: 'gray.600',
      _dark: 'gray.300',
    },
    subtle: {
      default: 'gray.500',
      _dark: 'gray.400',
    },
    border: {
      default: 'gray.200',
      _dark: 'gray.700',
    },
    accent: {
      default: 'brand.500',
      _dark: 'brand.200',
    },
    success: {
      default: 'green.600',
      _dark: 'green.200',
    },
    error: {
      default: 'red.600',
      _dark: 'red.200',
    },
    'bg-accent': 'brand.600',
    'bg-accent-subtle': 'brand.500',
    'bg-accent-muted': 'brand.400',
    'on-accent': 'white',
    'on-accent-muted': 'brand.50',
    'on-accent-subtle': 'brand.100',
  },
}
