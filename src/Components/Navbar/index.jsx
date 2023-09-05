import React, { useState } from 'react'
import { BsPinterest } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { BsBellFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import './index.css'
import DDmenu from '../ddMenu';
import More from './More';

function NavBar({Home, Explorar, page}) {
    const [typeMenuActive, setTypeMenuActive] = useState('')
      function createMenu(){
          if(typeMenuActive===''){
            setTypeMenuActive('create')
          }else{
            setTypeMenuActive('')
          }
        }
      function notiMenu(){
        if(typeMenuActive===''){
          setTypeMenuActive('notification')
        }else{
          setTypeMenuActive('')
        }
      }
      function msgMenu(){
        if(typeMenuActive===''){
          setTypeMenuActive('message')
        }else{
          setTypeMenuActive('')
        }
      }
      function accountMenu(){
        if(typeMenuActive===''){
          setTypeMenuActive('account')
        }else{
          setTypeMenuActive('')
        }
      }
      function moreMenu(){
        if(typeMenuActive===''){
          setTypeMenuActive('more')
        }else{
          setTypeMenuActive('')
        }
      }
      function searchMenu(){
        if(typeMenuActive===''){
          setTypeMenuActive('search')
        }else{
          setTypeMenuActive('')
        }
      }
  return (
    <>
    <nav>
        <BsPinterest fill='red'/> 
        <div onClick={Home} className={page === 'Homepage'? 'currentPage':''}>
            Inicio
        </div>
        <div onClick={Explorar} className={page === 'Explorar'? 'currentPage':''}>
            Explorar
        </div>
        <div onClick={createMenu} className='create-container'>
            <p>Crear</p>
            <BsChevronDown className='arrowDown'/>
            <DDmenu type={'create'} active={typeMenuActive}/>
        </div>
        <div className='search-container' >
            <FaSearch className='search-icon' fill='gray'/>
            <input type="text" placeholder='         Buscar' onClick={searchMenu}/>
            <DDmenu type={'search'} active={typeMenuActive} closeSearchMenu={searchMenu}/>
        </div>
        <div className='principalMenuContainer'>
            <BsBellFill className='icons'onClick={notiMenu}/>
            <DDmenu type={'notification'} active={typeMenuActive}/>
        </div>
        <div className='principalMenuContainer'>
            <AiFillMessage className='icons' onClick={msgMenu}/>
            <DDmenu type={'message'} active={typeMenuActive}/>
        </div>
        <RxAvatar className='icons' />
        <div className='principalMenuContainer'>
          <BsChevronDown className='arrowDown' onClick={accountMenu}/>
          <DDmenu type={'account'} active={typeMenuActive}/>
        </div>
    </nav>
    <More active={typeMenuActive} showmenu={moreMenu}/>
    </>
  )
}

export default NavBar