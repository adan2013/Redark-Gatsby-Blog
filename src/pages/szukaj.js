import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'

const GoogleWrapper = styled.div`
  margin-top: 20px;
`

const Page = () => (
  <Layout>
    <SEO title={"Szukaj"}/>
    <h1>Szukaj</h1>
    <Helmet>
      <script async src="https://cse.google.com/cse.js?cx=f819788bf799ec7f3" />
    </Helmet>
    <GoogleWrapper>
      <div className="gcse-search" />
    </GoogleWrapper>
  </Layout>
)

export default Page
