import React, { useState } from 'react'
import "./Importar.css"
import { Download } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const Importar = (props) => {
  const [archivo, setArchivo] = useState('')

  const ClickHandler = () => {
    if (props.menuState == 'disabled'){
      return
    } else if (props.menuState == 'active'){
      toast(<FileInputToast archivo={archivo} setArchivo={setArchivo} setPersonaje={props.setPersonaje}/>, {autoClose: false, toastId: 'ImportarToast', closeOnClick: false})
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
  const HandleChange = (e) => {
    const btnSubir = document.getElementById('boton-subir')
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (e) => {
        
        console.log(JSON.parse(reader.result))
        props.setArchivo(JSON.parse(reader.result))
        btnSubir.disabled = false
        btnSubir.addEventListener('click', Subir)
      }
    }
  }

  const Subir = () => {
    console.log(props.archivo)
    props.setPersonaje(props.archivo)
    toast.dismiss('ImportarToast')
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
        <div className="col-8">
          <p id='descripcion-importar' className='form-text text-light'>Ingrese personaje en formato JSON</p>
        </div>
        <div className="col-4">
          <button id="boton-subir" className='btn btn-dark mt-2' onClick={Subir} disabled>Subir</button>
        </div>
      </div>    
    </div>
  )
}

export default Importar