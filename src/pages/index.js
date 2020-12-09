/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { Button, Flex, Box, jsx } from "theme-ui"
import useSound from 'use-sound'
import laugh1 from '../../laughs/534709__artymarce__childlaugh.mp3'

export default function Home() {
  const [play, { stop }] = useSound(laugh1);
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
          onClick={play}
          sx={{ height: "70vh", width: "clamp(30px, 30vw, 600px)" }}
        >
          Bottle placeholder
        </Button>
      </Box>

      <Link sx={{ fontFamily: "body", p: 3, display: "block" }} to="about">
        About
      </Link>
    </Flex>
  )
}
