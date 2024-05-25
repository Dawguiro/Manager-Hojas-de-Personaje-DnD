import React from 'react'
import "./Importar.css"
import { Download } from 'react-bootstrap-icons'

const Importar = (props) => {
  return (
    <div key={'Importar'} className={'menu-button Importar ' + props.menuState} >
      <Download/>
    </div>
  )
}

export default Importar