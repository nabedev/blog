import { base, dark } from '@theme-ui/presets'

export default {
  ...dark,
  colors: {
    ...dark.colors,
    modes: {
      light: {
        ...base.colors,
      }
    }
  },
  styles: {
    ...dark.styles,
    a: {
      color: 'text',
      textDecoration: 'none',
      '&:hover': {
        color: "primary",
        cursor: "pointer",
      }
    }
  },
  sizes: {
    container: 768
  },
  spaces: {
    ...dark.space
  },
}
