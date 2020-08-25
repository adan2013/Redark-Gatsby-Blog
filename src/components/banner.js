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

const TopBanner = () => {
  const data = useStaticQuery(bannerImageQuery)
  if(siteConfig.banner.top && data.top) {
    return(
      <GatsbyLink href={siteConfig.banner.topLink}>
        <Image fluid={data.top.childImageSharp.fluid} style={{maxWidth: '800px', margin: '0 auto'}} />
      </GatsbyLink>
    )
  }else{
    return(<></>)
  }
}

const SidebarBanner = () => {
  const data = useStaticQuery(bannerImageQuery)
  if(siteConfig.banner.sidebar && data.sidebar) {
    return(
      <GatsbyLink href={siteConfig.banner.sidebarLink}>
        <Image fluid={data.sidebar.childImageSharp.fluid} style={{maxWidth: '350px', margin: '0 auto'}} />
      </GatsbyLink>
    )
  }else{
    return(<></>)
  }
}

export { TopBanner, SidebarBanner }
