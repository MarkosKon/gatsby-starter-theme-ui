/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Styled.h1>Hi from the second page</Styled.h1>
    <div sx={{ variant: "textStyles.heading" }}>Something like a heading.</div>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
