const path = require(`path`)
const chunk = require(`lodash/chunk`)
const util = require('util')
const child_process = require('child_process')
const exec = util.promisify(child_process.exec)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
//const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)
  const pages = await getPages(gatsbyUtilities)

  if (posts.length) {
    // If there are posts, create pages for them
    await createIndividualBlogPostPages({ posts, gatsbyUtilities })
    // and a paginated archive
    await createBlogPostArchive({ posts, gatsbyUtilities })
  }

  if (pages.length) {
    await createWordpressPages({ pages, gatsbyUtilities })
  }
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) => {
  return Promise.all(
    posts.map(({ previous, post, next }) => {
      if (post.acfPostFields.postType !== 'launch-announcement') {
        return
      }

      return (
        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        gatsbyUtilities.actions.createPage({
          // Use the WordPress uri as the Gatsby page path
          // This is a good idea so that internal links and menus work 👍
          path: post.uri,

          // use the appropriate post template as the page component
          component: path.resolve(
            `./src/templates/wp-launch-announcement-post.js`
          ),

          // `context` is available in the template as a prop and
          // as a variable in GraphQL.
          context: {
            // we need to add the post id here
            // so our blog post template knows which blog post
            // the current page is (when you open it in a browser)
            id: post.id,

            // We also use the next and previous id's to query them and add links!
            // We're re-assigning graphql's built-in 'next' to previous and vice-versa because it makes more
            // visual sense in our UI this way.
            previousPostId:
              next &&
              next.acfPostFields.postType === post.acfPostFields.postType
                ? next.id
                : null,
            nextPostId:
              previous &&
              previous.acfPostFields.postType === post.acfPostFields.postType
                ? previous.id
                : null,
          },
        })
      )
    })
  )
}

/**
 * This function creates pages in Gatsby from the pages defined in the Wordpress admin area
 */
const createWordpressPages = async ({ pages, gatsbyUtilities }) => {
  const graphqlResult = await gatsbyUtilities.graphql(`
    {
      wpPage(isPostsPage: {eq: true}) {
        uri
      }
      primaryMenu: allWpMenu(filter: {slug: {eq: "primary-menu"}}) {
        nodes {
          slug
          menuItems {
            nodes {
              connectedNode {
                node {
                  ... on WpPage {
                    databaseId
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const postsPageUri = graphqlResult.data.wpPage.uri
  const primaryMenuPageIds = graphqlResult.data.primaryMenu.nodes.map(node =>
    node.menuItems.nodes.map(node => node.connectedNode.node.databaseId)
  )[0]

  return Promise.all(
    pages.map(({ page }) => {
      const isPrimaryPage =
        primaryMenuPageIds.includes(page.databaseId) || page.uri === '/'

      if (page.uri === postsPageUri) {
        return null
      }

      return gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        path: page.uri,

        // use the wp page template as the page component
        component: path.resolve(`./src/templates/wp-page.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: page.id,
          isPrimaryPage,
        },
      })
    })
  )
}

/**
 * This function creates all the individual blog pages in this site
 */
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      wpPage(isPostsPage: {eq: true}) {
        uri
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings
  const postsPageUri = graphqlResult.data.wpPage.uri

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page === 1 && page <= totalPages) {
          return `${postsPageUri}`
        } else if (page > 1 && page <= totalPages) {
          return `${postsPageUri}page/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/wp-post-archive.js`),

        // context is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,
          currentPage: pageNumber,
          totalPages,
          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
            acfPostFields {
              postType
            }
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
            acfPostFields {
              postType
            }
          }

          next {
            id
            acfPostFields {
              postType
            }
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPost.edges
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress pages. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPages({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query WpPages {
      allWpPage {
        edges {
          page: node {
            uri
            id
            databaseId
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPage.edges
}

// Under the hood, Gatsby Cloud uses @netlify/zip-it-and-ship-it to deploy your functions,
// which does not build, transpile, or install the function dependencies; this needs to be done
// before deployment.
exports.onPostBuild = async gatsbyNodeHelpers => {
  const { reporter } = gatsbyNodeHelpers

  const reportOut = report => {
    const { stderr, stdout } = report
    if (stderr) reporter.error(stderr)
    if (stdout) reporter.info(stdout)
  }

  // NOTE: the gatsby build process automatically copies /static/functions to /public/functions
  // The exec() functions executes command line scripts. Here we're using it to build the functions
  // If you use yarn, replace "npm install" with "yarn install"
  reportOut(await exec('cd ./public/functions && npm install'))
}
