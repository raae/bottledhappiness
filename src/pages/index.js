/** @jsx jsx */
import React, { useState } from "react"
import { Link } from "gatsby"
import { Flex, Box, jsx } from "theme-ui"
import { Spring, config } from "react-spring/renderprops"
import useSound from "use-sound"
import { Helmet } from "react-helmet"
import laugh1 from "../assets/laughs/534709__artymarce__childlaugh.mp3"
import laugh2 from "../assets/laughs/Laugh2LillianBenedicte2020.mp3"
import laugh3 from "../assets/laughs/Laugh3LillianJUNE_30_2016_Trampolinelykke_paa_landet_hos_babywildelvs.mp3"


import IllustrationSVG from "../assets/illustration.svg"

export default function Home() {
  const [play] = useSound(laugh2)
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
      <Spring
        from={{
          transform: `translate(0px, 0px) rotate(0deg) scale(1)`,
        }}
        to={{
          transform: `translate(${0}px, ${5}px) rotate(${0}deg) scale(${1})`,
        }}
        reset={true}
        reverse={reverse}
        config={config.molasses}
        onRest={() => {
          setReverse(current => !current)
        }}
      >
        {props1 => (
          <IllustrationSVG
            onClick={play}
            sx={{
              height: "90vh",
              width: "clamp(30px, 30vw, 600px)",
              path: {
                ":nth-child(3n)": {
                  fill: "red",
                },
                ":nth-child(4n)": {
                  fill: "blue",
                  ...props1,
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
        )}
      </Spring>

      <Link sx={{ fontFamily: "body", p: 3, display: "block" }} to="about">
        About
      </Link>
    </Flex>
  )
}
