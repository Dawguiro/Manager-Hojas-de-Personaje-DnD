import React, { useState } from 'react'
import "./Habilidades.css"
import Modificador from '../modificador'

const Habilidades = ({personaje}) => {
  const prof = Math.floor(personaje.infoBase.nivel / 4) + 2
  return (
    <div className='Habilidades'>
      <div className='skills-header'>
        Habilidades
        <div>
          Bono de Competencia
          <span>+{prof}</span>
        </div>
      </div>
      <div className="skills-body">
        <Skill prof={prof} habilidad={personaje.habilidades.acrobacias} atributos={personaje.atributos}/>
      </div> 
    </div>
  )
}

const Skill = (props) => {
  const [añadirCompetencia, setCompetencia] = useState(false)
  const ToggleCompetencia = () => {setCompetencia(!añadirCompetencia)}
  const valor = props.atributos[props.habilidad.atributo].valor
  const modificador = new Modificador(valor).calcModificador()
  const mod = () => {
    
  }
  
  return (
    <div>
      <input type="checkbox"/>
      {props.habilidad.nombre}
      <span className='modificador'></span>
    </div>
  )
}

export default Habilidades