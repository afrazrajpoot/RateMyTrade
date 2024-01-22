import React from 'react'
import { navData } from '../Data'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex gap-2 p-[2vw] bg-[#e8f3df] opacity-80 sticky top-0 z-50' >
        <h1 className='font-bold'>Rate my Trade</h1>
        <div className='ml-[4vw] flex items-start'>
    {
        navData?.map((item, index) => {
            return (
                <div className='ml-[2vw]'>
                <p key={index} className='cursor-pointer '>
                    <Link to={item.url}>{item.title}</Link>
                </p>
                </div>
            )
        })
    }
    </div>
    </div>
    </>
  )
}

export default Navbar
