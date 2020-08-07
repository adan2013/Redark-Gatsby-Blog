import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Widget from './widget'
import WidgetPostBlock from '../components/widgetPostBlock'

const query = graphql`
  query widgetNewPostsQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      nodes {
        frontmatter {
          title
          slug
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

const NewPostsWidget = () => {
  const queryData = useStaticQuery(query)
  return(
    <Widget title={"Nowe wpisy"}>
      {
        queryData.allMdx.nodes.map(({ frontmatter: { slug, image, title, categories } }) => (
          <WidgetPostBlock key={slug}
                     slug={slug}
                     image={image.childImageSharp.fluid}
                     title={title}
                     categories={categories} />
        ))
      }
    </Widget>
  )
}

export default NewPostsWidget
