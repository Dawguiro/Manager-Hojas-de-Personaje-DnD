import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonajeDefault from './personajeDefault'
import { Atributos, BaseInfo, Habilidades } from './components/index'


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
      <BaseInfo personaje={personaje.infoBase} setPersonaje={setPersonaje}/>
    </header>
    <section>
      <Atributos atributos={personaje.atributos} setPersonaje={setPersonaje}/>
    </section>
    <section>
      <Habilidades personaje={personaje} setPersonaje={setPersonaje}/>
    </section>
    </>
  )
}

export default App
