const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

export default {
  // mdx
  h1: {
    ...heading,
    color: "text",
    fontSize: 40,
    mt: 4,
    mb: 2,
  },
  h2: {
    ...heading,
    fontSize: 4,
  },
  h3: {
    ...heading,
    fontSize: 3,
  },
  h4: {
    ...heading,
    fontSize: 2,
  },
  h5: {
    ...heading,
    fontSize: 1,
  },
  h6: {
    ...heading,
    fontSize: 0,
  },
  pre: {
    fontFamily: "monospace",
    overflowX: "auto",
    code: {
      color: "inherit",
    },
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  //   theme-ui components
  //   Container: {
  //     maxWidth: 768,
  //   },
}
