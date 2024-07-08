import * as React from 'react'
import { Link, useStaticQuery, graphql,  } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import {
//   container,
//   heading,
//   navLinks,
//   navLinkItem,
//   navLinkText
// } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
        {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
       /> */}
      </main>
    </div>
  )
}

export default Layout
