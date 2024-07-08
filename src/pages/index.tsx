import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import ProjectGrid from '../components/ProjectGrid'
import BaseStyles from '../components/BaseStyles';


const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <>
    <BaseStyles />
    <main>
      <Layout pageTitle="Homepage">
        <p>I’m a Fullstack engineer with 15 years of studio, agency, and start-up experience delivering world class digital experiences. I love building scalable, clean software, engineering teams and driving process.</p>
        <ProjectGrid items={data.allMdx.nodes} />
      </Layout>
    </main>
    </>
  )
}


export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY")
          title
          slug
          thumbnail
        }
        id
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home Page" />
