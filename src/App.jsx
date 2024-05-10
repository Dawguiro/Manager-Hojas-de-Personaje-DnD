import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Atributos, BaseInfo } from './components/index'


function App() {

  const personajeDefault = {
    infoBase: {
      nombre: "Ganug Malimar",
      linaje: "Gnomo",
      clase: "Barbaro 1",
      nivel: "1",
      maxHp: 15,
      ac: 13,
      velocidad: 30,
      iniciativa: 3,
    },
    atributos: {
      Fue: {
        nombre: "Fuerza",
        valor: 10,
      },
      Des: {
        nombre: "Destreza",
        valor: 10,
      },
      Con: {
        nombre: "Constitución",
        valor: 10,
      },
      Int: {
        nombre: "Inteligencia",
        valor: 10,
      },
      Sab: {
        nombre: "Sabiduría",
        valor: 10,
      },
      Car: {
        nombre: "Carisma",
        valor: 10,
      },
    },
    habilidades: {
      acrobacias: {
        atributo: "Destreza",
        modificador: 0,
        competencia: 0,
      },
      arcana: {
        atributo: "Inteligencia",
        modificador: 0,
        competencia: 0,
      },
      atlemismo: {
        atributo: "Fuerza",
        modificador: 0,
        competencia: 0,
      },
    }
  }
  // personaje JSON
  
  const [personaje, setPersonaje] = useState(personajeDefault)
  useEffect(() => {
    if (localStorage.getItem('personaje') != undefined) {
      setPersonaje(JSON.parse(localStorage.getItem("personaje")))
      console.log("yes")
    }
    }, []);

  // LocalStorage
  useEffect(() => {
    if (personaje != personajeDefault){
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
    </>
  )
}

export default App
