/** @jsx jsx */
import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx, useThemeUI } from "theme-ui"

const MarkdownTemplate = ({ data }) => {
  const { theme } = useThemeUI()
  return (
    <>
      <Helmet>
        <title>🍾🤣🍾 - About </title>
        <link rel="icon" href="data:image/svg+xml, <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤣</text></svg>" />
      </Helmet>

      <main
        sx={{
          maxWidth: 512,
          mx: "auto",
          py: 4,
          px: 2,
        }}
      >
        <Link
          to="/"
          sx={{
            ...theme.styles.a,
          }}
        >
          ← Back to the bottles of happiness
        </Link>

        <article
          sx={{
            my: 5,
            ...theme.styles,
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </article>
      </main>
    </>
  )
}

export default MarkdownTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
    }
  }
`
