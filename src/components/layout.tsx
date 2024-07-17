import * as React from 'react'
import {  useStaticQuery, graphql,  } from 'gatsby'
import Banner from "./Banner";
// import { StaticImage } from 'gatsby-plugin-image'


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
      <Banner title={data.site.siteMetadata.title} />
      <main>
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
        {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
       /> */}
      </main>
    </div>
  );
}

export default Layout
