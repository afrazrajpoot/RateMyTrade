import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import ProfileCard from "../Component/Card/ProfileCard";
import { useAddTradesmanMutation } from "../store/storeApi";
import Description from "../Component/TradesmanProfile/Description";
import Map from "../Component/GoogleMap/Map";
import Portfolio from "../Component/TradesmanProfile/Portfolio";

const Profile = () => {
  const [data, setData] = useState({});
  const [addTradesman] = useAddTradesmanMutation();
  const [activeSection, setActiveSection] = useState('description');

  const { handleSubmit, control, formState: { errors }, setValue, reset } = useForm({
    defaultValues: {
      tradeType: "",
      phoneNumber: "",
      location: '',
      description: "",
    }
  });

  const renderSection = () => {
    switch (activeSection) {
      case 'description':
        return <Description control={control} handleDataChange={handleDataChange} />;
      case 'location':
        return <Map />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return null;
    }
  }
  
  const handleDataChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value });
    setValue(name, value);
  };

  async function onSubmit(e, data) {
    e.preventDefault();
    try {
      const response = await addTradesman(data);
      console.log(response, "response");
      reset();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full h-full">
      <h1 className="text-[2vw] text-yellow-600 underline mt-vw font-medium text-center w-full">Complete your profile</h1>
      <main className='flex p-vvw mt-2vw w-full'>
        <div className="w-full max-w-[20vw] h-[21.3vw] mt-[1vw] ml-[5vw] border-[1px] rounded-md ">
          <ProfileCard />
        </div >
        <form className='w-full h-[30vw] m-vw rounded-md shadow-md border-[1px] ' onSubmit={handleSubmit(onSubmit)}>
          <section className="flex border-b-[1px] border-yellow-600 p-vw items-center">
            <p onClick={() => {setActiveSection('description')}} className={`text-[1vw] ${activeSection === 'description' ? 'text-yellow-600 underline font-semibold' : ''} cursor-pointer ml-vw font-medium`}>Description</p>
            <p onClick={() => {setActiveSection('location')}} className={`text-[1vw] ${activeSection === 'location' ? 'text-yellow-600 underline font-semibold' : ''} cursor-pointer ml-vw font-medium`}>Location</p>
            <p onClick={() => {setActiveSection('portfolio')}} className={`text-[1vw] ${activeSection === 'portfolio' ? 'text-yellow-600 underline font-semibold' : ''} cursor-pointer ml-vw font-medium`}>Portfolio</p>
          </section>
          {renderSection()}
          <input type="submit" value='Submit' className='bg-yellow-600 hover:bg-yellow-500 p-[0.5vw] text-vw ml-[1vw] text-white rounded-md shadow-lg cursor-pointer' />
        </form>
      </main>
    </div>
  );
};

export default Profile;
