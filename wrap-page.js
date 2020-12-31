import React from "react"
import Meta from "./src/components/Meta"

const wrapPage = ({ element }) => {
  return (
    <>
      <Meta />
      {element}
    </>
  )
}

export default wrapPage
