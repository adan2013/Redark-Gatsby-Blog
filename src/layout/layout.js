import React, { useState } from "react"
import PropTypes from "prop-types"

import styled, { ThemeProvider } from "styled-components"
import themeConfig from "../theme-config.json"
import { GlobalStyle } from "./globalStyles"

import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

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

const getTheme = () => {
  let theme = themeConfig.light
  if(window.localStorage.getItem("dark-mode") === '1') {
    theme = { ...theme, ...themeConfig.dark }
  }
  return theme
}

const Layout = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={getTheme()}>
      <PageContainer>
        <GlobalStyle/>
        <Header themeChanged={() => setValue(value + 1)}/>
        <ContentContainer>
          <ContentColumn>{children}</ContentColumn>
          <SidebarColumn><Sidebar/></SidebarColumn>
        </ContentContainer>
        <Footer/>
      </PageContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
