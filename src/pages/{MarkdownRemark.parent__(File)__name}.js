/** @jsx jsx */
import React from "react"
import { graphql, Link } from "gatsby"
import { jsx, useThemeUI } from "theme-ui"

const MarkdownTemplate = ({ data }) => {
  const { theme } = useThemeUI()
  return (
    <>
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
