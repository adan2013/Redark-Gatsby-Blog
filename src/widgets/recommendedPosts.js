import React, { useContext } from 'react'
import DataContext from '../components/dataContext'
import Widget from './widget'
import WidgetPostBlock from '../components/widgetPostBlock'
import postConfig from '../post-config.json'

const RecommendedPostsWidget = () => {
  const data = useContext(DataContext)
  const allPosts = data.allMdx.nodes.filter(post => postConfig.recommendedPosts.indexOf(post.frontmatter.slug) >= 0)
  const recommended = []
  for(let i = 0; i < postConfig.recommendationLimit; i++) {
    if(allPosts.length > 0){
      const random = Math.floor(Math.random() * allPosts.length)
      recommended.push(allPosts.splice(random, 1)[0])
    }else{
      break;
    }
  }
  if(recommended.length > 0) {
    return(
      <Widget title={postConfig.recommendationLimit > 1 ? `Polecane wpisy` : `Polecany wpis`}>
        {
          recommended.map(({ frontmatter: { slug, image, title, categories } }) => (
            <WidgetPostBlock key={slug}
                             slug={slug}
                             image={image.childImageSharp.fluid}
                             title={title}
                             categories={categories} />
          ))
        }
      </Widget>
    )
  }else{
    return(<></>)
  }
}

export default RecommendedPostsWidget
