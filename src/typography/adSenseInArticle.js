import React from 'react'
import styled from 'styled-components'
import siteConfig from '../site-config.json'

const AdContainer = styled.div`
  margin: 8px 0 5px 0;
`

const AdSenseInArticle = () => {
  React.useEffect(() => {
    if(siteConfig.adSense.inArticle && typeof window !== "undefined") {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch (e) { console.log('AdSense error') }
    }
  })
  return(
    siteConfig.adSense.inArticle
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
