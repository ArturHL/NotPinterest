import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi';
import { TbEdit } from 'react-icons/tb';
import { HiUserAdd } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { RiShareBoxFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import './index.css'

function DDmenu({type, active, closeSearchMenu}) {
    if(type==='create'){
        return (
            <div className={`ddMenu ${active==='create'?'':'inactive'} ${'menuCreate'}`}>
                <p>Crear un Idea Pin</p>
                <p>Crear Pin</p>
            </div>
        )  
    }
    if(type==='notification'){
        return (
            <div className={`ddMenu ${active==='notification'?'':'inactive'} ${'menuNotification'}`}>
                <h4>Actualizaciones</h4>
                <p>En este menu se muestran las actualizaciones a creemos te gustaran. Inicia sesion para comenzar</p>
            </div>
        )  
    }
    if(type==='message'){
        return (
            <div className={`ddMenu ${active==='message'?'':'inactive'} ${'menuMessage'}`}>
                <div>
                    <h4>Bandeja de entrada</h4>
                    <FiMoreHorizontal />
                </div>
                <input className='search' type="text" placeholder='Buscar por nombre o correo'/>
                <div className='optionContainer'>
                    <TbEdit className='newMessage'/>
                    <p>Mensaje nuevo</p>
                </div>
                <div className='optionContainer'>
                    <HiUserAdd className='addFriend'/>
                    <div>
                        <p>Invita a tus amigos</p>
                        Conectense para comensar a chatear
                    </div>
                </div>
            </div>
        )  
    }
    if(type==='account'){
        return (
            <div className={`ddMenu ${active==='account'?'':'inactive'} ${'menuAccount'}`}>
                <p className='sectionTitle'>Actualmente en</p>
                <section className='principalSection'>
                    <BiUserCircle />
                    <div>
                        <p className='firstOption'>UserName</p>
                        <p className='secondOption'>Personal</p>
                        <p className='secondOption'>email@example.com</p>
                    </div>
                    <AiOutlineCheck className='iconsMenu'/>
                </section>
                <p className='sectionTitle'>Tus Cuentas</p>
                <section>
                    <p className='firstOption'>Agregar Cuenta</p>
                    <p className='firstOption'>Convertir en cuenta para empresa</p>
                </section>
                <p className='sectionTitle'>Mas opciones</p>
                <section>
                    <p className='firstOption'>Configuracion</p>
                    <p className='firstOption'>Mejora tu feed de inicio</p>
                    <p className='firstOption'>Instalar la aplicacion de Windows</p>
                    <p className='firstOption'>Tus derechos de privacidad</p>
                    <div className='redireccionContainer'>
                        <p>Obtener ayuda</p>
                        <RiShareBoxFill className='iconsMenu'/>
                    </div>
                    <div className='redireccionContainer'>
                        <p>Ver condiciones de servicio</p>
                        <RiShareBoxFill className='iconsMenu'/>
                    </div>
                    <div className='redireccionContainer'>
                        <p>Ver politica de privacidad</p>
                        <RiShareBoxFill className='iconsMenu'/>
                    </div>
                    <div className='redireccionContainer'>
                        <p>Se un evaluador beta</p>
                        <RiShareBoxFill className='iconsMenu'/>
                    </div>
                    <p className='firstOption'>Salir</p>
                </section>
            </div>
        )  
    }
    if(type==='more'){
        return (
            <div className={`ddMenu ${active==='more'?'':'inactive'} ${'menuMore'}`}>
                <section>
                    <div className='redireccionContainer'>
                        <p>Visita el Centro de Asistencia</p>
                        <RiShareBoxFill className='iconsMenu'/>
                    </div>
                    <div className='redireccionContainer'>
                        <p>Crear Widget</p>
                        <RiShareBoxFill className='iconsMenu'/>
                    </div>
                </section>
                <div className='generalOptions'>
                    <p>Info</p>
                    <p>Blog</p>
                    <p>Empresas</p>
                    <p>Empleos</p>
                    <p>Desarrolladores</p>
                    <p>Eliminaciones</p>
                    <p>Politica de privacidad</p>
                    <p>Anuncios personalizados</p>
                    <p>Tus derechos de privacidad</p>
                    <p>Condiciones</p>
                </div>
            </div>
        )  
    }
    if(type==='search'){
        return(
            <>
                <div className={`searchMenu-background ${active==='search'?'':'inactive'}`} onClick={closeSearchMenu}>

                </div>
                <div className={`ddMenu ${active==='search'?'':'inactive'} ${'menuSearch'}`}>
                    <div>
                       <input type="text" placeholder='Buscar'/> 
                       <AiFillCloseCircle onClick={closeSearchMenu}/>
                    </div>
                    <section>
                        <h4>
                            Busquedas Recientes
                        </h4>
                        <div>
                            Busquedas jaja
                        </div>
                    </section>
                    <section>
                        <h4>
                            Ideas para ti
                        </h4>
                        <div>
                            ideas jaja
                        </div>
                    </section>
                    <section>
                        <h4>
                            Populares en Pinterest
                        </h4>
                        <div>
                            populares jaja
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default DDmenu