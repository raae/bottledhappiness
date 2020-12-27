/** @jsx jsx */
import React from "react"
import { keyframes } from "@emotion/react"
import { jsx } from "theme-ui"
import IllustrationSVG from "../assets/illustration.svg"

const Illustration = props => {
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
    <IllustrationSVG
      {...props}
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
  )
}

export default Illustration
