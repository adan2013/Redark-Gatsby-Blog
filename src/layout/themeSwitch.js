import React from 'react'
import styled, { withTheme } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitchContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  border: 2px var(--theme-switch) solid;
  border-radius: 5px;
  color: var(--theme-switch);
  padding: 8px 10px;
  cursor: pointer;
  
  &:hover {
    border-color: var(--theme-switch-hover);
    color: var(--theme-switch-hover);
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
    border-color: transparent;
    
    &:hover {
      border-color: transparent;    
    }
  }
`

const ThemeSwitch = ({theme}) => {
  const toggle = () => {
    const newTheme = !theme.isDark;
    if(newTheme) {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    }else{
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    }
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    theme.changeTheme(newTheme)
  };

  return (
    <ThemeSwitchContainer onClick={toggle}>
      <FontAwesomeIcon icon={theme.isDark ? faSun : faMoon}/>
      <span className={"text"}>{theme.isDark ? ' Light mode' : ' Dark mode'}</span>
    </ThemeSwitchContainer>
  )
}


export default withTheme(ThemeSwitch)
