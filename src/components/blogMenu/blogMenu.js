import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const BlogMenu = ({ data }) => (
  <StaticQuery
    query={graphql`
      query BlogMenuQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                title
                author
                date
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(post => (
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.date}
          </Link>
        ))}
      </div>
    )}
  />
)

export default BlogMenu
