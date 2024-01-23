import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import About from './app/pages/About'
import Navbar from './app/Component/Navbar'
import Footer from './app/Component/Footer'
import Profile from './app/pages/Profile'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}


export default App