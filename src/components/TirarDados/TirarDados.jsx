import React, { useEffect, useState } from 'react'
import "./TirarDados.css"
import { Toast, ToastContainer } from 'react-bootstrap'

const TirarDados = (props) => {
  const [show, setShow] = useState(false)


  const dado = props.dado != undefined ? Number(props.dado): 20
  const [resultado, setResultado] = useState(0)
  const Tirada = () => {
    setResultado( Math.floor(Math.random() * (dado - 1 + 1) + 1) );
    setShow(true)
    setTimeout(() => setShow(false), 3000)
  }

  return (
    <>
    <span className='roll' onClick={Tirada}>
      {props.children}
    </span>
    <ToastContainer position='bottom-end'>
      <Toast OnClose={() => setShow(false)} show={show}>
        <Toast.Header>
          <strong className="me-auto">{props.nombre}</strong>
        </Toast.Header>
        <Toast.Body>{
        Number(props.modificador) >= 0 
        ? `${resultado} (d${dado}) + ${props.modificador} = ${resultado+props.modificador}`
        : `${resultado} (d${dado}) - ${props.modificador} = ${resultado+props.modificador}`
        }</Toast.Body>
      </Toast>
    </ToastContainer>
    </>
  )
}

export default TirarDados