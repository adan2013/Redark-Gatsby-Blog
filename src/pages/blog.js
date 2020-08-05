import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import PostBlock from "../components/postBlock"

const Page = ({data}) => (
  <Layout>
    <SEO title={'Blog'}/>
    <h1>Blog</h1>
    {
      data.allMdx.nodes.map(({ frontmatter: { slug, image, title, date, categories } }) => (
        <PostBlock key={slug}
                   slug={slug}
                   image={image.childImageSharp.fluid}
                   title={title}
                   date={date}
                   categories={categories} />
      ))
    }
  </Layout>
)

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          date
          categories
          image {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 370) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default Page
