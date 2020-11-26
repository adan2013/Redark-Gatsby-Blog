import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import ActionButton from './actionButton'
import { LayoutContainer, LayoutColumn } from './contentLayout'
import Gallery from './gallery'
import GifViewer from './gifViewer'
import VideoViewer from './videoViewer'
import ImageDescription from './imageDescription'
import InfoBlock from './infoBlock'
import WarningBlock from './warningBlock'
import Quote from './quote'
import YouTube from './youTube'
import DownloadButton from './downloadButton'
import Link from './link'
import { GoodList, BadList, StarList, OkList } from './list'
import AdSense from './adSenseInArticle'

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
  DownloadButton,
  a: props => <Link {...props} />,
  GoodList, BadList, StarList, OkList,
  AdSense
}

const ComponentProvider = ({children}) => (<MDXProvider components={components}>{children}</MDXProvider>)

export default ComponentProvider
