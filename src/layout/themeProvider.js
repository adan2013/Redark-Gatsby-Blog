import React, { useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../themes'

const ThemeProvider = ({children}) => {
  let selectedTheme = false;
  if(typeof document !== 'undefined') {
    selectedTheme = document.body.classList.contains('theme-dark')
  }
  const [darkMode, setDarkMode] = useState(selectedTheme)

  let themeContext = {
    isDark: darkMode,
    changeTheme: (newTheme) => setDarkMode(newTheme)
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
