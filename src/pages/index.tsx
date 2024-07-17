import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import ProjectGrid from '../components/ProjectGrid'
import BaseStyles from '../components/BaseStyles';
import About from '../components/About'
import Contact from "../components/Contact";


const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <>
      <BaseStyles />
      <main>
        <Layout>
          <div id="about">
            <About />
          </div>
          <div id="work">
            <ProjectGrid items={data.allMdx.nodes} />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Layout>
      </main>
    </>
  );
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
