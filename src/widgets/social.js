import React from 'react'
import Widget from './widget'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../site-config.json'
import socialIcon from "../utils/socialIcon"

const SocialContainer = styled.div`
  text-align: center;
`

const SocialLink = styled.a`
  display: inline-block;
  margin: 2px;
  padding: 0 4px;
  border: 3px transparent solid;
  border-radius: 8px;
  transition: .4s;
  &:hover {
    border-color: #d40000
  }
`

const SocialWidget = () => {

  return(
    <Widget title={"Bądź na bieżąco!"}>
      <SocialContainer>
        {
          config.social.map(item => (
            <SocialLink href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: item.color}}
                        title={item.name}
                        key={item.name}>
              <FontAwesomeIcon icon={socialIcon(item.icon)} size={"5x"}/>
            </SocialLink>
          ))
        }
      </SocialContainer>
    </Widget>
  )
}

export default SocialWidget
