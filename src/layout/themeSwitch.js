import React, { useContext } from 'react'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitchContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  border: 2px ${props => props.theme.themeSwitch.text} solid;
  border-radius: 5px;
  color: ${props => props.theme.themeSwitch.text};
  padding: 8px 10px;
  cursor: pointer;
  
  &:hover {
    border-color: ${props => props.theme.themeSwitch.textHover};
    color: ${props => props.theme.themeSwitch.textHover};
  }
  
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    .text { display: none; }  
  }
  
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    position: absolute;
    top: 9px;
    right: 72px;
    width: 22px;
    height: 22px;
    line-height: 26px;
    text-align: center;
    font-size: 22px;
  }
`

const ThemeSwitch = () => {
  const theme = useContext(ThemeManagerContext)

  return (
    <ThemeSwitchContainer onClick={() => theme.toggleDark()}>
      <FontAwesomeIcon icon={theme.isDark ? faSun : faMoon}/>
      <span className={"text"}>{theme.isDark ? ' Light mode' : ' Dark mode'}</span>
    </ThemeSwitchContainer>
  )
}


export default ThemeSwitch
