import React from 'react'
import Widget from './widget'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import config from '../site-config.json'

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

const getSocialIcon = (type) => {
  switch (type) {
    case 'fb': return faFacebookSquare;
    case 'tt': return faTwitterSquare;
    case 'ig': return faInstagram;
    default: return null;
  }
}

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
              <FontAwesomeIcon icon={getSocialIcon(item.icon)} size={"5x"}/>
            </SocialLink>
          ))
        }
      </SocialContainer>
    </Widget>
  )
}

export default SocialWidget
