/** @jsx jsx */
import React, { useState } from "react"
import { Link } from "gatsby"
import { Flex, jsx } from "theme-ui"
import { keyframes } from "@emotion/react"
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

  const wiggle1 = keyframes({
    "0%": {
      transform: "translate(0)",
    },
    "25%": {
      transform: "translate(-1px)",
    },
    "75%": {
      transform: "translate(1px)",
    },
    "100%": {
      transform: "translate(0)",
    },
  })

  const wiggle2 = keyframes({
    "0%": {
      transform: "translate(0)",
    },
    "25%": {
      transform: "translate(-0.5px)",
    },
    "75%": {
      transform: "translate(1px)",
    },
    "100%": {
      transform: "translate(0)",
    },
  })

  const wiggle3 = keyframes({
    "0%": {
      transform: "translate(0)",
    },
    "25%": {
      transform: "translate(-0.5px, -0.5px)",
    },
    "75%": {
      transform: "translate(1px, 0.5px)",
    },
    "100%": {
      transform: "translate(0)",
    },
  })

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
            transform: "scale(1)",
            transition: ".2s linear all",
            fill: "grey",

            ":not(:nth-child(3))": {
              // Everything but the bottle
              transformOrigin: "center",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDuration: "1s",
              animationName: wiggle3.toString(),
            },
            ":hover": {
              fill: "orange",
            },
            ":nth-child(3n)": {
              fill: "red",
              animationDelay: "200ms",
              animationName: wiggle1.toString(),
              ":hover": {
                fill: "pink",
              },
            },
            ":nth-child(4n)": {
              fill: "purple",
              animationDelay: "300ms",
              animationName: wiggle2.toString(),
              ":hover": {
                fill: "red",
              },
            },
            ":nth-child(5n)": {
              fill: "pink",
              animationDelay: "400ms",
              ":hover": {
                fill: "yellow",
              },
            },
            ":nth-child(8n)": {
              fill: "yellow",
              animationDelay: "500ms",
              ":hover": {
                fill: "pink",
              },
            },
            ":nth-child(3)": {
              fill: "green",
              stroke: "green",
              strokeWidth: "3px",
              cursor: "pointer",
              ":hover": {
                fill: "blue",
                stroke: "blue",
                strokeWidth: "5px",
              },
              ":active": {
                strokeWidth: "0",
              },
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
