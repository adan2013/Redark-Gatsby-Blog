import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Widget from './widget'
import WidgetPostBlock from '../components/widgetPostBlock'
import postConfig from '../post-config.json'

const query = graphql`
  query widgetRecommendedPostsQuery {
    allMdx {
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

const RecommendedPostsWidget = () => {
  const queryData = useStaticQuery(query)
  const allPosts = queryData.allMdx.nodes.filter(post => postConfig.recommended.indexOf(post.frontmatter.slug) >= 0)
  const randomPosts = []
  for(let i = 0; i < 3; i++) {
    if(allPosts.length > 0){
      const random = Math.floor(Math.random() * allPosts.length)
      randomPosts.push(allPosts.splice(random, 1)[0])
    }else{
      break;
    }
  }
  return(
    <Widget title={"Polecane wpisy"}>
      {
        randomPosts.map(({ frontmatter: { slug, image, title, categories } }) => (
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

export default RecommendedPostsWidget
