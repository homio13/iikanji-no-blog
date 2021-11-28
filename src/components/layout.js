import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          <div className="main-head-wrap">
            <StaticImage
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/logo.png"
              width={40}
              height={40}
              quality={95}
              alt="Profile picture"
            />
            {title}
          </div>
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <div className="main-head-wrap">
            <StaticImage
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/logo.png"
              width={30}
              height={30}
              quality={95}
              alt="Profile picture"
            />
            {title}
          </div>
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <Link className="footer-link-home" to="/">
          <div className="main-head-wrap">
              <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/logo.png"
                width={30}
                height={30}
                quality={95}
                alt="Profile picture"
              />
            </div>
        </Link>
      </footer>
    </div>
  )
}

export default Layout
