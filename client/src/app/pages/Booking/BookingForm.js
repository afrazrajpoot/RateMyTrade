import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
  const Background = "https://images.pexels.com/photos/5805491/pexels-photo-5805491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const { id } = useParams();
  var navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    startTime: '',
    endTime: '',
    addInfo: ''
  });
  const showToast = (message, type) => {
    toast[type](message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
};

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    startTime: '',
    endTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };


  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Name field is required';
      isValid = false;
    }

    // Validate email
    if (formData.email.trim() === '') {
      newErrors.email = 'Email field is required';
      isValid = false;
    }
    else if(!isValidEmail(formData.email)) {
        newErrors.email = 'Email is not valid format';
        isValid = false;
    }

    // Validate phone
    if (formData.phone.trim() === '') {
        newErrors.phone = 'Phone field is required';
        isValid = false;
    }
    else if(!isValidPhone(formData.phone)) {
      newErrors.phone = 'Phone is not valid format';
      isValid = false;
  }

    // Validate date
    if (formData.date === '') {
      newErrors.date = 'Date is required';
    }

    // Validate Start time
    if (formData.startTime === '') {
      newErrors.startTime = 'Start Time is required';
    }

    // Validate End time
    if (formData.endTime === '') {
      newErrors.endTime = 'End Time is required';
    }


    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {

      console.log('Form data saved:', formData);
      try {
        const token = JSON.parse(localStorage.getItem('tokken'))
        const response = await fetch(`http://localhost:5000/api/v1/booking/book-appointment/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':  `Bearer ${token}` 
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Form data submitted successfully');
          // Optionally, reset the form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            startTime: '',
            endTime: '',
            addInfo: ''
            // Reset other form fields
          });
          showToast('Booking saved successfully', 'success');
          navigate('/');
        } else {
          console.error('Failed to submit form data');
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const isValidEmail = (email) => {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    return emailRegex.test(email);
  };
  const isValidPhone = (phone) => {
    const phoneNumberRegex = /^\d{4}[-.\s]?\d{3}\d{4}$/;

    return phoneNumberRegex.test(phone);
  };

  return (
    <div style={{backgroundImage: `url(${Background})`, height: "120vh", width: "100%",
    backgroundSize: "cover", backgroundRepeat: "no-repeat"}}> 
    <div class="container mx-auto sm:px-4">
    <div class="flex flex-wrap ">
        <div class="md:w-1/2 pr-4 pl-4 md:mx-1/4 border p-6 mt-3 shadow bg-gray-100 opacity-75">
            <div class="w-full">
                <h3 class="fw-normal text-gray-600 fs-4 uppercase mb-2">Schedule Appointment</h3>
            </div>
            <form action="post" onSubmit={handleSubmit} >
                <div class="flex flex-wrap  g-3">
                    <div class="md:w-full pr-4 pl-4">
                        <label class="form-label">Name</label>
                        <input type="text" name="name" id="name" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border--black-on-active border-3" placeholder="Enter your Name"
                         value={formData.name}
                         onChange={handleChange}
                         style={{ border: errors.name ? '1px ridge red' : '' }}
                         />
                        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    </div>
                    <div class="md:w-1/2 pr-4 pl-4">
                        <label class="form-label">Email</label>
                        <input type="email" name="email" id="email" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border--black-on-active border-3" placeholder="Enter your Email"
                           value={formData.email}
                           onChange={handleChange}
                           style={{ border: errors.email ? '1px ridge red' : '' }}/>
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </div>
                    <div class="md:w-1/2 pr-4 pl-4">
                        <label class="form-label">Phone</label>
                        <input type="tel" name="phone" id="phone" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border--black-on-active border-3" placeholder="Enter your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ border: errors.phone ? '1px ridge red' : ''}}
                        />
                        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                    </div>
                    <div class="md:w-full pr-4 pl-4">
                        <label class="form-label">Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border--black-on-active border-3" placeholder="Enter Date"
                          style={{ border: errors.date ? '1px ridge red' : '' }}
                        />
                        {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
                    </div>
                    <div class="md:w-1/2 pr-4 pl-4">
                        <label class="form-label">Start Time</label>
                        <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border--black-on-active border-3" placeholder="Enter Time"
                          style={{ border: errors.startTime ? '1px ridge red' : '' }}
                        />
                        {errors.startTime && <span style={{ color: 'red' }}>{errors.startTime}</span>}
                    </div>
                    <div class="md:w-1/2 pr-4 pl-4">
                        <label class="form-label">End Time</label>
                        <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border--black-on-active border-3" placeholder="Enter Time"
                          style={{ border: errors.endTime ? '1px ridge red' : '' }}
                        />
                        {errors.endTime && <span style={{ color: 'red' }}>{errors.endTime}</span>}
                    </div>
                    <div class="w-full">
                        <label class="form-label">Additional Information</label>
                        <textarea rows={3} name="addInfo" value={formData.addInfo} onChange={handleChange} class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border--black-on-active border-3 mb-2" placeholder="Enter Additional Information"></textarea>
                    </div>
                    <div class="w-full mt-5">                        
                        <button type="submit" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 text-gray-900 float-end border-2 mb-2">Book Now</button>
                        <Link to={`/tradesman/book-appointment/${id}`}>
                          <button type="button" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 float-end me-2 border-2 mb-2">Cancel</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
   
  );
};

export default BookingForm;
