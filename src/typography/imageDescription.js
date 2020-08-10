import React from 'react'
import styled from 'styled-components'

const DescriptionWrapper = styled.div`
  display: block;
  text-align: center;
  font-size: 12px;
  font-style: italic;
  margin: 5px auto 10px auto;
  max-width: 450px;
  color: #000;
`

const ImageDescription = ({children}) => (<DescriptionWrapper>{children}</DescriptionWrapper>)

export default ImageDescription
