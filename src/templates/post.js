import React from 'react'
import Image from "gatsby-image"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComment, faFolder } from '@fortawesome/free-solid-svg-icons'
import Layout from '../layout/layout'
import SEO from '../components/seo'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import dateFormatter from '../utils/dateFormatter'
import categoryFormatter from '../utils/categoryFormatter'
import PageContent from '../typography/pageContent'
import ComponentProvider from "../typography/componentProvider"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import siteConfig from '../site-config.json'
import TagExplorer from "../components/tagExplorer"
import ShareThisPost from "../components/shareThisPost"

const SubTitle = styled.div`
  font-family: 'Anton', 'sans-serif';
  font-size: 18px;
  margin: 10px 0;
  color: #626262;

  svg {
    margin-left: 20px;
    margin-right: 7px;

    &:first-child { margin-left: 5px; }
  }
`

const Post = ({data}) => {
  const disqusConfig = {
    url: `${siteConfig.disqusUrl}/${data.mdx.frontmatter.slug}`
  }

  return(
    <Layout>
      <SEO title={data.mdx.frontmatter.title}/>
      <h1>{data.mdx.frontmatter.title}</h1>
      <SubTitle>
        <FontAwesomeIcon icon={faCalendar} />{dateFormatter(data.mdx.frontmatter.date, true)}
        <FontAwesomeIcon icon={faComment} /><CommentCount config={disqusConfig} placeholder={'...'} />
        <FontAwesomeIcon icon={faFolder} />{categoryFormatter(data.mdx.frontmatter.categories, false)}
      </SubTitle>
      <Image fluid={data.mdx.frontmatter.image.childImageSharp.fluid} />
      <PageContent>
        <ComponentProvider>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </ComponentProvider>
        <TagExplorer tags={data.mdx.frontmatter.tags} />
      </PageContent>
      <ShareThisPost slug={data.mdx.frontmatter.slug} />
      <Disqus config={disqusConfig} />
    </Layout>
  )
}

export const result = graphql`
  query loadPostsQuery($slug: String!) {
    mdx(frontmatter: { slug: {eq: $slug} }) {
      frontmatter {
          title
          slug
          date
          categories
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 370) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        body
    }
  }
`

export default Post
