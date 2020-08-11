const path = require(`path`)
const slugify = require('slugify')
const postsPerPage = 10;

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if(stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const postBrowserTemplate = path.resolve(`src/templates/postBrowser.js`)
  const categoryBrowserTemplate = path.resolve(`src/templates/categoryBrowser.js`)
  const tagBrowserTemplate = path.resolve(`src/templates/tagBrowser.js`)

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) await callback(array[index], index, array)
  }

  //CATEGORY PAGES
  const categories = require(path.resolve(`src/post-config.json`)).categories
  const fetchCategories = async () => {
    await asyncForEach(categories, async (category) => {
      const postsByCategory = await graphql(`
        query loadPostsByCategory($category: String!) {
          allMdx(sort: {order: DESC, fields: [frontmatter___date]}, filter: { frontmatter: { categories: { in: [$category] } } } ) {
            nodes {
              frontmatter {
                slug
              }
            }
          }
        }
      `, { category })
      const numPages = Math.ceil(postsByCategory.data.allMdx.nodes.length / postsPerPage)
      if(numPages === 0) {
        reporter.warn(`empty category detected! Name: ${category}`)
      }else{
        Array.from({ length: numPages }).forEach((_, i) => {
          const slug = slugify(category, {lower: true})
          createPage({
            path: i === 0 ? `/category/${slug}` : `/category/${slug}/${i + 1}`,
            component: categoryBrowserTemplate,
            context: {
              paginationLink: `/category/${slug}`,
              limit: postsPerPage,
              skip: i * postsPerPage,
              currentPage: i + 1,
              numPages,
              category
            },
          })
        })
        reporter.info(`category browser created: ${slugify(category, {lower: true})} (posts: ${postsByCategory.data.allMdx.nodes.length}, pages: ${numPages})`)
      }
    });
  }
  await fetchCategories()

  //TAG PAGES
  const tags = require(path.resolve(`src/post-config.json`)).tags
  const fetchTags = async () => {
    await asyncForEach(tags, async (tag) => {
      const postsByTag = await graphql(`
        query loadPostsByTag($tag: String!) {
          allMdx(sort: {order: DESC, fields: [frontmatter___date]}, filter: { frontmatter: { tags: { in: [$tag] } } } ) {
            nodes {
              frontmatter {
                slug
              }
            }
          }
        }
      `, { tag })
      const numPages = Math.ceil(postsByTag.data.allMdx.nodes.length / postsPerPage)
      if(numPages === 0) {
        reporter.warn(`empty tag detected! Name: ${tag}`)
      }else{
        Array.from({ length: numPages }).forEach((_, i) => {
          const slug = slugify(tag, {lower: true})
          createPage({
            path: i === 0 ? `/tag/${slug}` : `/tag/${slug}/${i + 1}`,
            component: tagBrowserTemplate,
            context: {
              paginationLink: `/tag/${slug}`,
              limit: postsPerPage,
              skip: i * postsPerPage,
              currentPage: i + 1,
              numPages,
              tag
            },
          })
        })
        reporter.info(`tag browser created: ${slugify(tag, {lower: true})} (posts: ${postsByTag.data.allMdx.nodes.length}, pages: ${numPages})`)
      }
    });
  }
  await fetchTags()

  const posts = await graphql(`
    query loadPostsQuery {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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

  //BLOG PAGES
  const numPages = Math.ceil(posts.data.allMdx.nodes.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: postBrowserTemplate,
      context: {
        paginationLink: `/blog`,
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages
      },
    })
  })
  reporter.info(`post browser created! Number of posts: ${posts.data.allMdx.nodes.length} Number of pages: ${numPages}`)

  //POST PAGES
  posts.data.allMdx.nodes.forEach(post => {
    post.frontmatter.categories.forEach(category => {
      if(!categories.includes(category)) {
        reporter.warn(`undefinied category detected! Post: ${slugify(post.frontmatter.slug, {lower: true})} Category: ${slugify(category, {lower: true})}`)
      }
    })
    post.frontmatter.tags.forEach(tag => {
      if(!tags.includes(tag)) {
        reporter.warn(`undefinied tag detected! Post: ${slugify(post.frontmatter.slug, {lower: true})} Tag: ${slugify(tag, {lower: true})}`)
      }
    })
    createPage({
      path: `/${post.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug
      },
    })
  })

}
