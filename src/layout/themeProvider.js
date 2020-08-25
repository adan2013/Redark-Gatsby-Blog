import React, { useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

const breakpoints = {
  mobileBreakpoint: "880px",
  compactMenuBreakpoint: "720px",
}

const ThemeProvider = ({children}) => {
  let selectedTheme = false;
  if(typeof document !== 'undefined') {
    selectedTheme = document.body.classList.contains('theme-dark')
  }
  const [darkMode, setDarkMode] = useState(selectedTheme)

  const themeContext = {
    ...breakpoints,
    isDark: darkMode,
    changeTheme: (newTheme) => setDarkMode(newTheme)
  }

  return(
    <StyledComponentsThemeProvider theme={themeContext}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider
