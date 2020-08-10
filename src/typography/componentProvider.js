import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import ActionButton from "./actionButton"
import { LayoutContainer, LayoutColumn } from "./contentLayout"
import Gallery from "./gallery"
import GifViewer from "./gifViewer"
import ImageDescription from "./imageDescription"
import InfoBlock from "./InfoBlock"
import WarningBlock from "./WarningBlock"

const components = {
  ActionButton,
  LayoutContainer,
  LayoutColumn,
  Gallery,
  GifViewer,
  ImageDescription,
  InfoBlock,
  WarningBlock
}

const ComponentProvider = ({children}) => (<MDXProvider components={components}>{children}</MDXProvider>)

export default ComponentProvider
