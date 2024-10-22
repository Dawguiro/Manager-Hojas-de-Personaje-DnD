import React from 'react'
import "./Borrar.css"
import { TrashFill } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'
import PersonajeDefault from '../../../personajeDefault'

const Borrar = ({menuState, setPersonaje}) => {
  const Borrar = () => {
    if (menuState == 'disabled'){
      return
    }
    toast.warn(<ToastBorrar setPersonaje={setPersonaje}/>, {autoClose: false, toastId: "confirmarBorrar"})
  }

  return (
    <div key={'Borrar'} onClick={Borrar} className={'Borrar menu-button ' + menuState}>
      <TrashFill/>
    </div>
  )
}

const ToastBorrar = (props) => {
  const Borrar = () => {
    props.setPersonaje(PersonajeDefault)
    localStorage.setItem('personaje', JSON.stringify(PersonajeDefault))
    toast.dismiss("confirmarBorrar")
  }

  return (
    <div className='popup'>
      <p>Tu personaje se borrará<br/>¿Segurx que quieres hacer eso?</p>
      <div className='botones-confirmar'>
        <button className='confirmar' onClick={Borrar}>Si</button>
        <button className='cancelar' onClick={() => toast.dismiss("confirmarBorrar")}>Nop</button>
      </div>
    </div>
  )
}

export default Borrar
