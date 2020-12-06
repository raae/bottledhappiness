export default {
  useBodyStyles: true,

  colors: {
    text: "#333333",
    background: "floralwhite",
    primary: "#FF5BA3",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Comic Sans MS", cursive, sans-serif',
  },
  styles: {
    root: {
      margin: 0,
      fontSize: 20,
      fontFamily: "body",
      lineHeight: 1.5,
    },
    h1: {
      fontSize: 32,
      fontFamily: "heading",
      fontWeight: 900,
      color: "primary",
      mt: 4,
      mb: 4,
    },
    h2: {
      fontSize: 24,
      fontFamily: "heading",
      fontWeight: 700,
      mt: 2,
      mb: 0,
    },
    p: {
      my: 3,
    },
    ul: {
      my: 3,
    },
    iframe: {
      width: "100%",
    },
    a: {
      color: "primary",
      my: 3,
    },
  },
}
