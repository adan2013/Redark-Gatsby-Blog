import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const GalleryWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  a { border-bottom: none; display: block }
  a:hover { background-position: 0 0; }
`

const ImageWrapper = styled.div`
  margin: 5px;
  flex: 1;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    max-width: 50vw;
    .gatsby-image-wrapper { border-width: 5px; }
  }
`

const query = graphql`
{
  allFile {
    nodes {
      publicURL
      relativePath
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
}
`

const Gallery = ({children}) => {
  const data = useStaticQuery(query)
  const rawData = children.split('!')
  rawData.shift()
  const computedData = rawData.map(img => {
    const altStart = img.indexOf('[')
    const altEnd = img.indexOf(']')
    const linkStart = img.indexOf('(')
    const linkEnd = img.indexOf(')')
    return {
      alt: img.substring(altStart + 1, altEnd),
      link: img.substring(linkStart + 1, linkEnd)
    }
  })
  const images = computedData.map(img => {
    let object = data.allFile.nodes.find(node => node.relativePath.indexOf(img.link) >= 0)
    return {
      ...img,
      data: object
    }
  })
  return(
    <GalleryWrapper>
      {
        images.map(img => (
          <ImageWrapper key={img.link}>
            <a href={img.data.publicURL} target={'_blank'} rel="noopener noreferrer">
              <Image fluid={img.data.childImageSharp.fluid} alt={img.alt}/>
            </a>
          </ImageWrapper>
        ))
      }
    </GalleryWrapper>
  )
}

export default Gallery
