import React from 'react'
import PropTypes from 'prop-types'

const YouTube = ({id, title}) => {
  const url = `https://www.youtube.com/embed/${id}?rel=0`
  return(
    <iframe src={url}
            title={title}
            width='560'
            height='315'
            frameBorder='0'
            style={{maxWidth: '90%', display: 'block', margin: '8px auto'}} allowFullScreen />
  )
}

YouTube.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default YouTube
