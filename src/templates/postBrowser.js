import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../components/seo'
import Pagination from '../components/pagination'
import PostBlock from '../components/postBlock'

const PostBrowser = ({data, pageContext}) => {
  return(
    <Layout>
      <SEO title={`Wszystkie wpisy`}/>
      <h1>{`Wszystkie wpisy`}</h1>
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
      <Pagination link={pageContext.paginationLink}
                  current={pageContext.currentPage}
                  max={pageContext.numPages}/>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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

export default PostBrowser
