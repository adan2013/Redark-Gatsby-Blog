import React from 'react'
import styled from 'styled-components'
import siteConfig from '../site-config.json'

const AdContainer = styled.div`
  
`

const AdSenseSidebar = () => {
  React.useEffect(() => {
    if(siteConfig.adSense.inSidebar && typeof window !== "undefined") {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch (e) { console.log('AdSense error') }
    }
  })
  return(
    siteConfig.adSense.inSidebar
    &&
    <AdContainer>
      <ins className="adsbygoogle"
           style={{display: 'block'}}
           data-ad-format="fluid"
           data-ad-layout-key="-6p+de+59-24-8b"
           data-ad-client="ca-pub-7672695014670144"
           data-ad-slot="8267670972"/>
    </AdContainer>
  )
}

export default AdSenseSidebar
