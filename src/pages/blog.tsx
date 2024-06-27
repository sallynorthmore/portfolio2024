import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/Seo'

const BlogPage: React.FC<PageProps> = ({ data })  => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}


export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head: HeadFC =  () => <Seo title="My Blog Posts" />

export default BlogPage
