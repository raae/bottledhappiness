/** @jsx jsx */
import React, { useState } from "react"
import { Link } from "gatsby"
import { Flex, jsx } from "theme-ui"
import useSound from "use-sound"
import { Helmet } from "react-helmet"
import laugh1 from "../assets/laughs/534709__artymarce__childlaugh.mp3"
import laugh2 from "../assets/laughs/Laugh2LillianBenedicte2020.mp3"
import laugh3 from "../assets/laughs/Laugh3LillianJUNE_30_2016_Trampolinelykke_paa_landet_hos_babywildelvs.mp3"

import IllustrationSVG from "../assets/illustration.svg"

export default function Home() {
  const [play1] = useSound(laugh1)
  const [play2] = useSound(laugh2)
  const [play3] = useSound(laugh3)

  const laughingLillianOnClick = event => {
    event.preventDefault()
    const ourTopChildrenLaughs = [play1, play2, play3]
    const random = Math.floor(Math.random() * 3)
    ourTopChildrenLaughs[random]()
  }

  const [reverse, setReverse] = useState(false)

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
      <Helmet title="🍾🤣🍾" />
      <IllustrationSVG
        onClick={laughingLillianOnClick}
        sx={{
          path: {
            ":nth-child(3n)": {
              fill: "red",
            },
            ":nth-child(4n)": {
              fill: "blue",
            },
            ":nth-child(5n)": {
              fill: "pink",
            },
            ":nth-child(8n)": {
              fill: "yellow",
            },
          },
        }}
      />
      <Link sx={{ fontFamily: "body", p: 3, display: "block" }} to="about">
        About
      </Link>
    </Flex>
  )
}
