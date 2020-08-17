import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const DataContext = React.createContext({
  allMdx: { nodes: [] },
  allFile: { nodes: [] }
})

const dataQuery = graphql`
{
  allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
  allFile {
    nodes {
      extension
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

export const DataProvider = ({children}) => {
  const data = useStaticQuery(dataQuery)
  return(
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
