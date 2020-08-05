import React from 'react'
import slugify from 'slugify'
import { Link } from 'gatsby'

export default (tags, addLinks) => {
  if(addLinks) {
    return tags.map((tag, index) => (
      <Link to={`/tag/${slugify(tag, {lower: true})}`} key={tag}>
        {tag}{index + 1 < tags.length && ', '}
      </Link>
    ))
  }else{
    return tags.join(', ')
  }
}
