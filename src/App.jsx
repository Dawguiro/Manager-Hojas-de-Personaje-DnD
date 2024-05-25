import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonajeDefault from './personajeDefault'
import { Atributos, BaseInfo, Habilidades, Menu } from './components/index'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'

function App() {

  const [personaje, setPersonaje] = useState(PersonajeDefault)
  useEffect(() => {
    if (localStorage.getItem('personaje') != undefined) {
      setPersonaje(JSON.parse(localStorage.getItem("personaje")))
    }
    }, []);

  // LocalStorage
  useEffect(() => {
    if (personaje != PersonajeDefault){
      localStorage.setItem("personaje", JSON.stringify(personaje))
    }
  }, [personaje]);

  return (
    <>
    <header>
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
      <BaseInfo personaje={personaje.infoBase} setPersonaje={setPersonaje}/>
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
