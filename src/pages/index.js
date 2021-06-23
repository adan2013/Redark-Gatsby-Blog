import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import PostBlock from "../components/postBlock"
import ActionButton from "../typography/actionButton"
import PageContent from "../typography"
import siteConfig from "../site-config.json"
import AdSenseInArticle from "../typography/adSenseInArticle"

const Page = ({data}) => {

  return (
    <Layout hideNewPosts>
      <SEO title={"Nowe wpisy"}/>
      <h1>Nowe wpisy</h1>
      {
        data.allMdx.nodes.map(({ frontmatter: { slug, image, title, date, categories } }, index) => (
          <React.Fragment key={slug}>
            {siteConfig.adSense.onMainPage && index === Math.round(data.allMdx.nodes.length * 0.75) && <AdSenseInArticle/>}
            <PostBlock key={slug}
                       slug={slug}
                       image={image.childImageSharp.fluid}
                       title={title}
                       date={date}
                       categories={categories} />
          </React.Fragment>
        ))
      }
      <PageContent>
        <ActionButton to={`/blog/2`}>Zobacz więcej</ActionButton>
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query mainPagePostListQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      nodes {
        frontmatter {
          title
          slug
          date
          categories
          image {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 370, quality: 90) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default Page
