import React from 'react'
import styled from 'styled-components'
import siteConfig from '../site-config.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import socialIcon from "../utils/socialIcon"

const Container = styled.div`
  background-color: var(--darken-bg);
  border: 5px rgba(120, 120, 120, 0.2) solid;
  padding: 20px 14px;
  margin: 10px 0;
  font-size: 1.1em;
  text-align: center;
`

const LinkContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`

const ExternalLink = styled.a`
  flex: 1;
  display: inline-block;
  margin: 2px;
  color: var(--text-color);
  text-decoration: none;
  svg {
    font-size: 2.5em;
  }
  .item-name {
    margin-top: 4px;
    color: var(--text-color);
    @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
      display: none;
    }
  }
`

const UserFeedback = () => (
  <Container>
    <b>Chcesz pomóc w rozwijaniu serwisu REDARK.pl?</b><br/>
    Wypełnij krótką ankietę oraz zaobserwuj moje social media
    <LinkContainer>
      <ExternalLink href={'https://forms.gle/MmRwsUZZNeQLwumo7'}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={'ankieta'}>
        <FontAwesomeIcon icon={socialIcon('feedback')} />
        <div className={"item-name"}>Wypełnij ankietę</div>
      </ExternalLink>
      {
        siteConfig.social.map(item => (
          <ExternalLink href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: item.color}}
                        title={item.name}
                        key={item.name}>
            <FontAwesomeIcon icon={socialIcon(item.icon)} />
            <div className={"item-name"}>{item.portal}</div>
          </ExternalLink>
        ))
      }
    </LinkContainer>
  </Container>
)

export default UserFeedback
