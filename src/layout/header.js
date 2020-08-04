import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Navigation from "./navigation"

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
    max-width: 40%;
    padding: 12px;
  }
`

const Header = () => {
  const data = useStaticQuery(headerImageQuery)

  return (
    <>
      <HeaderContainer>
        <Link to={'/'}>
          <HeaderImageWrapper>
            <Image fluid={data.file.childImageSharp.fluid} />
          </HeaderImageWrapper>
        </Link>
      </HeaderContainer>
      <Navigation/>
    </>
  )
}

export default Header
