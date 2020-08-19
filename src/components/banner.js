import React, { useContext } from 'react'
import Image from 'gatsby-image'
import GatsbyLink from '../typography/link'
import DataContext from './dataContext'
import siteConfig from '../site-config.json'

const TopBanner = () => {
  const file = useContext(DataContext).allFile.nodes.find(x => x.relativePath.indexOf('top-banner') >= 0)
  if(siteConfig.banner.top && file) {
    return(<GatsbyLink href={siteConfig.banner.topLink}><Image fluid={file.childImageSharp.fluid} /></GatsbyLink>)
  }else{
    return(<></>)
  }
}

const SidebarBanner = () => {
  const file = useContext(DataContext).allFile.nodes.find(x => x.relativePath.indexOf('sidebar-banner') >= 0)
  if(siteConfig.banner.sidebar && file) {
    return(<GatsbyLink href={siteConfig.banner.sidebarLink}><Image fluid={file.childImageSharp.fluid} /></GatsbyLink>)
  }else{
    return(<></>)
  }
}

export { TopBanner, SidebarBanner }
