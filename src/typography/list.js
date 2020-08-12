import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const query = graphql`
{
  allFile(filter: {extension: {eq: "svg"}}) {
    nodes {
      publicURL
      relativePath
    }
  }
}
`

const ListWrapper = styled.ul`
  list-style: none;
  padding: 5px 0 5px 20px;
  margin: 0;
  
  li {
    margin-bottom: 6px;
  }
  
  li:before {
    content: "";
    display: inline-block;
    height: 16px;
    width: 16px;
    background-size: 16px 16px;
    background-image: url(${props => props.path});
    background-repeat: no-repeat;
    margin-right: 10px;
  }
`

const GoodList = (props) => (<List type={'good-list.svg'} {...props}/>)

const BadList = (props) => (<List type={'bad-list.svg'} badList {...props}/>)

const StarList = (props) => (<List type={'star-list.svg'} badList {...props}/>)

const OkList = (props) => (<List type={'ok-list.svg'} badList {...props}/>)

const List = ({children, type}) => {
  const items = children.split('- ')
  items.shift()
  const data = useStaticQuery(query)
  const iconPath = data.allFile.nodes.find(node => node.relativePath.indexOf(type) >= 0).publicURL
  return(
    <ListWrapper path={iconPath}>
      {items.map((item, i) => (<li key={i}>{item}</li>))}
    </ListWrapper>
  )
}

export { GoodList, BadList, StarList, OkList }
