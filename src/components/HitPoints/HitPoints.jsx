import React, { useState } from 'react'
import "./HitPoints.css"

const HitPoints = (props) => {
  const [input, setInput] = useState(0)
  const [hp, setHp] = useState(Number(props.hp))

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const updateHp = (e) => {
    var btn = e.target
    if (btn.id == "cura"){
      setHp(Number(hp) + Number(input))
      setInput(0)
    }
    if (btn.id == "daño"){
      setHp(Number(hp) - Number(input))
      setInput(0)
    }
  }

  return (
    <div className='HitPoints'>
      <div className='input'>
        <button id="cura" onClick={updateHp}>Cura</button>
        <input type="number" min={0} value={input} onChange={handleChange}/>
        <button id="daño" onClick={updateHp}>Daño</button>
      </div>
      <div className='hp'>
        <p>{hp}</p>
      </div>
    </div>
  )
}

export default HitPoints