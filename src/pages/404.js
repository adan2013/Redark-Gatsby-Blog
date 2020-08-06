import React from "react"
import styled from 'styled-components'

import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageContent from "../typography"

const Margin = styled.div`
  margin: 20px 15px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Strona nie została znaleziona</h1>
    <PageContent>
      <Margin>Strona, którą próbujesz odwiedzić, nie istnieje! :(</Margin>
    </PageContent>
  </Layout>
)

export default NotFoundPage
