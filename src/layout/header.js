import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Navigation from "./navigation"
import ThemeSwitch from "./themeSwitch"

const headerImageQuery = graphql`
  {
    file(relativePath: { eq: "logo-header.png"}) {
      childImageSharp {
        fluid(maxHeight: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const RelativeBlock = styled.div`
  position: relative;
  background-color: ${props => props.theme.menu.menuBarBg};
  
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    position: sticky;
    top: 0;
    z-index: 999;
  }
`

const HeaderContainer = styled.header`
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    border-bottom: 3px ${props => props.theme.menu.menuBarBorder} solid;
    height: 60px;
  }
`

const HeaderImageWrapper = styled.div`
  @media (min-width: ${props => props.theme.compactMenuBreakpoint}) {
    max-width: min(662px, 100%);
    padding: 55px;
  }
  
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    max-width: 50%;
    height: 40px;
    padding: 10px 15px;
    
    .gatsby-image-wrapper {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const Header = (props) => {
  const data = useStaticQuery(headerImageQuery)

  return (
    <RelativeBlock>
      <HeaderContainer>
        <Link to={'/'}>
          <HeaderImageWrapper>
            <Image fluid={data.file.childImageSharp.fluid} />
          </HeaderImageWrapper>
        </Link>
      </HeaderContainer>
      <ThemeSwitch themeChanged={props.themeChanged} />
      <Navigation/>
    </RelativeBlock>
  )
}

export default Header
