import React, { useEffect, useState } from 'react'
import "./SelectPersonaje.css"
import PersonajeDefault from '../../personajeDefault'
import 'bootstrap/dist/css/bootstrap.css'; 
import Offcanvas from 'react-bootstrap/Offcanvas'
import { List } from 'react-bootstrap-icons';


const SelectPersonaje = ({personaje, pjIndex, setIndex}) => {
  if (JSON.parse(localStorage.getItem("personajes"))){
    var nombres = JSON.parse(localStorage.getItem("personajes")).map(v => v.infoBase.nombre)
    nombres[pjIndex] = personaje
  } else {
    var nombres = [PersonajeDefault.infoBase.nombre, PersonajeDefault.infoBase.nombre, PersonajeDefault.infoBase.nombre] 
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
    <div className='SelectPersonaje'>
      <button onClick={handleShow}><List/></button>
    </div>
    
    <DisplayPersonajes 
    nombres={nombres} 
    setIndex={setIndex} 
    show={show}
    handleClose={handleClose}
    pjIndex={pjIndex}
    />
    </>
  )
}

const DisplayPersonajes = ({nombres, setIndex, pjIndex, show, handleClose}) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <span className="display-5">Biblioteca de Personajes</span>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          {
            nombres.map((v, i) => {
            if (i === pjIndex) {
              return  <li key={i} onClick={() => setIndex(i)} className='selected'>{v}</li>
            }
            return  (
              <li key={i} onClick={() => setIndex(i)}>{v}</li>
            )
          })
          }
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SelectPersonaje