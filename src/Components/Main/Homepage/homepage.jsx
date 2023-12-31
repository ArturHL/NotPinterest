import React from 'react'
import posts from '../../../data'
import Post from './posts/post'
import './homepage.css'

function Homepage() {
  return (
    <div className='main-container-home'>
      {posts.map((post) => {
        const random = Math.trunc((Math.random())*10)
        if(random === 0){
          var size = 'post postSmall'
        }else if(random%2 === 0){
          var size = 'post postDefault'
        }
        else{
          var size = 'post postMedium'
        }
        return(<Post 
          key={Math.random()}
          size={size}
          image={post.image} 
          date={post.date}
          userOwner={post.userOwner} 
          comments={post.comments}
          likes={post.likes}
          title={post.title} 
          category={post.category}
          description={post.description}/>)
        })}
    </div>
  )
}

export default Homepage