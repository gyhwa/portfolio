/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
      title: `Gina Hwang`,
      titleTemplate: "%s · Portfolio",
      description:
      "Forever a student. Marketer. Artist.",
      url: "https://gyhwa.github.io/portfolio/", // No trailing slash allowed!
      image: "", // Path to your image you placed in the 'static' folder
      twitterUsername: "@occlumency",
    },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-plugin-mdx",
    `gatsby-transformer-remark`
  ],
  module.exports = {
  pathPrefix: "/reponame",
  }
}



// module.exports = {
//   siteMetadata: {
//     title: `Title from siteMetadata`,
//   },
//   plugins: [
//     `gatsby-plugin-emotion`,
//     {
//       resolve: `gatsby-plugin-typography`,
//       options: {
//         pathToConfigModule: `src/utils/typography`,
//       },
//     },
//   ],
// }
