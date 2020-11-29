import { Link } from "gatsby"
import React from "react"
import { Button, Flex, Box } from "theme-ui"

export default function Home() {
  return (
    <Flex
      bg=""
      sx={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Button
          onClick={() => alert("Play sound")}
          sx={{ height: "70vh", width: "clamp(30px, 30vw, 600px)" }}
        >
          Bottle placeholder
        </Button>
      </Box>
      <Box p={3}>
        <Link to="about">About</Link>
      </Box>
    </Flex>
  )
}
