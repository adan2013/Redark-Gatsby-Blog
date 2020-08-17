import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSms } from '@fortawesome/free-solid-svg-icons'

const Title = styled.div`
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 5px 0 10px 0;
`

const Item = styled.div`
  flex: 1;
  text-align: center;
    
  a {
    display: block;
    font-size: 1.5em;
    color: #fff;  
  }
`

const config = [
  {
    text: 'Udostępnij na Facebooku',
    color: '#3b5999',
    icon: faFacebookSquare,
    link: 'https://www.facebook.com/sharer/sharer.php?u=https://redark.pl/'
  },
  {
    text: 'Udostępnij na Twitterze',
    color: '#55acee',
    icon: faTwitterSquare,
    link: 'https://twitter.com/intent/tweet?text=https://redark.pl/'
  },
  {
    text: 'Udostępnij w WhatsAppie',
    color: '#25D366',
    icon: faWhatsapp,
    link: 'https://api.whatsapp.com/send?text=https://redark.pl/'
  },
  {
    text: 'Udostępnij SMSem',
    color: '#bfba45',
    icon: faSms,
    link: 'sms:?&body=https://redark.pl/'
  },
  {
    text: 'Udostępnij mailem',
    color: '#585858',
    icon: faEnvelope,
    link: 'mailto:?body=https://redark.pl/'
  }
]

const ShareThisPost = ({slug}) => {

  return(
    <>
      <Title>Udostępnij artykuł:</Title>
      <Container>
        {
          config.map(item => (
            <Item style={{backgroundColor: item.color}}>
              <a href={item.link + slug}
                 title={item.text}
                 target={'_blank'}
                 rel="noopener noreferrer">
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </Item>
          ))
        }
      </Container>
    </>
  )
}

ShareThisPost.propTypes = {
  slug: PropTypes.string.isRequired
}

export default ShareThisPost
