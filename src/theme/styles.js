// All options: https://theme-ui.com/theme-spec#styles

const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading"
};

export default {
  // Mdx + Styled.key
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: 3
  },
  h1: {
    ...heading,
    fontSize: 40,
    my: 4
  },
  h2: {
    ...heading,
    fontSize: 5
  },
  h3: {
    ...heading,
    fontSize: 3
  },
  h4: {
    ...heading,
    fontSize: 2
  },
  h5: {
    ...heading,
    fontSize: 1
  },
  h6: {
    ...heading,
    fontSize: 0
  },
  a: {
    color: "primary",
    "&:hover": {
      color: "accent"
    }
  },
  pre: {
    fontFamily: "monospace",
    overflowX: "auto",
    code: {
      color: "inherit"
    }
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit"
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid"
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid"
  }
  //   theme-ui components
  //   Container: {
  //     maxWidth: 768,
  //   },
};
