const { createFilePath } = require("gatsby-source-filesystem")
const { paginate } = require('gatsby-awesome-pagination')
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              tag
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  const blog = result.data.allMdx.edges.filter(({ node: post}) => post.frontmatter.tag.includes("blog"))
  const postsPerPage = 2 // Change this to get more resutls per page.
	const numPages = Math.ceil(blog.length / postsPerPage)

  ///delte this if this does not work
  Array.from( {length: numPages} ).forEach( (_, i) => {
		createPage({
			path: i === 0 ? '/blog' : `/blog/${i + 1}`,
			component: path.resolve('./src/templates/blog.js'),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1
			}
		});
	})


  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: { id: node.id },
    })
  })

}
