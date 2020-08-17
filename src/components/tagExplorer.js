import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tagFormatter from '../utils/tagFormatter'

const TagWrapper = styled.div`
  a {
    display: inline-block;
    margin-right: 6px;
    border-bottom: none !important;  
  }
  
  a:hover {
    background-position: 0 0 !important;
    color: #000;
  }
  
  a::before {
    content: '#';
    margin-right: 4px;
    color: #d40000;
    font-weight: bold;
  }
`

const TagExplorer = ({tags}) => {
  if(tags.length > 0) {
    return(
      <TagWrapper>
        Tagi:<br/>
        {tagFormatter(tags, true)}
      </TagWrapper>
    )
  }else{
    return(<></>)
  }
}

TagExplorer.propTypes = {
  tags: PropTypes.array.isRequired
}

export default TagExplorer
