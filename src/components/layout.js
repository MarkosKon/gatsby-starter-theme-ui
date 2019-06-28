/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Main, Box, Container, Footer, useColorMode } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [colorMode, setColorMode] = useColorMode()
  const newColorMode = colorMode === "light" ? "dark" : "light"
  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box sx={{ py: 3, px: [2, 3], textAlign: "right" }}>
        <button
          className="color-transition"
          sx={{
            bg: "secondary",
            color: "text",
            border: 0,
            px: 3,
            py: 2,
          }}
          onClick={e => {
            document.body.classList.remove(colorMode)
            document.body.classList.add(newColorMode)
            setColorMode(newColorMode)
          }}
        >
          Toggle {newColorMode}
        </button>
      </Box>
      <Main sx={{ minHeight: "76vh" }}>
        <Container>{children}</Container>
      </Main>
      <Footer sx={{ bg: "mute", p: 4 }}>
        {`© ${new Date().getFullYear()}, Built with`}
        <a sx={{ color: "primary", ml: 1 }} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </Footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
