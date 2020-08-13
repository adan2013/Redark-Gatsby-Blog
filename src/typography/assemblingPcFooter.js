import React from 'react'
import ActionButton from './actionButton'
import PropTypes from 'prop-types'
import { LayoutContainer, LayoutColumn } from "./contentLayout"

const AssemblingPcFooter = ({nextPost}) => (
  <LayoutContainer>
    <LayoutColumn>
      <ActionButton to={'/skladanie-pc'}>Spis treści poradnika</ActionButton>
    </LayoutColumn>
    {
      nextPost !== ''
      &&
      <LayoutColumn>
        <ActionButton to={nextPost}>Następny artykuł</ActionButton>
      </LayoutColumn>
    }
  </LayoutContainer>
)

AssemblingPcFooter.propTypes = {
  nextPost: PropTypes.string.isRequired
}

export default AssemblingPcFooter
