import React from 'react'
import "./Atributos.css"

const Atributos = ({atributos}) => {
  return (
    <div className='Atributos'>
      {
        Object.keys(atributos).map((obj) => {
          return <Stat stat={atributos[obj]}/>
        })
      }
    </div>
  )
}

const Stat = ({stat}) => {
  const masOMenos = (n) => {return n >= 0 ? `+${n}`:n}
  return(
    <div className='stat'>
      {stat.nombre.slice(0, 3)}
      <div className='valor'>
        {stat.valor}
        <div className='modificador'>
          {masOMenos(stat.modificador)}
        </div>
      </div>
    </div>
  )
}
export default Atributos