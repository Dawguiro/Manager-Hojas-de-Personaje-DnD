import React, { DOMElement, useState } from 'react'
import "./Inspo.css"

type Props = {
  texto: string
}

const Inspo = ({texto}: Props) => {
  type inspoClass = "inspo" | "inspo active"

  const [insClass, setClass] = useState("inspo" as inspoClass);
  
  const InspoToggle = () => {
    insClass == "inspo" ? 
     setClass("inspo active") :
     setClass("inspo")
  }

  return (
    <span onClick={InspoToggle}>
      <button className={insClass}>
        {texto}
      </button>
    </span>
  )
}

export default Inspo