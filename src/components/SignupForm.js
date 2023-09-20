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
  const [proffesion, setProffesion] = useState("");
  const [socialmedia, setSocialmedia] = useState("");

  const dispatch = useDispatch();
  const errors = {};

  const formData={
    firstName:firstName,
    lastName:lastName,
    email:email,
    city:city,
    country:country,
    phonenumber:phonenumber,
    proffesion:proffesion,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData,reset))
  };

  return (
    
    <div className="center-container">
      <div className="card">
        <form onSubmit={handleSubmit} >
          <p style={{fontSize:'29px',fontFamily:'-moz-initial',marginTop:'50px',marginLeft:'50px'}}>Diplomats Sign Up</p>
          <input
            style={{width:'400px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', marginTop:'10px'}}
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="    First Name"
          />
          <br/>
          <input
          style={{width:'400px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px'}}
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="    Last Name"
          />
          <br/>
          <input
          style={{width:'173px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px'}}
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="   City"
          />
          
          <input
          style={{width:'173px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px'}}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="   Email"
          />
          <br/>
          <input
          style={{width:'173px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px'}}
            type="text"
            value={country}
            onChange={handleCountryChange}
            placeholder="   Country"
          />
          
          <input
          style={{width:'173px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px'}}
            type="number"
            value={phonenumber}
            onChange={handlePhonenumberChange}
            placeholder="   Phone No"
          />
          <br/>
          <input
          style={{width:'400px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', marginTop:'10px'}}
            type="text"
            value={proffesion}
            onChange={handleProffesionChange}
            placeholder="    Proffesion"
          />
          <br/>
          <input
          style={{width:'400px', height:'30px', marginBottom:'20px',marginLeft:'50px',borderRadius:'5px', marginTop:'10px'}}
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
