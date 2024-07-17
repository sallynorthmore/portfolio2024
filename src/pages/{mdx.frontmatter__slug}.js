import * as React from 'react'
import { graphql } from 'gatsby'
import BaseStyles from "../components/BaseStyles";
import Banner from "../components/Banner";
// import Layout from '../components/layout'
// import Seo from '../components/seo'
import Project from "../components/Project";

const BlogPost = ({
  data,
  children }) => {
  const post = data?.mdx?.frontmatter;

  return (
    <div>
      <BaseStyles />
      <span>
        <Banner title="Sally Northmore" />
      </span>
      <main>
        <Project
          client={post.client}
          content={children}
          date={post.date}
          description={post.description}
          tags={post.tags}
          title={post.title}
        />
      </main>
    </div>
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
