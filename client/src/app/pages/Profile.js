import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import ProfileCard from "../Component/Card/ProfileCard";
import { useAddTradesmanMutation } from "../store/storeApi";
import Description from "../Component/TradesmanProfile/Description";
import Map from "../Component/GoogleMap/Map";
import Portfolio from "../Component/TradesmanProfile/Portfolio";
import { useGlobalContext } from "../UserContext/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {tradesManProfile,setTradesManProfile} = useGlobalContext()
  const [searchedLocation, setSearchedLocation] = useState(null)
  const navigate = useNavigate()
  const [data, setData] = useState({});
  const [addTradesman] = useAddTradesmanMutation();
  const [activeSection, setActiveSection] = useState('description');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })

  const { handleSubmit, control, formState: { errors }, setValue, reset,getValues } = useForm({
    defaultValues: {
      username:"",
      tradeType: "",
      phoneNumber: "",
      description: "",
      lat: coordinates?.lat || 0, 
      lng: coordinates?.lng || 0
    
    }
  });
  

  const renderSection = () => {
    switch (activeSection) {
      case 'description':
        return <Description control={control} handleDataChange={handleDataChange} />;
      case 'location':
        return <Map setSearchedLocation={setSearchedLocation}/>;
      case 'portfolio':
        return <Portfolio  />;
      default:
        return null;
    }
  }
  
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
    setTradesManProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  

  const onSubmit = (data) => {
    const formData = new FormData();
   try{
    formData.append('username', tradesManProfile?.username);
    formData.append('tradeType', tradesManProfile?.tradeType);
    formData.append('location', tradesManProfile?.location);
    formData.append('phoneNumber', tradesManProfile?.phoneNumber);
    formData.append('description', tradesManProfile?.description);
    formData.append('image', tradesManProfile?.image)
    formData.append('gigImage1', tradesManProfile?.gigImage1);
    formData.append('gigImage2', tradesManProfile?.gigImage2);
    formData.append('gigImage3', tradesManProfile?.gigImage3);
    console.log('Tradesman Profile:', tradesManProfile);
    formData.append('lat', coordinates?.lat);
    formData.append('lng', coordinates?.lng)
    console.log(formData);
    addTradesman(formData);
    navigate('/usersProfile')
    toast.success("Profile added successfully");
   }catch(err){
    // console.log(err.message)
    toast.error(err.message)
   }
  };

  useEffect(() => {
    console.log(searchedLocation, 'searchedLocation');
    const lat = Number(searchedLocation?.center?.[0]) || 0;
    const lng = Number(searchedLocation?.center?.[1]) || 0;
  
    setCoordinates({ ...coordinates, lat, lng });
  }, [searchedLocation]);
  console.log(coordinates, "coordinates");

  return (
    <div className="w-full h-full">
      <h1 className="text-[2vw] text-yellow-600 underline mt-vw font-medium text-center w-full">Complete your profile</h1>
      <main className='flex p-vvw mt-2vw w-full'>
        <div className="w-full max-w-[20vw] h-[21.3vw] mt-[1vw] ml-[5vw] border-[1px] rounded-md ">
          <ProfileCard  />
        </div >
        <ToastContainer />
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
