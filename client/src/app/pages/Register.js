import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    userType: "User",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });
  const [uploadedImage, setUploadedImage] = useState("/img/avatar.png");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!isCheckboxChecked);
  };

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
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate first name
    if (formData.firstName.trim() === "") {
      newErrors.firstName = " ";
      isValid = false;
    } else if (formData.firstName.length < 4) {
      newErrors.firstName = "First Name must be atleast 4 characters";
      isValid = false;
    }
    // Validate last name
    if (formData.lastName.trim() === "") {
      newErrors.lastName = " ";
      isValid = false;
    } else if (formData.lastName.length < 4) {
      newErrors.lastName = "Last Name must be atleast 4 characters";
      isValid = false;
    }

    // Validate email
    if (formData.email.trim() === "") {
      newErrors.email = " ";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email is not valid format";
      isValid = false;
    }
    // Validate password
    if (formData.password.trim() === "") {
      newErrors.password = " ";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be atleast 6 characters";
      isValid = false;
    }
    // Validate confirm password
    if (formData.confirmPassword.trim() === "") {
      newErrors.confirmPassword = " ";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Validate phone
    if (formData.phone.trim() === "") {
      newErrors.phone = " ";
      isValid = false;
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Phone is not valid format";
      isValid = false;
    }


    setErrors(newErrors);
    return isValid;
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data saved:", formData, uploadedImage);
    }else {
      console.log(formData, uploadedImage)
    }
  };
  return (
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div class="md:w-1/2 bg-white rounded-lg shadow md:mt-4 mb-4 sm:w-1/2 xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            <div className="mb-4 text-center ">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-2"
              />
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="rounded-full mx-auto"
                style={{ width: "120px", height: "120px", border: "1px solid" }}
              />
            </div>
            <form class="space-y-4 md:space-y-6" action="#">
              <div className="flex block">
                <div className="w-full sm:w-1/2 sm:mb-0">
                  <label
                    for="firstName"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{ border: errors.firstName ? '1px ridge red' : '', backgroundColor: errors.firstName ? '#fce0d9' : '' }}
                    id="firstName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your first name"
                    required=""
                  />
                  {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                </div>
                <div className="w-full sm:w-1/2 ml-2">
                  <label
                    for="lastName"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={{ border: errors.lastName ? '1px ridge red' : '', backgroundColor: errors.lastName ? '#fce0d9' : '' }}
                    id="lastName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your last name"
                    required=""
                  />
                  {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ border: errors.email ? '1px ridge red' : '', backgroundColor: errors.email ? '#fce0d9' : '' }}
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@example.com"
                  required=""
                />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
              </div>
              <div className="flex block">
                <div className="w-1/2">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ border: errors.password ? '1px ridge red' : '', backgroundColor: errors.password ? '#fce0d9' : '' }}
                    id="password"
                    placeholder="Create new password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                  {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>
                <div className="w-1/2 ml-2">
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={{ border: errors.confirmPassword ? '1px ridge red' : '', backgroundColor: errors.confirmPassword ? '#fce0d9' : '' }}
                    id="confirmPassword"
                    placeholder="Confirm password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                  {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                </div>
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ border: errors.phone ? '1px ridge red' : '', backgroundColor: errors.phone ? '#fce0d9' : '' }}
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your Phone Number"
                  required=""
                />
                {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
              </div>
              <div>
                <label
                  for="userType"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Type
                </label>
                <select
                  name="userType"
                  id="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                >
                  <option value="User">User</option>
                  <option value="Tradesman">Tradesman</option>
                </select>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500">
                    I accept the{" "}
                    <span class="font-medium text-primary-600 hover:underline">
                      Terms and Conditions
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                style={{ backgroundColor: !isCheckboxChecked ? "#e9f0e4":"#e8f3df"}}
                disabled={!isCheckboxChecked}
                class="w-full hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
