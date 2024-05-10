import React, { useEffect, useState } from 'react'
import "./Atributos.css"
import { FloppyFill, PencilFill, SaveFill } from 'react-bootstrap-icons'
import TirarDados from '../TirarDados/TirarDados'



const Atributos = ({atributos, setPersonaje}) => {
  const [editar, setEditar] = useState(0)
  const ToggleEditar = () => {
    editar == 0 ? setEditar(1): setEditar(0)
  }
  const Guardar = () => {
    setPersonaje( old => (
      {
        ...old,
        atributos: {...stats}
      }
    ))
    ToggleEditar()
  }

  const [stats, setStats] = useState(atributos)
  useEffect(() => {
    setStats(atributos)
  }, [atributos])
  const HandleChange = (e) => {
    const {name, value} = e.target
    console.log(name, value)
    setStats(old => (
      {...old, 
        [name]: {
      ...old[name], 
      valor: value
    }}))
  }

  if (editar == 0){
    return (
      <>
      <div className='Atributos'>
      <PencilFill onClick={ToggleEditar}/>
        {
          Object.keys(stats).map((obj) => {
            return <Stat stat={stats[obj]}/>
          })
        }
      </div>
      </>
    )
  } else {
    return (
      <>
      <div className='Atributos container w-100'>
      <FloppyFill onClick={Guardar}/>
        {
          Object.keys(stats).map((obj) => {
            return <StatEdit stat={stats[obj]} HandleChange={HandleChange}/>
          })
        }
      </div>
      </>
    )
  }
}

const Stat = ({stat}) => {
  const masOMenos = (n) => {return n >= 0 ? `+${n}`:n}
  const modificador = Math.floor((stat.valor - 10) / 2)
  return(
    <TirarDados modificador={modificador} nombre={stat.nombre}>
    <div className='container w-100 bg-inherit text-light p-2 stat'>
      {stat.nombre.slice(0, 3)}
      <div className='valor p-1 text-center'>
        {stat.valor}
        <div className='modificador p-2 text-center'>
          {masOMenos(modificador)}
        </div>
      </div>
    </div>
    </TirarDados>
  )
}

const StatEdit = ({stat, HandleChange}) => {
  const masOMenos = (n) => {return n >= 0 ? `+${n}`:n}
  const modificador = Math.floor((stat.valor - 10) / 2)
  const nombre = stat.nombre.slice(0, 3)
  return(
    <div className='stat'>
      {nombre}
      <div className='valor'>
        <input type="number" min={0} max={20} name={nombre} value={stat.valor} onChange={HandleChange}/>
        <div className='modificador'>
          {masOMenos(modificador)}
        </div>
      </div>
    </div>
  )
}
export default Atributos