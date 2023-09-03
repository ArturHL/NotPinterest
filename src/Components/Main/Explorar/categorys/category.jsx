import React from 'react'
import './category.css'

function Category({img, title, description, categoryID}) {
  return (
    <div className='category'>
        <img src={img} alt="" className='categoryImg'/>
        <p className='categoryTitle'>{title}</p>
        <p className='categoryDesc'>{description}</p>
    </div>
  )
}

export default Category