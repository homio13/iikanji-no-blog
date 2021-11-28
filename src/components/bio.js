/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <div className="bio-inner">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/logo.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        {author?.name && (
          <div>
            <p><strong>{author.name}</strong></p>
            <p>{author?.summary || null}</p>
            <p>
              {` `}
              <a className="bio-twitter-link" href={`https://twitter.com/${social?.twitter || ``}`}>
                Twitter
              </a>
            </p>
          </div>
        )}
        </div>
    </div>
  )
}

export default Bio
