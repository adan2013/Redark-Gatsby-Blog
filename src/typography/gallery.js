import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const GalleryWrapper = styled.div`
  margin-bottom: 10px;
  a { border-bottom: none; display: block }
  a:hover { background-position: 0 0; }
`

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
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

const Gallery = ({children, width}) => {
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

  const maxInRow = width ? parseInt(width) : 99
  const chunk = (arrayObject, size) => {
    return [].concat.apply([],
      arrayObject.map((elem, i) => {
        return i % size ? [] : [arrayObject.slice(i, i + size)];
      })
    );
  }
  const rowsWithImages = chunk(images, maxInRow)

  return(
    <GalleryWrapper>
      {
        rowsWithImages.map((row, rowId) => (
          <RowWrapper key={rowId}>
            {
              row.map(img => (
                <ImageWrapper key={img.link}>
                  <a href={img.data.publicURL} target={'_blank'} rel="noopener noreferrer">
                    <Image fluid={img.data.childImageSharp.fluid} alt={img.alt}/>
                  </a>
                </ImageWrapper>
              ))
            }
          </RowWrapper>
        ))
      }
    </GalleryWrapper>
  )
}

export default Gallery
