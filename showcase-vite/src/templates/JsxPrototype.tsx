import {useState} from "react"

/**
 * Can be dropped into jsx of the react component
 */
export const JsxPrototype = () => {
  return (
    <div></div>
  )
}

/**
 * Can be dropped into code content the react component
 */
export const CodePrototype = () => {
  const [state, setState] = useState()
}

/**
 * Can be dropped into jsx of the react component.
 * Prototype content code will be distributed over react component code
 */
export const CodeAndJsxPrototype = () => {
  const [state, setState] = useState()
  return (
    <div></div>
  )
}