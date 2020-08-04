import React from 'react'
import styled from 'styled-components'

const WidgetContainer = styled.div`
  padding: 0;
  background-color: ${props => props.theme.widget.background};
  margin-bottom: 15px;
  border: 1px rgb(92, 92, 92) solid;
`

const WidgetTitle = styled.div`
  font-size: 20px;
  background-color: ${props => props.theme.widget.titleBg};
  padding: 8px 5px 8px 12px;
  margin: 15px -5px 10px -5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  line-height: 1.1;
  font-family: 'Anton', 'sans-serif';
  color: ${props => props.theme.widget.titleText};
  text-shadow: 2px 2px 4px #444444;
`

const WidgetBody = styled.div`
  padding: 8px 4px;
  color: ${props => props.theme.widget.bodyText};
`

const Widget = ({title, children}) => (
  <WidgetContainer>
    {title && <WidgetTitle>{title}</WidgetTitle>}
    <WidgetBody>{children}</WidgetBody>
  </WidgetContainer>
)

export default Widget
