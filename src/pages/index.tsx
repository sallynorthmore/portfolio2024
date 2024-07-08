import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import Seo from '../components/Seo'


const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <main>
      <Layout pageTitle="Homepage">
        <p>I’m a Fullstack engineer with 15 years of studio, agency, and start-up experience delivering world class digital experiences. I love building scalable, clean software, engineering teams and driving process.</p>
        <div>
          {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <Link to={`/${node.frontmatter.slug}`} title={`${node.frontmatter.title} ${node.frontmatter.date}` } >
              <img src={node.frontmatter.thumbnail}  alt={`${node.frontmatter.title} thumbnail` }
              />
            </Link>
          </article>
        ))
      }
        </div>
        </Layout>
    </main>
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
