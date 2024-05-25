import React from 'react'
import "./FormEditar.css"
import { Offcanvas } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const FormEditar = ({handleClose, show, infoBase, HandleChange, Guardar}) => {
  return (
    <Offcanvas className="FormEditar" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
      Editar Información
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form className='flex row g-2' onSubmit={Guardar} action='#'>
          <div className="row">
            <Input className={"col"} label="Nombre" input={{name: "nombre", id: "nombre", value: infoBase.nombre, onChange: HandleChange, placeholder: "Ganug Malimar"}}/>
          </div>
          <div className="row">
            <Input className={"col"} label="Linaje" input={{name: "linaje", id: "linaje", value: infoBase.linaje, onChange: HandleChange, placeholder: "Gnomo"}}/>
            <Input className={"col"} label="Clase" input={{name: "clase", id: "clase", value: infoBase.clase, onChange: HandleChange, placeholder: "Bárbaro 1"}}/>
          </div>
          <div className="row">
            <Input className={"col"} label="Vida Máxima" input={{name: "maxHp", id: "maxHp", value: infoBase.maxHp, onChange: HandleChange, type: "number", placeholder: "15"}}/>
          </div>
          <div className="row">
            <Input className={"col"} label="AC" input={{name: "ac", id: "ac", value: infoBase.ac, onChange: HandleChange, type: "number", placeholder: "12"}}/>
            <Input className={"col"} label="Velocidad" input={{name: "velocidad", id: "velocidad", value: infoBase.velocidad, onChange: HandleChange, type: "number", placeholder: "30"}}/>
            <Input className={"col"} label="Iniciativa" input={{name: "iniciativa", id: "iniciativa", value: infoBase.iniciativa, onChange: HandleChange, type: "number", placeholder: "-1"}}/>
          </div>
          <button className='btn btn-dark btn-lg w-100' type='button' onClick={Guardar}>Guardar</button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
    )
}

const Input = (props) => {
  return (
    <div className={props.className}>
      <label className='form-label' htmlFor={props.input.id}>{props.label}</label>
      <input className='form-control'{...props.input}/>
    </div>
  )
}

export default FormEditar