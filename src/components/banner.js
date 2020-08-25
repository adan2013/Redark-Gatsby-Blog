import React from 'react'
import Image from 'gatsby-image'
import GatsbyLink from '../typography/link'
import siteConfig from '../site-config.json'
import { graphql, useStaticQuery } from 'gatsby'

const bannerImageQuery = graphql`
  {
    top: file(relativePath: { eq: "top-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sidebar: file(relativePath: { eq: "sidebar-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Banner = ({top}) => {
  const data = useStaticQuery(bannerImageQuery)
  const img = top ? data.top : data.sidebar
  const showBanner = top ? siteConfig.banner.top : siteConfig.banner.sidebar
  const tagetLink = top ? siteConfig.banner.topLink : siteConfig.banner.sidebarLink
  const maxSize = top ? '800px' : '350px'
  if(img && showBanner) {
    return(
      <GatsbyLink href={tagetLink}>
        <Image fluid={img.childImageSharp.fluid} style={{maxWidth: maxSize, margin: '0 auto'}} />
      </GatsbyLink>
    )
  }else{
    return(<></>)
  }
}

const TopBanner = () => {
  return <Banner top={true}/>
}

const SidebarBanner = () => {
  return <Banner top={false}/>
}

export { TopBanner, SidebarBanner }
