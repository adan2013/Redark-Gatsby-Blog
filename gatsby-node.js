const path = require(`path`)
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const postBrowserTemplate = path.resolve(`src/templates/postBrowser.js`)

  //CATEGORY PAGES
  const categories = require(path.resolve(`src/post-config.json`)).categories
  categories.forEach(category => {
    reporter.info(`Category page created: ${slugify(category, {lower: true})}`)
    createPage({
      path: `category/${slugify(category, {lower: true})}`,
      component: postBrowserTemplate,
      context: {
        category: category
      },
    })
  })

  //TAG PAGES
  const tags = require(path.resolve(`src/post-config.json`)).tags
  tags.forEach(tag => {
    reporter.info(`Tag page created: ${slugify(tag, {lower: true})}`)
    createPage({
      path: `tag/${slugify(tag, {lower: true})}`,
      component: postBrowserTemplate,
      context: {
        tag: tag
      },
    })
  })

  //POST PAGES
  const posts = await graphql(`
    query loadPostsQuery {
      allMdx {
        nodes {
          frontmatter {
            slug
            categories
            tags
          }
        }
      }
    }
  `)
  posts.data.allMdx.nodes.forEach(post => {
    post.frontmatter.categories.forEach(category => {
      if(!categories.includes(category)) {
        reporter.warn(`Undefinied category detected! Post: ${slugify(post.frontmatter.slug, {lower: true})} Category: ${slugify(category, {lower: true})}`)
      }
    })
    post.frontmatter.tags.forEach(tag => {
      if(!tags.includes(tag)) {
        reporter.warn(`Undefinied tag detected! Post: ${slugify(post.frontmatter.slug, {lower: true})} Tag: ${slugify(tag, {lower: true})}`)
      }
    })
    createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug
      },
    })
  })

}
