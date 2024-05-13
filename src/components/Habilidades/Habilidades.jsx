import React, { useEffect, useState } from 'react'
import "./Habilidades.css"
import Modificador from '../modificador'
import Inspo from '../Inspo/Inspo'

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
        Habilidades
        <div>
          Bono de Competencia
          <span>+{prof}</span>
        </div>
      </div>
      <div className="skills-body">
        {
          Object.keys(habilidades).map((key) => (
          <Skill 
            key={key}
            prof={prof}
            habilidad={habilidades[key]}
            atributos={personaje.atributos}
            setHabilidades={setHabilidades} 
           />
          ))
        }
        <Skill 
        key={"acrobacias"}
        prof={prof}
        habilidad={habilidades.acrobacias}
        atributos={personaje.atributos}
        setHabilidades={setHabilidades} 
        />
      </div> 
    </div>
  )
}

const Skill = ({key, prof, habilidad, atributos, setHabilidades}) => {
  console.log(habilidad)
  const valor = atributos[habilidad.atributo].valor
  const [mod, setMod] = useState(new Modificador(valor).calcModificador())
  const [comp, setComp] = useState(habilidad.competencia)

  const ToggleProf = () => {
    habilidad.competencia == 0 ? 
    habilidad.competencia = 1 :
    habilidad.competencia = 0
    setComp(habilidad.competencia)
    setHabilidades(prev => ({...prev, [key]: habilidad}))
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
    setHabilidades(prev => ({...prev, [key]: habilidad}))
    setMod(habilidad.modificador)
  }, [comp, atributos])
  return (
    <div>
      <input type="checkbox" onClick={ToggleProf} id={habilidad.nombre} />
      {habilidad.nombre}
      <span className='modificador'> {Modificador.masOMenos(mod)}</span>
    </div>
  )
}

export default Habilidades