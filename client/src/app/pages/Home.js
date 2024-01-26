import React from 'react'

import Hero from '../Component/Hero'
import Services from '../Component/Services'
import Cards from '../Component/Cards'
import AboutCompany from '../Component/AboutCompany'
import Reasons from '../Component/Reasons'
import Footer from '../Component/Footer'
import Service from '../Component/Service'
import { handymanTestimonials } from '../Data'

const Home = () => {
  return (
    <>
      {/* <h1>Home page</h1> */}
   
      <Hero />
      <Services />
      <Cards />
      <Reasons />
      <AboutCompany />
      <article className="w-full bg-gray-100 p-2vw flex flex-col justify-center items-center col-center">
        <h1 className='font-bold w-full max-w-[50vw] text-center  mt-[2vw] text-[2vw] p-[1vw]'>SIMPLE PLANS. SIMPLE PRICING</h1>
        <div className='w-full max-w-[9vw]  border bottom-2 border-orange-400 ml-[1vw] -mt-[1vw]'></div>
        <p className='text-center p-[3vw] text-gary-800 w-full max-w-[80vw] text-[1.5vw]'>The Handyman offers a very simple and fixed pricing system. Every job has a fixed unit cost in Pakistani Rupees. In case the job is not listed in our price list, you will be billed as low as Rs. 500* per hour only. This makes our service both affordable and transparent giving you complete satisfaction and peace of mind. See our prices here.</p>
        </article>
      <Service />
      <main className="w-full bg-gray-800 p-3vw row-center">
        {handymanTestimonials?.map((item, index)=> (
          <div className='flex w-full max-w-[20vw] items-center' key={index}>
            <span className='text-2vw text-yellow-600'>{item?.icon}</span>
            <span className='text-[1.2vw] ml-0.5vw text-white'>{item?.title}</span>
          </div>
        ))}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Home
