import React from 'react'
import { BsPinterest } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { BsBellFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import './index.css'

function NavBar({Home, Explorar, page}) {

  return (
    <nav>
        <BsPinterest fill='red'/> 
        <div onClick={Home} className={page === 'Homepage'? 'currentPage':''}>
            Inicio
        </div>
        <div onClick={Explorar} className={page === 'Explorar'? 'currentPage':''}>
            Explorar
        </div>
        <div className='create-container'>
            <p>Crear</p>
            <BsChevronDown className='arrowDown'/>
        </div>
        <div className='search-container'>
            <FaSearch className='search-icon' fill='gray'/>
            <input type="text" placeholder='         Buscar'/>
        </div>
        <BsBellFill className='icons'/>
        <AiFillMessage className='icons'/>
        <RxAvatar className='icons'/>
        <BsChevronDown className='arrowDown'/>
    </nav>
  )
}

export default NavBar