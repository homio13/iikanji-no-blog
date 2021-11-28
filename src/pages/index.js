import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import ListItem from "../components/list/item"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>記事がありません</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol style={{ listStyle: `none` }} className="index-list-container">
        {posts.map(post => {
          const title = post.frontmatter.title || post.frontmatter.Slug
          const link = `/blog/${post.frontmatter.Slug}`;

          return (
            <li key={post.frontmatter.Slug}>
              <ListItem
                icon={post.frontmatter.Icon}
                title={title}
                link={link}
                createdAt={post.frontmatter.CreatedAt}
              >
              </ListItem>
            </li>
          )
        })}
      </ol>
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {Published: {eq: true}}}
      sort: {fields: frontmatter___CreatedAt, order: DESC}
    ) {
      nodes {
        excerpt
        id
        frontmatter {
          title
          Published
          Slug
          Icon
          CreatedAt(formatString: "YYYY/MM/DD")
          UpdatedAt(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
