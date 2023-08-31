import { useState } from 'react'
import NavBar from './Components/Navbar/index'
import Main from './Components/Main/index'
import More from './Components/More/index'


function App() {
  const [page, setPage] = useState('Homepage')

  function homepage(){
    setPage('Homepage')
  }
  function explorar(){
    setPage('Explorar')
  }

  return (
    <>
      <NavBar Home={homepage} Explorar={explorar} page={page}/>
      <Main page={page}/>
      <More />
    </>
  )
}

export default App
