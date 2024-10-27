import React, { useEffect, useState } from 'react'
import "./BaseInfo.css"
import { HitPoints, FormEditar, Inspo, TirarDados } from '../barrel'
import 'bootstrap/dist/css/bootstrap.css'; 
import Offcanvas from 'react-bootstrap/Offcanvas'
import { PencilFill } from 'react-bootstrap-icons'
import { Form, FormGroup } from 'react-bootstrap';
import {masOMenos} from '../modificador.ts';



const BaseInfo = ({personaje, setPersonaje}) => {
  const [infoBase, setInfo] = useState(personaje)
  useEffect(() => {
    setInfo(personaje)
  }, [personaje])

  const HandleChange = (e) => {
    const {name, value} = e.target
    setInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const Guardar = () => {
    setPersonaje((prev) => ({
      ...prev,
      infoBase: infoBase
    }))
    setShow(false)
  }

  // Offcanvas state
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false), Guardar()};
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='BaseInfo'>
      <div>
        
      </div>
      <span onClick={handleShow}>
        <PencilFill/>
      </span>
      <div className="info-wrap">

        <div className="datos d-flex">
          <div className="col">
            <h1 className='nombre'>{infoBase.nombre}</h1>
          </div>
          <div className="col">
            <p>{infoBase.linaje} {infoBase.clase}</p>
            <strong>Nivel {infoBase.nivel}</strong>
          </div>
        </div>

        <div className="basic-combat">
          <div className='container'>
            <div className='valor'>
              {infoBase.ac}
            </div>
            AC
          </div>
          <div className='container'>
            <div className='valor'>
              {infoBase.velocidad} ft.
            </div>
            Velocidad
          </div>
          <TirarDados modificador={Number(infoBase.iniciativa)} nombre={'Iniciativa'}>
          <div className='container'>
            <div className='valor'>
              {masOMenos(infoBase.iniciativa)}
            </div>
            Iniciativa
          </div>
          </TirarDados>
        </div>
      </div>
      <div className='hp-inspo'>
        <Inspo texto={'Inspiración'}/>
        <HitPoints maxHp={infoBase.maxHp} setInfo={setInfo}/>
      </div>
    </div>
    <FormEditar
      handleClose={handleClose} 
      show={show}
      infoBase={infoBase}
      HandleChange={HandleChange}
      Guardar={Guardar}
    />
    </>
  )
}

const EditarForm = ({handleClose, show, infoBase, HandleChange, Guardar}) => {
  return (
  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
    Editar Información
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Form className='flex container col-10' onSubmit={Guardar} action='#'>
        {
          Object.keys(infoBase).map((key) => (
          <FormGroup>
            <label className='form-label' htmlFor={key}>{key}:</label>
            <input className='form-control' type="text" id={key} name={key} value={infoBase[key]} onChange={HandleChange}/>
          </FormGroup>
          ))
        }
        <button className='btn btn-dark btn-lg w-100' type='button' onClick={Guardar}>Guardar</button>
      </Form>
    </Offcanvas.Body>
  </Offcanvas>
  )
}
export default BaseInfo