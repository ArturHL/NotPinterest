import React from 'react'
import { useState } from 'react';
import './post.css'
import { BsChevronDown } from 'react-icons/bs';
import { TbShare2 } from 'react-icons/tb';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FiArrowUpRight } from 'react-icons/fi';

function Post({image, date, userOwner, comments, likes, title, category, description, size}) {
  const [postMenu, setPostMenu] = useState(false)
  function showMenu(){
    setPostMenu(true)
  }
  function hiddenMenu(){
    setTimeout(() => {
      setPostMenu(false)
    }, 100);
  }

  return (
    <div className={size} onMouseOver={showMenu} >
        <img src={image} alt={description} />
        <div className={`postMenu ${postMenu ? '' : 'inactive'}`} >
          <section>
            <p>Diseño de...</p>
            <BsChevronDown/>
            <button>Guardar</button>
          </section>
          <section>
            <div className='section-link'>
              <FiArrowUpRight />
              <a href="#">pinterest.com</a>
            </div>
            <div className='section-more'>
              <TbShare2 />
              <FiMoreHorizontal />
            </div>
          </section>
          <div className='hitbox-out' onMouseOut={hiddenMenu}>
          </div>
        </div>
    </div>
  )
}

export default Post