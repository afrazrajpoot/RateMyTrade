import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import About from './app/pages/About'
import Navbar from './app/Component/Navbar'
import Footer from './app/Component/Footer'
import Profile from './app/pages/Profile'
import ProfileCards from './app/pages/ProfileCards'
import SingleProfile from './app/pages/SingleProfile'
import SearchUser from './app/pages/SearchUser'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/usersProfile' element={<ProfileCards />} />
        <Route path='/dynamicProfile/:id' element={<SingleProfile />} />
        <Route path='/searchUser' element={<SearchUser />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App