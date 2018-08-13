module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'es4e3fxc3fmd',
        accessToken: 'cfb8f3d44c83c02bf09853928d539dfe66ce2d036aa2238d6ff7b5d71369a7da'
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
