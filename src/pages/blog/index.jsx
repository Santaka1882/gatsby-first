import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby"
import Layout from "../../components/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>Last Update: {node.parent.modifiedTime}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }

`

export default BlogPage