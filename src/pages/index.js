/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import useSound from "use-sound"
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
      <main
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Illustration onClick={laughingLillianOnClick} />

        <Link
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "background",
            fontFamily: "body",
            px: 3,
            py: 2,
            display: "block",
          }}
          to="about"
        >
          About
        </Link>
      </main>
    </>
  )
}
