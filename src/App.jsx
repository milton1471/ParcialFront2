import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/Components/Card'
import Formulario from './assets/Components/Formulario'

function App() {
  const [persona, setPersona] = useState({})
  
  const guardarPersona =(nombre, edad) => {
    setPersona({nombre, edad})
  }
  
  return (
    <>
      <Formulario guardarPersona={guardarPersona} />
      {Object.keys(persona).length === 0 ? undefined :  (
        <Card nombre={persona.nombre} edad= {persona.edad} />
      )}
    </>
  )
}

export default App
