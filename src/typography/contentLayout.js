import styled from 'styled-components'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    flex-direction: column;
  }
`

const LayoutColumn = styled.div`
  min-width: 0;
  padding: 5px;
  flex: 1;
`

export { LayoutContainer, LayoutColumn }
