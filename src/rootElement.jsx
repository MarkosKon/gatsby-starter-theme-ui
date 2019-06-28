import React from "react"
import { ThemeProvider, ColorMode } from "theme-ui"
import { Global, css } from "@emotion/core"

import theme from "./theme"

import "typeface-oswald"
import "typeface-lora"
import "normalize.css"

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <ColorMode key="theme-ui-color-mode" />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body.light {
            --text: #000;
            --background: #fff;
            --primary: rebeccapurple;
            --secondary: #f7b2b7;
            --accent: orangered;
            --mute: lightgray;
          }
          body.dark {
            --text: #fff;
            --background: #101010;
            --primary: #59ab6d;
            --secondary: #59ab6d;
            --accent: #00b7ff;
            --mute: darkgray;
          }
        `}
      />
      {element}
    </>
  </ThemeProvider>
)
