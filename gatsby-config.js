/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
      title: `Title from siteMetadata`,
      titleTemplate: "%s · The Real Hero",
      description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
      url: "https://www.doe.com", // No trailing slash allowed!
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
  pathPrefix: "/portfolio",
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
