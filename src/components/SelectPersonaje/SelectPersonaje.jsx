import React, { useEffect, useState } from 'react'
import "./SelectPersonaje.css"
import PersonajeDefault from '../../personajeDefault'

const SelectPersonaje = ({personaje, pjIndex, setIndex}) => {
  if (JSON.parse(localStorage.getItem("personajes"))){
    var nombres = JSON.parse(localStorage.getItem("personajes")).map(v => v.infoBase.nombre)
    nombres[pjIndex] = personaje
  } else {
    var nombres = [PersonajeDefault.infoBase.nombre, PersonajeDefault.infoBase.nombre, PersonajeDefault.infoBase.nombre] 
  }


  return (
    <div className='SelectPersonaje'>
      <select>
        <option onClick={() => setIndex(0)}>{nombres[0]}</option>
        <option onClick={() => setIndex(1)}>{nombres[1]}</option>
        <option onClick={() => setIndex(2)}>{nombres[2]}</option>
      </select>
    </div>
  )
}

export default SelectPersonaje