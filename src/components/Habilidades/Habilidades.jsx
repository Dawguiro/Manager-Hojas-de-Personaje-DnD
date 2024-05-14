import React, { useEffect, useState } from 'react'
import "./Habilidades.css"
import Modificador from '../modificador'
import Inspo from '../Inspo/Inspo'
import TirarDados from '../TirarDados/TirarDados'

const Habilidades = ({personaje, setPersonaje}) => {
  const prof = Math.floor(personaje.infoBase.nivel / 4) + 2
  const [habilidades, setHabilidades] = useState(personaje.habilidades)
  
  const HandleChange = (e) => {
    const {name, value} = e.target
    setHabilidades(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        modificador: value
      }
    }))
  }

  const Guardar = () => {
    setPersonaje(prev => ({
      ...prev,
      habilidades: habilidades
    }))
  }

  return (
    <div className='Habilidades'>
      <div className='skills-header'>
        <h2>Habilidades</h2>
        <div>
          <p>
            Bono de Competencia 
            <span> +{prof}</span>
          </p>
        </div>
      </div>
      <div className="skills-body">
        {
          Object.keys(habilidades).map((key) => (
          <TirarDados nombre={habilidades[key].nombre} modificador={habilidades[key].modificador}>
            <Skill 
              key={key}
              clave={key}
              prof={prof}
              habilidad={habilidades[key]}
              atributos={personaje.atributos}
              setHabilidades={setHabilidades} 
            />
          </TirarDados>
          ))
        }
      </div> 
    </div>
  )
}

const Skill = ({clave, prof, habilidad, atributos, setHabilidades}) => {
  const valor = atributos[habilidad.atributo].valor
  const [mod, setMod] = useState(new Modificador(valor).calcModificador())
  const [comp, setComp] = useState(habilidad.competencia)

  const ToggleProf = () => {
    habilidad.competencia == 0 ? 
    habilidad.competencia = 1 :
    habilidad.competencia = 0
    setComp(habilidad.competencia)
    setHabilidades(prev => ({...prev, [clave]: habilidad}))
  }
  useEffect(() => {
    const checkbox = document.getElementById(habilidad.nombre)
    if (habilidad.competencia == 0){
      checkbox.checked = false
      habilidad.modificador = new Modificador(valor).calcModificador()
    } else if (habilidad.competencia == 1){
      checkbox.checked = true
      habilidad.modificador = new Modificador(valor).calcModificador() + prof
    }
    setHabilidades(prev => ({...prev, [clave]: habilidad}))
    setMod(habilidad.modificador)
  }, [comp, atributos])
  return (
    <div key={clave}>
      <input type="checkbox" onClick={ToggleProf} id={habilidad.nombre} />
      <p>
        {habilidad.nombre}
      </p>
        <span className='modificador'> {Modificador.masOMenos(mod)}</span>
    </div>
  )
}

export default Habilidades