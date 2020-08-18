import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({children, href, ...rest}) => {
  if(!href || href.substring(0, 4) === 'http' || href.substring(0, 8) === '/static/') {
    return (
      <a href={href} {...rest} target="_blank" rel="noopener noreferrer">{children}</a>
    )
  }else{
    return (
      <GatsbyLink to={href} {...rest} hello={1}>{children}</GatsbyLink>
    )
  }
}

export default Link
