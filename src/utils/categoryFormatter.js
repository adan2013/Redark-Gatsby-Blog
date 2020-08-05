import React from 'react'
import slugify from 'slugify'
import { Link } from 'gatsby'

export default (categories, addLinks) => {
  if(addLinks) {
    return categories.map((category, index) => (
      <Link to={`/category/${slugify(category, {lower: true})}`} key={category}>
        {category}{index + 1 < categories.length && ', '}
      </Link>
    ))
  }else{
    return categories.join(', ')
  }
}
