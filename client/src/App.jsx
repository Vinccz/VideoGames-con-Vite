import {Routes, Route} from 'react-router-dom'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'
import NavBar from './components/nav/NavBar'
import './App.css'

function App() {
  

  return (
    <>
   <NavBar />
    <Routes>

      <Route exact path='/' element={<Landing />}/>
      <Route  path='/home' element={<Home />}/>

    </Routes>      
    </>
  )
}

export default App
