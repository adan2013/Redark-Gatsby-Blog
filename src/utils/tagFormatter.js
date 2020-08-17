import React from 'react'
import slugify from 'slugify'
import { Link } from 'gatsby'

export default (tags, addLinks) => {
  if(addLinks) {
    return tags.map(tag => (
      <Link to={`/tag/${slugify(tag, {lower: true})}`} key={tag}>
        {tag}
      </Link>
    ))
  }else{
    return tags.join(', ')
  }
}
