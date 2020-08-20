import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import DataContext from './dataContext'
import Image from 'gatsby-image'

const Container = styled.div`
  margin: 5px 0 20px 0;
`

const List = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.compactMenuBreakpoint}) {
    flex-direction: column;
  }
  
  a:first-child {
    margin-left: 0;
  }
`

const ItemList = styled(Link)`
  flex: 1;
  margin: 8px 0 0 5px;
  color: ${props => props.theme.general.textColor};
  text-decoration: none;
  
  .post-title {
    margin: 5px 0 10px 0;
  }
`

const maxInRow = 3

const RelatedPosts = ({metadata}) => {
  const posts = useContext(DataContext).allMdx.nodes
  const postsInCategory = posts.filter(value => value.frontmatter.categories.filter(x => metadata.categories.includes(x)).length > 0)
                               .filter(value => !metadata.relatedPosts.includes(value.frontmatter.slug))
  const selectedPosts = []
  metadata.relatedPosts.forEach(item => {
    const related = posts.find(value => value.frontmatter.slug === item)
    if(related) selectedPosts.push(posts.find(value => value.frontmatter.slug === item))
  })
  for(let i = 0; i < maxInRow; i++) {
    if(selectedPosts.length >= maxInRow) break;
    if(postsInCategory.length > 0) {
      const random = Math.floor(Math.random() * postsInCategory.length)
      selectedPosts.push(postsInCategory.splice(random, 1)[0])
    }else{
      break;
    }
  }
  if(selectedPosts.length > 0) {
    return(
      <Container>
        <h1>Zobacz również</h1>
        <List>
          {
            selectedPosts.map(({frontmatter}) => (
              <ItemList key={frontmatter.slug} to={`/${frontmatter.slug}`}>
                <Image fluid={frontmatter.image.childImageSharp.fluid} />
                <div className={'post-title'}>{frontmatter.title}</div>
              </ItemList>
            ))
          }
        </List>
      </Container>
    )
  }else{
    return(<></>)
  }
}

RelatedPosts.propTypes = {
  metadata: PropTypes.object.isRequired
}

export default RelatedPosts
