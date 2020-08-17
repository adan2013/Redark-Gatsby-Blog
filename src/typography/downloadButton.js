import React, { useContext } from 'react'
import DataContext from '../components/dataContext'
import PropTypes from 'prop-types'
import ActionButton from './actionButton'

const DownloadButton = ({file, text}) => {
  const data = useContext(DataContext)
  const url = data.allFile.nodes.find(node => node.relativePath.indexOf(file) >= 0).publicURL
  return(
    <ActionButton to={url} download>
      {text && text !== '' ? text : 'Pobierz plik'}
    </ActionButton>
  )
}

DownloadButton.propTypes = {
  file: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default DownloadButton
