import React, { useContext } from 'react'
import DataContext from '../components/dataContext'
import Widget from './widget'
import WidgetPostBlock from '../components/widgetPostBlock'

const RandomPostsWidget = () => {
  const data = useContext(DataContext)
  const allPosts = [...data.allMdx.nodes]
  const randomPosts = []
  for(let i = 0; i < 3; i++) {
    if(allPosts.length > 0){
      const random = Math.floor(Math.random() * allPosts.length)
      randomPosts.push(allPosts.splice(random, 1)[0])
    }else{
      break;
    }
  }
  if(randomPosts.length > 0) {
    return(
      <Widget title={`Losowe wpisy`}>
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
  }else{
    return(<></>)
  }
}

export default RandomPostsWidget
