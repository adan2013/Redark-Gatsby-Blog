import React, { useState, useEffect } from 'react'
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

const ThemeSwitch = (props) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(window.localStorage.getItem("dark-mode") === '1')
  }, [])

  const changeTheme = () => {
    const newState = !darkMode
    setDarkMode(newState)
    props.themeChanged(newState)
    window.localStorage.setItem("dark-mode", newState ? '1' : '0')
  }

  return (
    <ThemeSwitchContainer onClick={changeTheme}>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon}/>
      <span className={"text"}>{darkMode ? ' Light mode' : ' Dark mode'}</span>
    </ThemeSwitchContainer>
  )
}


export default ThemeSwitch
