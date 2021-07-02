module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.finiteyfi.com/",
        sitemap: "https://www.finiteyfi.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
  siteMetadata: {
    title: "Finiteyfi",
    url: "https://www.finiteyfi.com/",
    siteUrl: `https://www.finiteyfi.com/`,
  },
}
