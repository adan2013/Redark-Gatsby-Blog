import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComment, faFolder } from '@fortawesome/free-solid-svg-icons'
import dateFormatter from "../utils/dateFormatter"

const Container = styled.div`
  position: relative;
  margin: 20px 0 0 0;
  padding: 0;
  border: 1px #767676 solid;
`

const Body = styled(Link)`
  display: block;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  img {
    transition: transform .5s !important;
  }
  
  &:hover img {
    transition: transform .5s;
    transform: scale(1.15);
  }
`

const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  width: calc(100% - 40px);
  font-family: 'Anton', sans-serif;
  font-size: 28px;
  color: #fff;
  padding: 20px;
  position: absolute;
  transform: translateY(-100%);
  
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 20px;
  }
`

const Footer = styled.div`
  background-color: #d40000;
  color: #fff;
  padding: 2px 15px;
  min-height: 30px;
  line-height: 30px;
  
  svg {
    margin-left: 18px;
    margin-right: 5px;
  }
  
  svg:first-child {
    margin-left: 0;
  }
`

const PostBlock = ({slug, image, title, date}) => {

  return(
    <Container>
      <Body to={`/blog/${slug}`}>
        <ImageWrapper>
          <Image fluid={image} />
          <Title>{title}</Title>
        </ImageWrapper>
      </Body>
      <Footer>
        <FontAwesomeIcon icon={faCalendar} />{dateFormatter(date)}
        <FontAwesomeIcon icon={faComment} />0
        <FontAwesomeIcon icon={faFolder} /> none
      </Footer>
    </Container>
  )
}

export default PostBlock
