import React, { useState } from "react";
import { profileData } from "../Data";
import ProfileCard from "../Component/ProfileCard";
import ProfileBio from "../Component/ProfileBio";

const Profile = () => {
  const [data, setData] = useState({});
  
  const handleData = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };
  async function submitData(e){
    e.preventDefault();
   try{
    const resp = await fetch("http://localhost:5000/api/v1/profile/createProfile",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
   
    if(resp.ok){
      alert("submited successful")
    }else{
      alert("submit right cridential")
    }
    
   }catch(err){
     console.log(err);
   }
  }
  return (
    <>
      <main className='flex w-full gap-[5vw]'>
        <div className="w-full max-w-[20vw]  mt-[1vw] ml-[5vw] bg-slate-200 shadow-md rounded ">
          {profileData.profileCard?.map((elem, i) => (
            <ProfileCard key={i} {...elem} />
          ))}
        </div >
        <form className=' grid grid-cols-2 p-[2vw]  w-full' onSubmit={submitData}>
          {profileData.bio?.map((elem, i) => (
            <div  className='p-[1vw]'>
                <lable className='text-[1vw] font-medium' key={i}>{elem.lable}</lable> <br />
              {elem.type === "text" ? (
                <>
                  <input className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300'
                    type={elem.type}
                    name={elem.name}
                    placeholder={elem.lable}
                    onChange={handleData}
                  />
                </>
              ) :elem.type === "password" ? (
                <>
                  <input className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300'
                    type={elem.type}
                    name={elem.name}
                    placeholder={elem.lable}
                    onChange={handleData}
                  />
                </>
              ) :
              elem.type === "number" ? (
                <>
                  <input className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300'
                    type={elem.type}
                    name={elem.name}
                    placeholder={elem.lable}
                    onChange={handleData}
                  />
                </>
              ) :
              elem.type === "email" ? (
                <>
                  <input className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300' 
                    type={elem.type}
                    name={elem.name}
                    placeholder={elem.lable}
                    onChange={handleData}
                  />
                </>
              ) :(
                <>
                <select name={elem.name} className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300' onChange={handleData}>
                <option  className="text-vw" value="">select</option>

                    {
                        elem.options?.map((option, i) => (
                            <option key={i} className="text-vw" value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
                </>
              )}
            </div>
          ))}
          <input type="submit" value='submit' id="" className='bg-blue-400 p-[1vw] text-[1.5vw] w-full max-w-[20vw] ml-[1vw] text-white rounded-md shadow-lg cursor-pointer'  />
        </form>
      </main>
    </>
  );
};

export default Profile;
