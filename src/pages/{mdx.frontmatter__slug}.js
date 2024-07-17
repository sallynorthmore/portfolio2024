import * as React from 'react'
import { graphql } from 'gatsby'
// import Layout from '../components/layout'
// import Seo from '../components/seo'
import Project from "../components/Project";

const BlogPost = ({
  data,
  children }) => {
  const post = data?.mdx?.frontmatter;
  return (
    // <Layout>
    <Project
      title={post.title}
      client={post.client}
      date={post.date}
      description={post.description}
      content={children}
    />
    // </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        client
        date(formatString: "MMMM D, YYYY")
        description
        tags
        title
      }
    }
  }
`

// export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
