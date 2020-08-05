import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { HoverBottomLineLinkStyle } from "../layout/globalStyles"
import Widget from './widget'
import postConfig from '../post-config.json'
import slugify from "slugify"

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  ${HoverBottomLineLinkStyle}
`

const ListItem = styled.li`
  display: inline-block;
  margin-bottom: 4px;
  
  a {
    text-decoration: none;
    color: #000;
    margin: 0 4px 3px 4px;
  }
`

const TagsWidget = () => {

  return(
    <Widget title={"Chmura tagów"}>
      <List>
        {
          postConfig.tags.map(tag => (
            <ListItem key={tag}>
              <Link to={`/tag/${slugify(tag, {lower: true})}`}>{tag}</Link>
            </ListItem>
          ))
        }
      </List>
    </Widget>
  )
}

export default TagsWidget
