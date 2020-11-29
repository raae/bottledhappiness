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
      }}
    >
      <Box>
        <Button
          onClick={() => alert("Play sound")}
          sx={{ height: "80vh", width: "clamp(30px, 30vw, 600px)" }}
        >
          Bottle placeholder
        </Button>
      </Box>
    </Flex>
  )
}
