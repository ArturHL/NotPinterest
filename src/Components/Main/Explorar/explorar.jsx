import React from 'react'
import './explorar.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Explorar() {
  return (
    <div className='principalContainer-Explorar'>
        <div className='header'>
            <div className='header-date'>
                31 de agosto de 2023
            </div>
            <h2 className='header-title'>
                Sigue Inspirándote
            </h2>
        </div>
        <div className='categoryContainer'>
            <div>categorys</div>
        </div>
        <footer className='footer'>
            <BsFillCheckCircleFill />
            <p>Es todo por hoy!</p>
            <p>Vuelve mañana para encontrar más inspiración</p>
            <button>Ir al feed de inicio</button>
        </footer>
    </div>
  )
}

export default Explorar