/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { Flex, jsx } from "theme-ui"
import useSound from "use-sound"
import { Helmet } from "react-helmet"
import laugh1 from "../assets/laughs/534709__artymarce__childlaugh.mp3"
import laugh2 from "../assets/laughs/Laugh2LillianBenedicte2020.mp3"
import laugh3 from "../assets/laughs/Laugh3LillianJUNE_30_2016_Trampolinelykke_paa_landet_hos_babywildelvs.mp3"

import Illustration from "../components/Illustration"

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

  return (
    <>
      <Helmet>
        <title>🍾🤣🍾</title>
        <link rel="icon" href="data:image/svg+xml, <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤣</text></svg>" />

      </Helmet>

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
        <Illustration onClick={laughingLillianOnClick} />

        <Link sx={{ fontFamily: "body", p: 3, display: "block" }} to="about">
          About
        </Link>
      </Flex>
    </>
  )
}
