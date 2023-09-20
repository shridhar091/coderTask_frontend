import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userActions";

const SignupForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [profession, setProffesion] = useState("");
  const [socialmedia, setSocialmedia] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const formData={
    firstName:firstName,
    lastName:lastName,
    email:email,
    city:city,
    country:country,
    phonenumber:phonenumber,
    proffesion:profession,
    socialmedia:socialmedia
  }

  const reset=()=>{
    setfirstName('')
    setProffesion('')
    setSocialmedia('')
    setPhoneNumber('')
    setCountry('')
    setCity('')
    setEmail('')
    setLastname('')
  }

  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value);
  };

  const handleLastNameChange=(e)=>{
    setLastname(e.target.value)
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }

  const handleCityChange=(e)=>{
    setCity(e.target.value)
  }

  const handleCountryChange=(e)=>{
    setCountry(e.target.value)
  }

  const handlePhonenumberChange=(e)=>{
    setPhoneNumber(e.target.value)
  }

  const handleProffesionChange=(e)=>{
    setProffesion(e.target.value)
  }

  const handleSocialmediaChange=(e)=>{
    setSocialmedia(e.target.value)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(registerUser(formData, reset));
  // };
  const validateForm = () => {
    const validationErrors = {};

    // Required field validation
    if (!firstName) {
      validationErrors.firstName = "First Name is required.";
    }
    if (!lastName) {
      validationErrors.lastName = "Last Name is required.";
    }
    if (!email) {
      validationErrors.email = "Email is required.";
    }
    if (!city) {
      validationErrors.city = "City is required.";
    }
    if (!country) {
      validationErrors.country = "Country is required.";
    }
    if (!profession) {
      validationErrors.profession = "Profession is required.";
    }
    if(!phonenumber){
      validationErrors.phonenumber = "phoneNumber is required.";
    }
    if(!socialmedia){
      validationErrors.socialmedia = "socialmedia is required.";
    }

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email && !emailPattern.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(registerUser(formData, reset));
    }
  };

  return (
    
    <div className="center-container">
      <div className="card">
        <form onSubmit={handleSubmit} >
          <p style={{fontSize:'29px',fontFamily:'-moz-initial',marginTop:'50px',marginLeft:'50px'}}>Diplomats Sign Up</p>
          <input
            style={{width:'400px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', marginTop:'10px', borderColor: errors.firstName ? "red" : ""}}
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="    First Name"
          />
           
          <br/>
          <input
          style={{width:'400px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', borderColor: errors.lastName ? "red" : ""}}
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="    Last Name"
          />
          <br/>
          <input
          style={{width:'173px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', borderColor: errors.city ? "red" : ""}}
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="   City"
          />
          
          <input
          style={{width:'173px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', borderColor: errors.email ? "red" : ""}}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="   Email"
          />
          <br/>
          <input
          style={{width:'173px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', borderColor: errors.country ? "red" : ""}}
            type="text"
            value={country}
            onChange={handleCountryChange}
            placeholder="   Country"
          />
          
          <input
          style={{width:'173px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', borderColor: errors.phonenumber ? "red" : ""}}
            type="text"
            value={phonenumber}
            onChange={handlePhonenumberChange}
            placeholder="   Phone No"
          />
          <br/>
          <input
          style={{width:'400px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', marginTop:'10px', borderColor: errors.profession ? "red" : ""}}
            type="text"
            value={profession}
            onChange={handleProffesionChange}
            placeholder="    Proffesion"
          />
          <br/>
          <input
          style={{width:'400px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', marginTop:'10px', borderColor: errors.socialmedia ? "red" : ""}}
            type="text"
            value={socialmedia}
            onChange={handleSocialmediaChange}
            placeholder="    Social Media Handle"
          />
          <br/>
          <button style={{ backgroundColor: '#F74542', marginLeft: '55px', borderRadius: '6px', height: '35px', color: 'white',width:'400px' }}>Submit</button>
        </form>
      </div>
    </div>
   
  );
};

export default SignupForm;
