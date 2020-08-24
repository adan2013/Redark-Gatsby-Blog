import React, { useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../themes'

const LOCAL_STORAGE_KEY = 'dark-mode'

const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)

  if(typeof window !== "undefined") {
    const storage = window.localStorage.getItem(LOCAL_STORAGE_KEY) === '1'
    if(storage !== darkMode) setDarkMode(!darkMode)
  }

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
      {children}
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider
