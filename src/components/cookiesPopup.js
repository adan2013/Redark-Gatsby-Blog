import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { HoverBottomLineLinkStyle } from "../layout/globalStyles"

const PopupContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.75);
  border: 1px #a0a0a0 solid;
  border-radius: 4px;
  position: fixed;
  left: 25px;
  bottom: 25px;
  width: 450px;
  padding: 18px 45px 18px 18px;
  ${HoverBottomLineLinkStyle}
  
  a {
    font-weight: bold;
    margin-left: 5px;
  }
  
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: calc(100vw - 113px);
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #a0a0a0;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  width: 30px;
  height: 30px;
  
  &:hover { color: #000 }
`

const CookiePopup = () => {
  const [accepted, setAccepted] = useState(true)

  useEffect(() => {
    setAccepted(window.localStorage.getItem('cookie-accepted') === '1')
  }, [])

  const accept = () => {
    setAccepted(true)
    window.localStorage.setItem('cookie-accepted', '1')
  }

  return(
    <>
      {
        !accepted
        &&
        <PopupContainer>
          <CloseButton onClick={accept}>X</CloseButton>
          Korzystanie z tej witryny oznacza akceptację jej regulaminu oraz wyrażenie zgody na przetwarzanie danych osobowych na zasadach zapisanych w polityce prywatności.
          <Link to={`/polityka-prywatnosci`}>Czytaj więcej</Link>
        </PopupContainer>
      }
    </>
  )
}

export default CookiePopup
