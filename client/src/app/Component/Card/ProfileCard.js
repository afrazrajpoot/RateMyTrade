import React, { useState } from 'react'
import { ImageInput } from '../TradesmanProfile/Portfolio'
import { useGlobalContext } from '../../UserContext/UserContext'

const ProfileCard = ({img, location, memberSince}) => {
  const [previewImage,setPreview] = useState('')
  const {tradesManProfile,setTradesManProfile} = useGlobalContext()

  const handleImageChange = ( e) => {
    const file = e.target.files[0];
    const imageName = e.target.name
    if (file) {
      
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL)
      setTradesManProfile({ ...tradesManProfile, [imageName]: file });
    }
  };
  console.log(previewImage)
  return (
    <>
      <main className='w-full max-w-[25vw] col-center shadow-md'>
        <img src={previewImage?previewImage:"/img/c1.png"} alt={'profile image'} className='w-full border-[1px] m-vw max-w-[9vw] rounded-full' />
      <input type="file" name="image" onChange={handleImageChange}/>
        <h1 className='font-medium text-[1vw] mt-[0.4vw]'>{ tradesManProfile.username? tradesManProfile.username : 'John Doe'}</h1>
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
