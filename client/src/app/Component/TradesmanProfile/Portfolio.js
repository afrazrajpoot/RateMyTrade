import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useUpdateTradesmanMutation } from '../../store/storeApi';
import { useGlobalContext } from '../../UserContext/UserContext';


export const ImageInput = ({ id, name, selectedImage, handleImageChange }) => {
  return (
    <div className='relative m-vw w-full bg-gray-300 cursor-pointer hover:bg-gray-400 overflow-hidden max-w-[20vw] h-[12vw] rounded-md border-2'>
      <label htmlFor={id} className='relative bg-gray-300'>
        <img src={selectedImage ? selectedImage : " "} alt={selectedImage ? '' : ''} className='w-full h-full z-10 object-cover' />
        {!selectedImage && (
          <Icon icon='ant-design:camera-filled' className='text-3vw text-white absolute top-[4vw] left-[8vw] z-50' />
        )}
      </label>
      <input type='file'  id={id} name={name} onChange={handleImageChange} className='sr-only hover:cursor-pointer' />
    </div>
  );
};

const Portfolio = () => {
  const {tradesManProfile,setTradesManProfile} = useGlobalContext()
  const {id} = useParams();
  const [userInfo, setUserInfo] = useState({
    gigImage1: "", gigImage2: "", gigImage3: "",
  });
  const [selectedFileURL, setSelectedFileURL] = useState({
    gigImage1: "", gigImage2: "", gigImage3: "",
  });
  // const {tradesManProfileId} = useGlobalContext()
  // const id = tradesManProfileId?._id
  console.log(id, "tr ki id");

  const navigate = useNavigate();
  // const [updateTradesman] = useUpdateTradesmanMutation();
  const {  setValue,  formState: { errors }, reset, register } = useForm({
    defaultValues: {
      gigImage1: "",
      gigImage2: "",
      gigImage3: "",
    },
  });
  const handleImageChange = (name, e) => {
    const file = e.target.files[0];
    if (file) {
      setValue(name, file);
      const imageURL = URL.createObjectURL(file);
      setSelectedFileURL((prevSelectedFileURL) => ({
        ...prevSelectedFileURL,
        [name]: imageURL,
      }));
      setTradesManProfile({ ...tradesManProfile, [name]: file });
    }
  };
  
  const showToast = (message, type) => {
    toast[type](message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
};

const onSubmit = async (data, e) => {
  e.preventDefault();
    const formData = new FormData();
  try {
    // Append text data to formData
    for (const key in data) {
      if (data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    }
    // Append image to formData
    if (userInfo?.gigImage1) {
      formData.append('gigImage1', userInfo?.gigImage1);
    }
    if (userInfo?.gigImage2) {
      formData.append('gigImage2', userInfo?.gigImage2);
    }
    if (userInfo?.gigImage3) {
      formData.append('gigImage3', userInfo?.gigImage3);
    }
    // Make the Axios POST request
    const response = await axios.put(`http://localhost:5000/api/v1/tradesman/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.data) {
      showToast('Successfully updated', 'success');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      showToast('Failed to sign up. Please try again.', 'error');
    }
  } catch (error) {
    console.error('Error during sign-up:', error);
    showToast('An unexpected error occurred. Please try again.', 'error');
  }
  reset();
};

  return (
    <div className="mt-vw w-full">
    <h1 className='text-[1.5vw] font-medium text-center'>Showcase Your Services In A Gallery</h1>
    <section className="w-full p-[0.5vw]">
      <h1 className='text-vw text-black font-semibold'>Images (up to 3)</h1>
      <div className="flex mt-vw items-center">
        <ImageInput id='gigImage1' name='gigImage1' selectedImage={selectedFileURL?.gigImage1} handleImageChange={(e)=>handleImageChange('gigImage1',e)} />
        <ImageInput id='gigImage2' name='gigImage2' selectedImage={selectedFileURL?.gigImage2} handleImageChange={(e)=>handleImageChange('gigImage2',e)} />
        <ImageInput id='gigImage3' name='gigImage3' selectedImage={selectedFileURL?.gigImage3} handleImageChange={(e)=>handleImageChange('gigImage3',e)} />
      </div>
    </section>
  </div>
  );
};


export default Portfolio;