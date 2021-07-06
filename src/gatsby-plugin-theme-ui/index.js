import { system, deep } from "@theme-ui/presets"
import prism from "@theme-ui/prism/presets/theme-ui"

export default {
  ...deep,
  breakpoints: ["868px"],
  colors: {
    ...deep.colors,
    modes: {
      light: {
        ...system.colors,
      },
    },
  },
  styles: {
    ...deep.styles,
    h1: {
      fontWeight: "heading",
    },
    h2: {
      fontSize: 4,
    },
    code: {
      ...prism,
    },
  },
  sizes: {
    container: "768px",
  },
  links: {
    heading: {
      color: "text",
      textDecoration: "none",
      fontWeight: "display",
      fontSize: 4,
      "&:hover": {
        color: "primary",
      },
      "&+&": {
        ml: "14px",
      },
    },
    nav: {
      color: "text",
      textDecoration: "none",
      fontWeight: "heading",
      transitionDuration: ".2s",
      borderRadius: 4,
      px: 2,
      "&:hover": {
        bg: "highlight",
      },
      "&.active": {
        bg: "highlight",
      },
    },
    icon: {
      color: "text",
      textDecoration: "none",
      "&:hover": {
        color: "primary",
      },
      "&+&": {
        ml: "14px",
      },
    },
  },
  buttons: {
    icon: {
      size: 20,
      cursor: "pointer",
    },
  },
}
