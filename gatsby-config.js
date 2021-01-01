/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Bottled Happiness 🍾🤣🍾",
    description: "A Bottle of our Daughter's Laughter",
    favEmojii: "🍾",
    url: "https://bottledhappiness.app", // No trailing slash allowed!
    image: "/images/social.jpeg", // Path to your image you placed in the 'static' folder
    lang: "en",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                exclude: ["Reddit", "Flickr"],
              },
            },
          },
        ],
      },
    },
  ],
}
