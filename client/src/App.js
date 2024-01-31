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
import Login from './app/pages/Login'
import Register from './app/pages/Register'
import Navbar2 from './app/Component/Navbar-2'
import BookingPage from './app/pages/Booking/BookingPage'
import BookingForm from './app/pages/Booking/BookingForm'
import Checkout from './app/pages/Payment/Checkout'

const App = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Navbar2/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/usersProfile' element={<ProfileCards />} />
        <Route path='/dynamicProfile/:id' element={<SingleProfile />} />
        <Route path='/searchUser' element={<SearchUser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path="/tradesman/book-appointment/:id"
          element={<BookingPage />}
        />
        <Route
          path="/tradesman/book-appointment/:id/booking-form"
          element={<BookingForm />}
        />
        <Route
          path="/tradesman/book-appointment/:id/checkout"
          element={<Checkout />}
        />
      </Routes>

      <Footer />
    </>
  )
}


export default App