import React from 'react'
import styled from 'styled-components'
import siteConfig from '../site-config.json'

const AdContainer = styled.div`
  
`

const AdSenseInArticle = () => {
  React.useEffect(() => {
    if(siteConfig.adSense && typeof window !== "undefined") (window.adsbygoogle = window.adsbygoogle || []).push({})
  })
  return(
    siteConfig.adSense
    &&
    <AdContainer>
      <ins className="adsbygoogle"
           style={{display: 'block', textAlign: 'center'}}
           data-ad-layout="in-article"
           data-ad-format="fluid"
           data-ad-client="ca-pub-7672695014670144"
           data-ad-slot="9778734203" />
    </AdContainer>
  )
}

export default AdSenseInArticle
