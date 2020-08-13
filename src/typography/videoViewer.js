import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
{
  allFile(filter: {extension: {eq: "mp4"}}) {
    nodes {
      publicURL
      relativePath
    }
  }
}
`

const VideoWrapper = styled.div`
  max-width: min(90%, 450px);
  display: block;
  margin: 5px auto;
`

const VideoViewer = ({file}) => {
  const data = useStaticQuery(query)
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

export default VideoViewer
