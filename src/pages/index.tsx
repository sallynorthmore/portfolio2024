import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/Seo'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="Homepage"><p>I'm making this by following the Gatsby Tutorial.</p></Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home Page" />
