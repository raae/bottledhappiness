/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { Button, Flex, Box, jsx } from "theme-ui"
import useSound from 'use-sound'
import laugh1 from '../../laughs/534709__artymarce__childlaugh.mp3'

export default function Home() {
  const [isChecked, setIsChecked] = React.useState(false);
  // const [play, { stop }] = useSound(laugh1);
  const [playActive] = useSound(
    laugh1,
    { volume: 0.33 }
  );
  const [playOn] = useSound(
    laugh1,
    { volume: 0.33 }
  );
  const [playOff] = useSound(
    laugh1,
    { volume: 0.33 }
  );
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
          name="bottle-checkbox"
          onChange={() => setIsChecked(!isChecked)}
          onMouseDown={playActive}
          onMouseUp={() => {
            isChecked ? playOff() : playOn();
          }}

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
