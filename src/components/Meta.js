import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Meta = () => {
  const { site } = useStaticQuery(query)
  const {
    title,
    description,
    favEmojii,
    siteImage,
    siteUrl,
  } = site.siteMetadata

  const socialImage = `${siteUrl}${siteImage}`
  const favIcon = `data:image/svg+xml, <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>
    ${favEmojii}
    </text></svg>`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favIcon} />
      <meta name="image" content={socialImage} />

      <meta property="og:title" content={title} />
      <meta property="og:image" content={socialImage} />

      <meta property="twitter:title" content={title} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default Meta

const query = graphql`
  query Meta {
    site {
      siteMetadata {
        title
        description
        favEmojii
        siteUrl: url
        siteImage: image
      }
    }
  }
`
