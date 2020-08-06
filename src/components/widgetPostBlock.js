import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import categoryFormatter from "../utils/categoryFormatter"
import PropTypes from "prop-types"

const Container = styled.div`
  margin: 5px;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  color: #000;
  transition: .3s;
  
  &:hover {
    background-color: #c8c8c8;
  }
`

const ImageColumn = styled.div`
  flex: 3;
`

const TextColumn = styled.div`
  flex: 5;
  padding-left: 8px;
`

const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`

const Categories = styled.div`
  font-size: 0.9em;
  padding: 4px 0;

  svg {
    margin-right: 5px;
  }
`

const WidgetPostBlock = ({ slug, image, title, categories }) => {

  return(
    <Link to={`/${slug}`} style={{textDecoration: 'none'}}>
      <Container>
        <ImageColumn>
          <Image fluid={image} />
        </ImageColumn>
        <TextColumn>
          <Title>{title}</Title>
          <Categories>
            <FontAwesomeIcon icon={faFolder}/>
            {categoryFormatter(categories, false)}
          </Categories>
        </TextColumn>
      </Container>
    </Link>
  )
}

WidgetPostBlock.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
}

export default WidgetPostBlock
