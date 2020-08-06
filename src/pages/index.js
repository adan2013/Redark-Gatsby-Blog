import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PostBlock from "../components/postBlock"

const GoToBlogButton = styled(Link)`
  display: block;
  margin: 20px auto 0 auto;
  padding: 10px;
  background-color: #d40000;
  border: 3px #d40000 solid;
  border-radius: 10px;
  text-decoration: none;
  width: 200px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  transition: .3s;
  
  &:hover {
    background-color: #fff;
    color: #d40000;
  }
`

const Page = ({data}) => {

  return (
    <Layout hideNewPosts>
      <SEO title={"Nowe wpisy"}/>
      <h1>Nowe wpisy</h1>
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
      <GoToBlogButton to={`/blog/2`}>Zobacz więcej</GoToBlogButton>
    </Layout>
  )
}

export const query = graphql`
  query mainPagePostListQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
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
