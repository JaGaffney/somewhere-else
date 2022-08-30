module.exports = {
  siteMetadata: {
    title: `somewhere-else`,
    description: `idle game.`,
    author: `Jon Gaffney`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wordit`,
        short_name: `wordit`,
        start_url: `/`,
        background_color: `#181e2a`,
        theme_color: `#181e2a`,
        display: `fullscreen`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",

  ],
}
