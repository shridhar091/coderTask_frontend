import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "../App.css";
import SignupForm from "./SignupForm";
import About from "./About";
import Home from "./Home";
const Navbar = () => {
  return (
    <div className="bg-image">
      <div>
        <nav className="navbar">
          <ul className="ul">
            <li className="heading">
            </li>
            <li style={{marginLeft:'50px'}}>
                <a href="/about" >About Us</a> 
            </li>
            <li style={{marginLeft:'30px'}}>
              <a href="/">Our Products</a>
            </li>
            <li style={{marginLeft:'30px'}}>
              <a href="/">Contact Us</a>
            </li>
            <li style={{marginLeft:'400px'}}>
              <a href="/RegisterForm">Sign up</a>
            </li>
            <li style={{marginLeft:'30px'}}>
              <a href="/">Login</a>
            </li>
            <li >
                <span id="bg-button"><a href="/" >Request A Demo</a></span>
              
            </li>
            <li style={{marginLeft:'30px'}}>
              <a href="/">Diplomats</a>
            </li>
          </ul>
        </nav>
      </div>

      <Route path="/RegisterForm" component={SignupForm} exact={true} />
      <Route path="/about" component={About} exact={true} />
      <Route path="/" component={Home} exact={true} />
    </div>
  );
};

export default Navbar;
