import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import ActionButton from "./actionButton"
import { LayoutContainer, LayoutColumn } from "./contentLayout"
import Gallery from "./gallery"
import GifViewer from "./gifViewer"
import VideoViewer from "./videoViewer"
import ImageDescription from "./imageDescription"
import InfoBlock from "./InfoBlock"
import WarningBlock from "./WarningBlock"
import Quote from "./quote"
import YouTube from "./youTube"
import { GoodList, BadList, StarList, OkList } from "./list"

const components = {
  ActionButton,
  LayoutContainer,
  LayoutColumn,
  Gallery,
  GifViewer,
  VideoViewer,
  ImageDescription,
  InfoBlock,
  WarningBlock,
  Quote,
  YouTube,
  GoodList, BadList, StarList, OkList
}

const ComponentProvider = ({children}) => (<MDXProvider components={components}>{children}</MDXProvider>)

export default ComponentProvider
