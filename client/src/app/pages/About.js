import React from 'react'
import { aboutData } from '../Data'
import AboutCards from '../Component/AboutCards'
import { Icon } from '@iconify/react';
import Reasons from '../Component/Reasons';
const About = () => {
  return (
    <main >
    <div className='w-full'>
        <h1 className='bg-slate-200 p-[3vw] text-[2vw] w-full'>ABOUT US</h1>   
    </div>
    <div className=' p-[1.5vw] h-[34vw]'>
    <img src="/img/aboutus.jpg" alt="" className='w-full h-full'/>
    </div>
    <section className='grid grid-cols-3 gap-[2vw] place-content-center place-items-start w-full p-[3vw] bg-white '>
        {
            aboutData?.map((elem,i)=>(
                <AboutCards key={i} title={elem?.title} info={elem?.info} icon={elem?.icon} />
            ))
        }
    </section>
    <Reasons />
 
    </main>
  )
}

export default About
