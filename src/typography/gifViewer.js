import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
{
  allFile(filter: {extension: {eq: "gif"}}) {
    nodes {
      publicURL
      relativePath
    }
  }
}
`

const GifViewer = ({children}) => {
  const data = useStaticQuery(query)
  const altStart = children.indexOf('[')
  const altEnd = children.indexOf(']')
  const linkStart = children.indexOf('(')
  const linkEnd = children.indexOf(')')
  let computedData = {
    alt: children.substring(altStart + 1, altEnd),
    link: children.substring(linkStart + 1, linkEnd)
  }
  computedData = {
    ...computedData,
    url: data.allFile.nodes.find(node => node.relativePath.indexOf(computedData.link) >= 0).publicURL
  }
  return(
    <div className={'gatsby-image-wrapper'}>
      <img src={computedData.url} alt={computedData.alt} style={{width: '100%'}}/>
    </div>
  )
}

export default GifViewer
