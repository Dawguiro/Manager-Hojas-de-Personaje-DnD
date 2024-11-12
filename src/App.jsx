import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import PersonajeDefault from './personajeDefault'
import { Atributos, BaseInfo, Habilidades, Inventario, Menu, SelectPersonaje } from './components/barrel.js'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'

function App() {
  const LISTA_DEFAULT = [PersonajeDefault, PersonajeDefault, PersonajeDefault]

  const didMount = useRef(false);
  const [personaje, setPersonaje] = useState(PersonajeDefault)
  const [pjIndex, setIndex] = useState(0)

  const debug = () => {
    console.log("Indice Personaje: ", pjIndex)
    console.log("Personaje: ", personaje.infoBase.nombre)
  }
  useEffect(debug, [pjIndex])
  
  // LocalStorage
  useEffect(() => {
    if (localStorage.getItem('personajes') != undefined && localStorage.getItem('personajes') != "") {
      let lista = JSON.parse(localStorage.getItem("personajes"))
      setPersonaje(lista[pjIndex])
    }
    }, [pjIndex]);

  useEffect(() => {
    if (didMount.current){
      if (personaje[pjIndex] != PersonajeDefault){
        if (JSON.parse(localStorage.getItem("personajes"))) {
          let lista = JSON.parse(localStorage.getItem("personajes"))
          lista[pjIndex] = personaje
          localStorage.setItem("personajes", JSON.stringify(lista))
        }
        else {
          localStorage.setItem("personajes", JSON.stringify(LISTA_DEFAULT))
        }
      }
    } else {
      didMount.current = "true"
    }
  }, [personaje]);

  

  return (
    <>
    <header style={{position: 'sticky', top: '0px', zIndex: 99}}>
    <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <BaseInfo personaje={personaje.infoBase} setPersonaje={setPersonaje} pjIndex={pjIndex} setIndex={setIndex}/>
    </header>
    <section className='principal'>
      <Atributos atributos={personaje.atributos} setPersonaje={setPersonaje}/>
      <Habilidades personaje={personaje} setPersonaje={setPersonaje}/>
    </section>
    <Menu setPersonaje={setPersonaje}/>
    </>
  )
}

export default App
