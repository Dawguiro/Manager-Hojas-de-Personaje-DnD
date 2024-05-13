import React, { useState } from 'react'
import "./Inspo.css"

const Inspo = (props) => {
  const [insClass, setClass] = useState("inspo");
  const InspoToggle = (e) => {
    insClass == "inspo" ? setClass("inspo active") : setClass("inspo")
  }
  return (
       <span onClick={InspoToggle}>
      <button className={insClass} style={props.style}>
        {props.texto}
      </button>
    </span>
  )
}

export default Inspo