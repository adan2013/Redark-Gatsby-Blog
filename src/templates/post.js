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
import UserFeedback from "../components/userFeedback"
import RelatedPosts from "../components/relatedPosts"

const SubTitle = styled.div`
  font-family: 'Anton', 'sans-serif';
  font-size: 18px;
  margin: 10px 0;
  color: var(--sub-text-color);

  svg {
    margin-left: 20px;
    margin-right: 7px;

    &:first-child { margin-left: 5px; }
  }
`

const CommentsWrapper = styled.div`
  #disqus_thread {
    background-color: var(--comments-bg);
    padding: 12px 14px;
    border-radius: 6px;
  }
`

const Post = ({data}) => {
  const disqusConfig = {
    url: `${siteConfig.disqusUrl}/${data.mdx.frontmatter.slug}`
  }

  return(
    <Layout>
      <SEO title={data.mdx.frontmatter.title}
           description={data.mdx.excerpt}
           image={data.mdx.frontmatter.image.childImageSharp.fluid.src}
           slug={data.mdx.frontmatter.slug}
           published={data.mdx.frontmatter.date}/>
      <article>
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
      </article>
      <ShareThisPost slug={data.mdx.frontmatter.slug} />
      <UserFeedback/>
      <RelatedPosts metadata={data.mdx.frontmatter} />
      <CommentsWrapper>
        <Disqus config={disqusConfig} />
      </CommentsWrapper>
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
          relatedPosts
          image {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 370, quality: 90) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        body
        excerpt
    }
  }
`

export default Post
