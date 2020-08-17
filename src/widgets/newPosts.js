import React, { useContext } from 'react'
import DataContext from '../components/dataContext'

import Widget from './widget'
import WidgetPostBlock from '../components/widgetPostBlock'

const NewPostsWidget = () => {
  const data = useContext(DataContext)
  return(
    <Widget title={"Nowe wpisy"}>
      {
        data.allMdx.nodes.slice(0, 3).map(({ frontmatter: { slug, image, title, categories } }) => (
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
