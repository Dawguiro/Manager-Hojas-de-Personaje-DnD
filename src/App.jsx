import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Atributos, BaseInfo } from './components/index'

function App() {
  const [personaje, setPersonaje] = useState(
    {
      infoBase: {
        nombre: "Ganug Malimar",
        linaje: "Gnomo",
        clase: "Barbaro 1",
        nivel: "1",
        retratoSrc: "#",
        maxHp: 15,
        ac: 13,
        velocidad: 30,
        iniciativa: 3,
      },
      atributos: {
        STR: {
          nombre: "Fuerza",
          valor: 10,
          modificador: 0
        },
        DEX: {
          nombre: "Destreza",
          valor: 10,
          modificador: 0
        },
        CON: {
          nombre: "Constitución",
          valor: 10,
          modificador: 0
        },
        INT: {
          nombre: "Inteligencia",
          valor: 10,
          modificador: 0
        },
        WIS: {
          nombre: "Sabiduría",
          valor: 10,
          modificador: 0
        },
        CHA: {
          nombre: "Carisma",
          valor: 10,
          modificador: 0
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
        acrobacias: {
          atributo: "Destreza",
          modificador: 0,
          competencia: 0,
        },
      }
    }
  )

  return (
    <>
    <header>
      <BaseInfo personaje={personaje.infoBase}/>
    </header>
    <section>
      <Atributos atributos={personaje.atributos}/>
    </section>
    </>
  )
}

export default App
