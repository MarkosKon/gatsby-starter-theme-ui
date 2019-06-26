/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
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
      <div
        sx={{
          m: `0 auto`,
          maxWidth: 960,
          p: `0px 1.0875rem 1.45rem`,
          pt: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          {`© ${new Date().getFullYear()}, Built with `}
          <a sx={{ color: "primary" }} href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
