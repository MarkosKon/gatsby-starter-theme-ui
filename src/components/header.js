/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      backgroundColor: "primary",
      color: "background",
      mb: "1.45rem",
    }}
  >
    <div
      sx={{
        m: "0 auto",
        p: "1.45rem 1.0875rem",
        maxWidth: "960px",
      }}
    >
      <h1 sx={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: "background",
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
