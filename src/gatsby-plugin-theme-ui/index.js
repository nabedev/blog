import { system, deep } from '@theme-ui/presets'
import prism from '@theme-ui/prism/presets/theme-ui'

export default {
  ...system,
  colors: {
    ...system.colors,
    modes: {
      dark: {
        ...deep.colors,
      }
    },
  },
  styles: {
    ...system.styles,
    code: {
      ...prism,
    }
  },
  sizes: {
    container: 768
  },
  links: {
    heading: {
      color: 'text',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      }
    },
    nav: {
      color: 'text',
      textDecoration: 'none',
      fontWeight: 'heading',
      transitionDuration: '.2s',
      borderRadius: 4,
      px: 2,
      '&:hover': {
        bg: 'highlight',
      },
      '&.active': {
        bg: 'highlight',
      }
    }
  },
}
