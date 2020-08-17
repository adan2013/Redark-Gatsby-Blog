import React, { useContext } from 'react'
import DataContext from "../components/dataContext"

const GifViewer = ({children}) => {
  const data = useContext(DataContext)
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
      <a href={computedData.url} target={'_blank'} rel="noopener noreferrer" style={{padding: '0', marginBottom: '-8px'}}>
        <img src={computedData.url} alt={computedData.alt} style={{width: '100%'}}/>
      </a>
    </div>
  )
}

export default GifViewer
