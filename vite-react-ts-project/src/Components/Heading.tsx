import { ReactElement } from "react"

/* eslint-disable @typescript-eslint/no-unused-vars */
type HeadingProps = {title:string}

function Heading({title}:HeadingProps):ReactElement {
  return (
    <h1>
        {title}
    </h1>
  )
}

export default Heading