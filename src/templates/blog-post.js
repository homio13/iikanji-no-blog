import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="post-header-wrap">
            <div className="post-icon">{post.frontmatter.Icon}</div>
            <h1 itemProp="headline"> {post.frontmatter.title}</h1>
            <p className="post-created-at">🕣 {post.frontmatter.CreatedAt.replaceAll('/', '.')}</p>
          </div>
        </header>
        <div className="content-wrapper">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
        <hr />
        <Bio />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog/${previous.frontmatter.Slug}`} rel="prev">
                ← {previous.frontmatter.Icon} {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog/${next.frontmatter.Slug}`} rel="next">
                {next.frontmatter.Icon} {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: {eq: $id}) {
      id
      html
      excerpt
      frontmatter {
        title
        Slug
        Icon
        CreatedAt(formatString: "YYYY/MM/DD")
        UpdatedAt(formatString: "YYYY/MM/DD")
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        Slug
        Icon
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        Slug
        Icon
      }
    }
  }
`
