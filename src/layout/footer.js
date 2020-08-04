import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import config from "../site-config.json"
import { HoverBottomLineLinkStyle } from "./globalStyles"

const FooterContainer = styled.footer`
  min-height: 100px;
  background-color: ${props => props.theme.footer.background};
  margin-top: 30px;
  border-top: 3px ${props => props.theme.footer.border} solid;  
`

const FooterRow = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    flex-direction: column;
  }
`

const FooterColumn = styled.div`
  flex: 1;
  padding: 10px 25px 0 25px;
  ${HoverBottomLineLinkStyle}
  
  ul {
    list-style: none;
  
    li {
      margin-bottom: 10px;
      a {
        color: ${props => props.theme.footer.text};
        text-decoration: none;
      }
    }
  
    li:first-child {
      font-size: 1.4em;
      font-weight: bold;
      margin-bottom: 15px;
    }
  }
`

const CopyrightBlock = styled.div`
  text-align: center;
  font-weight: bold;
  margin: 0 auto;
  padding: 15px 0;
`

const Footer = () => {

  return (
    <FooterContainer>
      <FooterRow>
        {
          config.footer.map(group => (
            <FooterColumn key={group.title}>
              <ul>
                <li>{group.title}</li>
                {
                  group.content.map(item => (
                    <li key={item.name}><Link to={item.link}>{item.name}</Link></li>
                  ))
                }
              </ul>
            </FooterColumn>
          ))
        }
        <FooterColumn>
          <ul>
            <li>Social media</li>
            {
              config.social.map(item => (
                <li key={item.name}><a href={item.link} target={"_blank"} rel="noreferrer">{item.name}</a></li>
              ))
            }
          </ul>
        </FooterColumn>
      </FooterRow>
      <CopyrightBlock>© REDARK.pl - Wszelkie prawa zastrzeżone</CopyrightBlock>
    </FooterContainer>
  )
}

export default Footer
