import React from "react"
import { graphql, Link } from "gatsby"
import { Box } from "theme-ui"

const MarkdownTemplate = ({ data }) => {
  return (
    <>
      <Box>
        <Link to="/">← Back to the bottles of happiness</Link>
      </Box>
      <article>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </article>
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
