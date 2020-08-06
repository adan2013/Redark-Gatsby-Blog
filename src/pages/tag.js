import React from 'react'
import { Link } from 'gatsby'
import slugify from 'slugify'
import styled from 'styled-components'
import postConfig from '../post-config.json'
import Layout from "../layout/layout"
import SEO from "../components/seo"
import { HoverFillLinkStyle } from "../layout/globalStyles"
import PageContent from "../typography"

const List = styled.ul`
  li {
    ${HoverFillLinkStyle}
  }
`

const Tag = () => (
  <Layout>
    <SEO title={'Tagi'}/>
    <h1>Tagi</h1>
    <PageContent>
      Wybierz jeden z tagów:
      <List>
        {
          postConfig.tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag, {lower: true})}`}>
                {tag}
              </Link>
            </li>
          ))
        }
      </List>
    </PageContent>
  </Layout>
)

export default Tag
