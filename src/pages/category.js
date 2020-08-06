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

const Category = () => (
  <Layout>
    <SEO title={'Kategorie'}/>
    <h1>Kategorie</h1>
    <PageContent>
      Wybierz jedną z kategorii:
      <List>
        {
          postConfig.categories.map(category => (
            <li key={category}>
              <Link to={`/category/${slugify(category, {lower: true})}`}>
                {category}
              </Link>
            </li>
          ))
        }
      </List>
    </PageContent>
  </Layout>
)

export default Category
