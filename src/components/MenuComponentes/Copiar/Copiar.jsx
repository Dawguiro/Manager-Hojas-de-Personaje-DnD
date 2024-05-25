import React from 'react'
import "./Copiar.css"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Copy } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const Copiar = (props) => {
  const personaje = localStorage.getItem('personaje')
  console.log(personaje)
  return (
    <CopyToClipboard text={personaje} onCopy={() => {toast.info('Personaje copiado al portapapeles')}}>
      <div key={'Copiar'} className={'menu-button Copiar ' + props.menuState} >
        <Copy/>
      </div>
    </CopyToClipboard>
  )
}

export default Copiar

