import React from 'react'
import styled from 'styled-components'

const QuoteWrapper = styled.blockquote`
  font-size: 18px;
  font-style: italic;
  margin: 6px 5px;
  padding: 0.25em 25px;
  line-height: 1.45;
  position: relative;
  color: ${props => props.theme.general.subTextColor};
  border-left: none;

  &::before {
    display: block;
    content: "\\201C";
    font-size: 86px;
    position: absolute;
    left: -20px;
    top: -20px;
    color: #7a7a7a;
  }

  cite {
    color: #999999;
    font-size: 14px;
    display: block;
    margin-top: 2px;

    &::before {
      content: "\\2014 \\2009";
    }
  }
`

const Quote = ({children, source}) => (
  <QuoteWrapper>
    {children}
    {source && <cite>{source}</cite>}
  </QuoteWrapper>
)

export default Quote
