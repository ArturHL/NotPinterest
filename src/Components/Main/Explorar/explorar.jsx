import React from 'react'
import './explorar.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Category from './categorys/category';
import categories from './categoryData';

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
            <>
            <div className='displayCategories'>
                {categories.map((category)=>{
                    return(
                        <Category 
                            key={category.categoryID}
                            img={category.img}
                            title={category.title}
                            description={category.description}
                            categoryID={category.categoryID}
                        />
                    )
                })}
            </div>
            <div className='subtitle'>Compras destacadas</div>
            <div className='displayCategories'>
                {categories.map((category)=>{
                    return(
                        <Category 
                            key={category.categoryID}
                            img={category.img}
                            title={category.title}
                            description={category.description}
                            categoryID={category.categoryID}
                        />
                    )
                })}
            </div>
            </>
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