import React from "react"
import { graphql, Link } from "gatsby"
import { Button, Flex, Box } from "theme-ui"

const MarkdownTemplate = ({ data }) => {
  return (
    <>
      <Box p={3}>
        <Link to="/">← Back to the bottles of happiness</Link>
      </Box>

      <Box
        sx={{
          maxWidth: 512,
          mx: "auto",
          px: 2,
        }}
      >
        <article>
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </article>
      </Box>
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
