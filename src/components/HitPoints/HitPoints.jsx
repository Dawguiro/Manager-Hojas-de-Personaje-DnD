import React, { useState } from 'react'
import "./HitPoints.css"

const HitPoints = ({maxHp, setInfo}) => {
  const [input, setInput] = useState(0)
  const [hp, setHp] = useState(maxHp)
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const updateHp = (e) => {
    var btn = e.target
    if (btn.id == "cura"){
      let vidaNueva = Number(hp) + Number(input)
      if (vidaNueva <= maxHp){
        setHp(vidaNueva)
      } else {
        setHp(maxHp)
      }
      setInput(0)
    }
    if (btn.id == "daño"){
      let vidaNueva = Number(hp) - Number(input)
      if (vidaNueva > 0){
        setHp(vidaNueva)
      } else {
        setHp(0)
      }
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
        <p>{hp}/{maxHp}</p>
      </div>
    </div>
  )
}

export default HitPoints