const variables = {
  text: "var(--text)",
  background: "var(--background)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  mute: "var(--mute)"
};
export default {
  ...variables,
  modes: {
    dark: {
      ...variables
    }
  }
};
