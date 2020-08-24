import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../themes'

const LOCAL_STORAGE_KEY = 'dark-mode'

const PageCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: #2b2b2b;
  transition: .2s;
  visibility: ${props => props.hided ? 'hidden' : 'visible'};
  opacity: ${props => props.hided ? '0' : '1'};
`

const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)
  const [themeLoaded, setThemeLoaded] = useState(false)

  if(typeof window !== "undefined") {
    const storage = window.localStorage.getItem(LOCAL_STORAGE_KEY) === '1'
    if(storage !== darkMode) setDarkMode(!darkMode)
  }

  // useEffect(() => {
  //   setDarkMode(window.localStorage.getItem(LOCAL_STORAGE_KEY) === '1')
  //   setThemeLoaded(true)
  // }, [])

  // useEffect(() => {
  //   window.localStorage.setItem(LOCAL_STORAGE_KEY, darkMode ? '1' : '0')
  // }, [darkMode])

  let themeContext = {
    isDark: darkMode,
    changeTheme: () => {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, !darkMode ? '1' : '0')
      setDarkMode(state => !state)
    }
  }
  if(darkMode) {
    themeContext = {...themeContext, ...darkTheme}
  }else{
    themeContext = {...themeContext, ...lightTheme}
  }

  return(
    <StyledComponentsThemeProvider theme={themeContext}>
      {/*<PageCover hided={themeLoaded}/>*/}
      {children}
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider
