module.exports = {
  siteMetadata: {
    title: 'Mocks 🚀',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mock endpoint manager',
        short_name: 'mocks',
        start_url: '/',
        background_color: '#ffb200',
        theme_color: '#4698E4',
        display: 'minimal-ui',
        icon: 'src/images/rocket.png',
      },
    },
    'gatsby-plugin-layout',
    // 'gatsby-plugin-offline',
  ],
}
