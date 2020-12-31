/** @jsx jsx */
import React from "react"
import { keyframes } from "@emotion/react"
import { Button, jsx } from "theme-ui"
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
    <Button
      {...props}
      sx={{
        width: "100%",
        height: "100%",
        background: "transparent",
        overflow: "hidden",
        padding: 0,
        ":focus": {
          outline: 0,
          "#Bottle #Background": {
            fill: "pink",
          },
          "#Bottle #Outline": {
            strokeWidth: "5px",
          },
        },
        ":active": {
          "#Bottle #Outline": {
            strokeWidth: "0px !important",
          },
        },
      }}
    >
      <IllustrationSVG
        sx={{
          width: "100%",
          height: "100%",
          "#Bottle": {
            cursor: "pointer",

            "#Background": {
              transition: ".2s linear all",
              fill: "transparent",
              opacity: "0.5",
            },

            ":hover #Background": {
              fill: "pink",
            },

            "#Outline": {
              fill: "green",
              transition: ".2s ease-in-out all",
              stroke: "green",
              strokeWidth: "3px",
            },

            ":hover #Outline": {
              strokeWidth: "5px",
            },
          },

          "#Bubbles path": {
            fill: "purple",
            transformOrigin: "center",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDuration: "1s",
            animationName: wiggle3.toString(),
            transition: ".2s linear all",

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
              fill: "grey",
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
          },
        }}
      />
    </Button>
  )
}

export default Illustration
