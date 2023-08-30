import React from 'react'
import './post.css'

function Post({image, date, userOwner, comments, likes, title, category, description, size}) {
  return (
    <div className={size}>
        <img src={image} alt={description} />
    </div>
  )
}

export default Post