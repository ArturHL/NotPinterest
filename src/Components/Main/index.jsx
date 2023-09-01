import React, { useState } from 'react'
// Homepage
import Homepage from './Homepage/homepage'
// Explorar
import Explorar from './Explorar/explorar'
import { use } from 'express/lib/router'

function Main({page}) {
  function validatePage(page){
    if(page === 'Homepage'){
      return <Homepage/>
    }
    if(page === 'Explorar'){
      return <Explorar/>
    }
  }

  return (
    <>    
      {validatePage(page)}
    </>
  )
}

export default Main