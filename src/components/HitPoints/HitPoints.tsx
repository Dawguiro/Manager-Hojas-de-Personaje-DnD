import React, { MouseEvent, MouseEventHandler, useState } from 'react'
import "./HitPoints.css"

type Props = {
  maxHp: number,
  minHp: 0
}

const HitPoints = ({maxHp, minHp = 0}: Props) => {

  const [input, setInput] = useState(0 as number)
  const [hp, setHp] = useState(maxHp as number)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(e.target.value))
    }

  const setVidaNueva = (maxHp: number, minHp: number, vidaNueva: number, setHp: Function) => {
    if (vidaNueva <= minHp){
      setHp(minHp)
    } else if (vidaNueva >= maxHp){
      setHp(maxHp)
    } else {
      setHp(vidaNueva)
    }
  }

  const updateHp = (e: MouseEvent<HTMLButtonElement>) => {
    var btn = e.target as HTMLButtonElement

    if (btn.id == "cura"){
      let vidaNueva = hp + input
      setVidaNueva(maxHp, minHp, vidaNueva, setHp)
      setInput(0)
    }

    if (btn.id == "daño"){
      let vidaNueva = hp + input
      setVidaNueva(maxHp, minHp, vidaNueva, setHp)
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