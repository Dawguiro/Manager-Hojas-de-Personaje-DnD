import React from 'react'
import "./Main.css"
import { Grid3x3GapFill } from 'react-bootstrap-icons'

const Main = (props) => {
  const ToggleMenu = () => {
    if (props.menuState == 'disabled'){
      props.setMenuState('active')    
    } else {
      props.setMenuState('disabled') 
    }
  }
  return (
    <div key={'Main'} onClick={ToggleMenu} className={'menu-button Main'} >
      <Grid3x3GapFill/>
    </div>
  )
}

export default Main