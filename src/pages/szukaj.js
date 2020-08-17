import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'

const Page = () => (
  <Layout>
    <SEO title={"Szukaj"}/>
    <h1>Szukaj</h1>
    <Helmet>
      <script async src="https://cse.google.com/cse.js?cx=f819788bf799ec7f3" />
    </Helmet>
    <div className="gcse-search" />
  </Layout>
)

export default Page
