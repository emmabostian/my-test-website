import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout/layout'

const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <Layout>
      <Link to="/blog">Go back</Link>
      <h1 style={{ fontFamily: 'avenir' }}>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{
          fontFamily: 'avenir',
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
