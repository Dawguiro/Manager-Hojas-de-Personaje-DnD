import React from 'react'
import "./BaseInfo.css"
import { HitPoints, ImagenOpcional } from '../index'

const BaseInfo = ({personaje}) => {
  const InspoToggle = (e) => {
    var className = e.target.className
    className = className == "inspo" ? "inspo active" : "inspo"
  }

  const masOMenos = (n) => {
    return n >= 0 ? `+${n}`:n
  }

  return (
    <div className='BaseInfo'>
      <div className="info">
        <ImagenOpcional className={"retrato"} src={personaje.retratoSrc}/>
        <div className='datos'>
          <h1 className='nombre'>{personaje.nombre}</h1>
          <p>{personaje.linaje} {personaje.clase}</p>
          <strong>Nivel {personaje.nivel}</strong>
        </div>
      </div>
      <div className="basic-combat">
        <div>
          <div className='valor'>
            {personaje.ac}
          </div>
          AC
        </div>
        <div>
          <div className='valor'>
            {personaje.velocidad} ft.
          </div>
          Velocidad
        </div>
        <div>
          <div className='valor'>
            {masOMenos(personaje.iniciativa)}
          </div>
          Iniciativa
        </div>

      </div>
      <div className='hp-inspo'>
        <button className='inspo' onClick={InspoToggle}>
          Inspiración
        </button>
        <HitPoints hp={personaje.maxHp}/>
      </div>
    </div>
  )
}

export default BaseInfo