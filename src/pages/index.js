import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Intro data={data} />
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query {
        markdownRemark(frontmatter: { title: { eq: "intro" } }) {
            html
            frontmatter {
                name
            }
        }
    }
`