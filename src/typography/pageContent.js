import React from 'react'
import styled from 'styled-components'
import { HoverFillLinkStyle } from '../layout/globalStyles'

const Content = styled.div`
  padding: 10px 0;
  font-size: 16px;
  line-height: 1.65;
  ${HoverFillLinkStyle}
  
  p {
    margin: 0 0 10px 0;
  }
  
  .gatsby-image-wrapper, .gatsby-resp-image-wrapper {
    max-width: min(90%, 500px);
    /*width: auto;
    height: auto;
    max-height: 500px;*/
    display: block;
    margin: 15px auto;
    border: 10px #f0f0f0 solid;
    
    a {
      border-bottom: none !important;
    }
    
    a:hover {
      background-position: 0 0 !important;
    }
  }
`

const PageContent = ({children}) => (<Content>{children}</Content>)

export default PageContent
