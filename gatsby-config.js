module.exports = {
  siteMetadata: {
    title: `Bonanza Marketing`,
    description: `The Leading Expert in Judgment Portfolio Management`,
    author: `Trevor Adams`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
