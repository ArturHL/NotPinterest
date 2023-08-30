import React from 'react'
import posts from '../../data'
import Post from './post'
import './index.css'

function Main() {
  return (
    <div className='main-container'>
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
        console.log(random);
        console.log(size);
        return(<Post 
          key={post.userOwner}
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

export default Main