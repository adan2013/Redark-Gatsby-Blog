import styled from 'styled-components'

const WarningBlock = styled.div`
  background-color: ${props => props.theme.general.background};
  margin: 8px 0 8px 0;
  padding: 6px 12px 6px 16px;
  border-left: 5px #d40000 solid;
  font-size: 16px;
  line-height: 1.4;
  font-weight: bold;
`

export default WarningBlock
