import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Mian/Home'
import About from './app/pages/Mian/About'
import Profile from './app/pages/Profile'
import ProfileCards from './app/pages/ProfileCards'
import SingleProfile from './app/pages/SingleProfile'
import SearchUser from './app/pages/Mian/SearchUser'
import Register from './app/pages/Auth/Register'
import Login from './app/pages/Auth/Login'
import Contact from './app/pages/Mian/Contact'
import HowItWorks from './app/pages/Mian/HowItWorks'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/usersProfile' element={<ProfileCards />} />
        <Route path='/dynamicProfile/:id' element={<SingleProfile />} />
        <Route path='/searchUser' element={<SearchUser />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/howitworks' element={<HowItWorks />} />
      </Routes>
    </>
  )
}


export default App