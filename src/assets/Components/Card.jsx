import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <h1>Nombre : {props.nombre}</h1>
      <h2>Edad: {props.edad}</h2>
    </div>
  )
}

export default Card

