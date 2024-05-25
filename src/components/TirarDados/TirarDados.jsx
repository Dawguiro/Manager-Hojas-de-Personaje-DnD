import React, { useEffect, useState } from 'react'
import "./TirarDados.css"
import { toast } from 'react-toastify'

const TirarDados = (props) => {

  const dado = props.dado != undefined ? Number(props.dado): 20
  const [resultado, setResultado] = useState(0)
  const Tirada = () => {
    setResultado( Math.floor(Math.random() * (dado - 1)) + 1 );
    if (resultado == 0 || resultado == 21){
      console.log("nooo por la chucha", resultado)
    }
    toast.info(
        <Toast
          nombre={props.nombre}
          dado={dado}
          resultado={resultado}
          modificador={props.modificador}
        />, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "dark",
        });
     
  }

  return (
    <span className='roll' onClick={Tirada}>
      {props.children}
    </span>
  )
}

const Toast = ({resultado, dado, modificador, nombre}) => {
  var resultadoClase = ''
  if (resultado == 20){
    resultadoClase = 'Crit'
  } else if (resultado == 1){
    resultadoClase = 'CritFail'
  }

  const mensaje = Number(modificador) >= 0 
  ? <p><span className={resultadoClase}>{resultado}</span> (d{dado}) + {modificador} = {resultado+modificador}</p>
  : <p><span className={resultadoClase}>{resultado}</span> (d{dado}) - {modificador*-1} = {resultado+modificador}</p>

  return(
    <div className='popup'>
      <div className='nombre-roll'>
        {nombre}
      </div>
      {mensaje}
    </div>
  )
}

export default TirarDados