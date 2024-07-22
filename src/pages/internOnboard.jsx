import React from "react";
import '../styles/internonboard.css';
import {jwtDecode} from 'jwt-decode';

const InternOnboard = () => {
  const storedToken = localStorage.getItem('token');

    let name = null;
    if(storedToken){
      const decodedToken = jwtDecode(storedToken);

      if(!decodedToken.name){
        alert('Token doesnt have id');
        return;
      }
      name = decodedToken.name;
    
    }



  return (
    <>
      <div>
      <div id="welcomeWrapper">
        <h2>Welcome {name} Onboard</h2>
        <img src="images/undraw_welcome_cats_thqn.svg" alt=""/>
        <p id="welcomeMsg">
            Thank you {name} for registering with Blinc360 as an intern.<br/>
            Expect a call from out HR soon
        </p>
    </div>
    <h2 id="contactHR">
        Contact our HR for further assistance
    </h2>
    <img src="images/wave.svg" alt="" id="waveImage"/>
    <div id="hrCards">
        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMOyMWTIjDFkAMSP49AiSapC9Ut_q2kKFnA&s" alt=""/>
            <p class="cardHeading">
                Abhinav Sharma
            </p>
            <div class="contactDetails">
                <div class="headings">
                    <p>Contact:</p>
                    <p>Email address:</p>
                    <p>Designation:</p>
                </div>
                <div class="values">
                    <p><a href="http://wa.me/+918954119194">Chat on WhatsApp</a></p>
                    <a href='mailto:abhinav.sharma@getlendingbuddha.online'>abhinav.sharma@getlendingbuddha.online</a>
                    <p className="mt-3">Head HR</p>
                </div>
            </div>
            <hr/>
            <a href="mailto:abhinav.sharma@getlendingbuddha.online" className="emailBtn">Write Email</a>
        </div>
    </div>
      </div>
    </>
  );
};

export default InternOnboard;
