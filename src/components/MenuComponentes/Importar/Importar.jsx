import React, { useState } from 'react'
import "./Importar.css"
import { Download } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const Importar = (props) => {
  const ClickHandler = () => {
    if (props.menuState == 'disabled'){
      return
    } else if (props.menuState == 'active'){
      toast(<FileInputToast setPersonaje={props.setPersonaje}/>, {autoClose: false, toastId: 'ImportarToast', closeOnClick: false})
    }
  }

  return (
    <div 
      key={'Importar'} 
      onClick={ClickHandler} 
      className={'menu-button Importar ' + props.menuState} >
      <Download/>
    </div>
  )
}

const FileInputToast = (props) => {
  const [archivo, setArchivo] = useState("")

  const HandleChange = (e) => {
    const btnSubir = document.getElementById('boton-subir')
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (e) => {
        setArchivo(JSON.parse(reader.result));
      }
    }
  }

  const Subir = () => {
    if (archivo == undefined || archivo == "") {
      console.log('nop')
      console.log(archivo)
    } else {
      console.log(archivo)
      props.setPersonaje(archivo)
      toast.dismiss('ImportarToast')
    }
  }

  const ConditionalRender = () => {
    if (archivo == "" || archivo == undefined) {
      return (
        <div className="row">
          <p id='descripcion-importar' className='form-text text-light'>Ingrese personaje en formato JSON</p>
        </div>
        )
    } else {
      return (
        <div className="row text-center mx-auto my-1">
          <button id="boton-subir" className='btn btn-dark mt-2' onClick={Subir}>Subir</button>
        </div>
        )
    }
  }

  return (
    <div className='toast-importar container-fluid'>
      <div className="row">
        <label className='form-label' htmlFor="inputFile">Importar Personaje</label>
        <input
        onChange={HandleChange}
        aria-label='Importar Personaje'
        aria-describedby='descripcion-importar'
        className='form-control dark'
        type="file" id="inputFile"
        name="inFile"
        accept=".json"
        />
      </div>
      <div className="row">
        {ConditionalRender()}
      </div>    
    </div>
  )
}

export default Importar