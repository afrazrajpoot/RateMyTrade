import React from 'react'

const AboutCompany = () => {
  return (
    <>
     <section className='flex p-[5vw] bg-[#e8f3df]  '>
     <div className='flex flex-col items-center  text-vw w-full max-w-[50vw]'>
    <h1 className='font-bold w-full max-w-[50vw] text-center  mt-[2vw] text-[2vw]'>ABOUT OUR COMPANY</h1>    
    <p className='text-center text-[1.5vw] '>Premium maintenance services at your doorstep</p>
    <p className='text-center text-[1.2vw] w-full mt-vw max-w-[40vw]'>The Handyman is a maintenance & repair company that provides services to residential and commercial clients. The company is registered with Pakistan Engineering Council and also provides construction, renovation and complete facilities management services.</p>
    <button className='bg-orange-500 text-white p-[0.9vw] mt-[2vw] rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300'>see cleaning service detail</button>
    </div>
    <div className='grid grid-cols-2 gap-[2vw]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcqp8cAdmJ5fWKTYoXl9qie9lOJX6iNySGA&usqp=CAU" alt="image man" className='w-full max-w-[30vw] h-[20vw] object-cover m-[1.5vw]' />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsFxo0RtXymfCJEP6TFPSH92cgcZMUVVy5g&usqp=CAU" alt="image man" className='w-full max-w-[30vw] h-[20vw] object-cover m-[1.5vw]' />
    </div>
    </section> 
    </>
  )
}

export default AboutCompany
