/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Main, Container, Footer } from "theme-ui"
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

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
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
