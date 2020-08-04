const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    query loadPostsQuery {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug
      },
    })
  })
}
