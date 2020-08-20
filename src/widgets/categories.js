import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { HoverBottomLineLinkStyle } from "../layout/globalStyles"
import Widget from './widget'
import postConfig from '../post-config.json'
import slugify from "slugify"

const List = styled.ul`
  list-style: square;
  ${HoverBottomLineLinkStyle}
`

const ListItem = styled.li`
  margin-bottom: 6px;
  
  a {
    text-decoration: none;
  }
`

const CategoriesWidget = () => {

  return(
    <Widget title={"Kategorie"}>
      <List>
        {
          postConfig.categories.map(category => (
            <ListItem key={category}>
              <Link to={`/category/${slugify(category, {lower: true})}`}>{category}</Link>
            </ListItem>
          ))
        }
      </List>
    </Widget>
  )
}

export default CategoriesWidget
