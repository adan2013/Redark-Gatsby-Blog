import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DataContext from '../components/dataContext'

const VideoWrapper = styled.div`
  max-width: min(90%, 450px);
  display: block;
  margin: 5px auto;
`

const VideoViewer = ({file}) => {
  const data = useContext(DataContext)
  const videoUrl = data.allFile.nodes.find(node => node.relativePath.indexOf(file) >= 0).publicURL
  /* eslint-disable */
  return(
    <VideoWrapper>
      <video controls={true} style={{width: '100%'}}>
        <source src={videoUrl} type={"video/mp4"} />
      </video>
    </VideoWrapper>
  )
  /* eslint-enable */
}

VideoViewer.propTypes = {
  file: PropTypes.string.isRequired
}

export default VideoViewer
