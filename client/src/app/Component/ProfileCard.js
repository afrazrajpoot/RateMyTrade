import React from 'react'

const ProfileCard = ({img, name, location, memberSince}) => {
  return (
    <>
      <main className='w-full max-w-[25vw] col-center shadow-md'>
        <img src={img ? img : '/img/man.png'} alt={name} className='w-full border-[1px] m-vw max-w-[9vw] rounded-full' />
        <h1 className='font-medium text-[1vw] mt-[0.4vw]'>{name ? name : 'John Doe'}</h1>
        <section className="w-full mt-vw flex p-vw justify-between items-center border-[1px]">
          <p className='text-vw text-gray-700'>Member Since</p>
          <p className='text-vw text-gray-700'>{memberSince ? memberSince : '2022'}</p>
        </section>
        <section className="w-full flex p-vw justify-between items-center border-[1px]">
          <p className='text-vw text-gray-700'>From</p>
          <p className='text-vw text-gray-700'>{location ? location : 'Pakistan'}</p>
        </section>
        
      </main>
    </>
  )
}

export default ProfileCard
