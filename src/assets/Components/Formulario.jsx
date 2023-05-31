import React, { useState } from 'react'

const Formulario = (props) => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [error, setError] = useState('')

    const onChangeNombre= (e) => {
        setNombre(e.target.value)
    }
    const onChangeEdad = (e) => {
        setEdad(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (!/^\S/.test(nombre)) {
            setError ("El nombre no puede tener espacio en blanco al principio")    
        }
        else if (nombre.length < 2){
            setError("el nombre no puede tener menos de 3 caracteres")
        }else if (edad <18){
            setError("la persona tiene que ser mayor de edad")
        } else {
            setError('Correcto')
        }
    }
  return (
    <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="nombre">Nombre</label>
        <input 
        type="text" 
        id="nombre" 
        value={nombre} 
        placeholder='Ingrese su Nombre'
        onChange={onChangeNombre} 
        
        />

        <label htmlFor="edad">edad</label>
        <input 
        type='number'
        id="edad" 
        value={edad} 
        placeholder='Ingrese su edad'
        onChange={onChangeEdad}
        />
        <button>Enviar</button>
        {error && <p className='error'>{error}</p>}
        
    </form>
  )
}

export default Formulario