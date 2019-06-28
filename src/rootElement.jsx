import React from "react"
import { ThemeProvider, ColorMode } from "theme-ui"
import { Global, css } from "@emotion/core"

import theme from "./theme"

import "typeface-oswald"
import "typeface-lora"
import "normalize.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <ColorMode key="theme-ui-color-mode" />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Oswald", sans-serif;
          }
          body {
            font-family: "Lora", sans-serif;
            font-size: 20px;
            line-height: 1.45;
          }
          body.light {
            --text: #000;
            --background: #fff;
            --primary: rebeccapurple;
            --secondary: orangered;
            --accent: pink;
            --mute: lightgray;
          }
          body.dark {
            --text: #fff;
            --background: #000;
            --primary: #9a2463;
            --secondary: orangered;
            --accent: pink;
            --mute: darkgray;
          }
        `}
      />
      {element}
    </>
  </ThemeProvider>
)
