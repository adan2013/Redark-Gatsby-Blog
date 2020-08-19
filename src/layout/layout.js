import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import styled, { ThemeProvider } from "styled-components"
import themeConfig from "../theme-config.json"
import { GlobalStyle } from "./globalStyles"

import { DataProvider } from "../components/dataContext"

import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"
import CookiePopup from "../components/cookiesPopup"
import { TopBanner, SidebarBanner } from "../components/banner"

const PageContainer = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 1260px;
    min-height: 100vh;
    margin: 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 25px 40px;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      flex-direction: column;
      padding: 20px;
    }
  `

const ContentColumn = styled.div`
    min-width: 0;
    padding: 0 15px 0 0;
    flex: 2;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      flex: 1;
      padding: 0;
    }
  `

const SidebarColumn = styled.div`
    min-width: 0;
    padding: 0 0 0 15px;
    flex: 1;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      flex: 1;
      padding: 0;
      margin-top: 20px;    
    }
  `

const getTheme = (darkMode) => {
  let theme = themeConfig.light
  if(darkMode) theme = { ...theme, ...themeConfig.dark }
  return theme
}

const Layout = ({ children, hideSidebar, hideNewPosts }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(window.localStorage.getItem("dark-mode") === '1')
  }, [])

  return (
    <DataProvider>
      <ThemeProvider theme={getTheme(darkMode)}>
        <PageContainer>
          <GlobalStyle/>
          <Header themeChanged={(darkMode) => setDarkMode(darkMode)}/>
          <ContentContainer>
            <ContentColumn>
              <TopBanner/>
              {children}
            </ContentColumn>
            {
              !hideSidebar
              &&
              <SidebarColumn>
                <Sidebar hideNewPosts={hideNewPosts}/>
                <SidebarBanner/>
              </SidebarColumn>
            }
          </ContentContainer>
          <Footer/>
        </PageContainer>
        <CookiePopup/>
      </ThemeProvider>
    </DataProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideSidebar: PropTypes.bool,
  hideNewPosts: PropTypes.bool
}

export default Layout
