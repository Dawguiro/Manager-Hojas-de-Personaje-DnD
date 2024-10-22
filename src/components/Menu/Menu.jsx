import React, { useState } from 'react'
import "./Menu.css"
import PersonajeDefault from '../../personajeDefault'
import { Borrar, Main, Copiar, Importar } from '../MenuComponentes'

const Menu = (props) => {
  const [menuState, setMenuState] = useState('disabled')
  return (
    <div className='Menu'>
      <Main 
      menuState={menuState} 
      setMenuState={setMenuState}
      />
      <Importar 
      menuState={menuState} 
      setPersonaje={props.setPersonaje}
      />
      <Copiar menuState={menuState}/>
      <Borrar 
      menuState={menuState} 
      setPersonaje={props.setPersonaje}/>
    </div>
  )
}

export default Menu