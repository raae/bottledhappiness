import React from "react"
import { Button, Flex, Box } from "theme-ui"
import useSound from 'use-sound'

// record Lillian (5.5 🦄) and Liv (7) and add laugh1 in the sounds folder
import laugh1 from '../../sounds/g_is_for_grr.mp3';

export default function Home() {
  const [play] = useSound(laugh1);
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
          onClick={play}
          sx={{ height: "80vh", width: "clamp(30px, 30vw, 600px)" }}
        >
          Bottle placeholder
        </Button>
      </Box>
    </Flex>
  )
}
