import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        username: '',
        password : '',
    });


    const [type,setType] =useState('');

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleTypeChange = (event) =>{
        setType(event.target.value);
    }

    const handleSubmit =async (event) =>{
        event.preventDefault();
        try {
            let response;
            if(type==='intern') response = await axios.post('http://3.110.125.138:4080/intern/login',formData);
            else response = await axios.post('http://3.110.125.138:4080/startup/login',formData);
           
            // if(type==='intern') response = await axios.post('http://localhost:4080/intern/login',formData);
            // else response = await axios.post('http://localhost:4080/startup/login',formData);
            
            if(response.status===200){
                const token = response.data.token;
                localStorage.setItem('token',token);
                alert('Sign in Successful!');
                navigate('/intern-onboard');
            }else {
                alert('Unexpected status code: ' + response.status);
            }
          } catch (error) {
            console.error('Error in Signing in:', error);
            alert( `${error.name} -> ${error.message}`);
            if (error.response) {
                console.log(error.response);
                if(error.response.data === 'Unauthorized') alert('Username or Password are incorrect!');
                else alert('Error from server: ' + error.response.status + ' - ' + error.response.data);
            } else if (error.request) {
                alert('No response from the server');
            } else {
                alert('Error setting up the request: ' + error.message);
            }
        }   
    }
    
    return(
        <>
        <Helmet>
            <title>Blinc360 Login Form</title>
            <meta name="description" content="Blinc360 Login Form" />
        </Helmet>
        <div>
            <h2 id="loginWelcome">
                Welcome Back
            </h2>
            <div id="loginFormWrapper">
                <img src="images/undraw_account_re_o7id.svg" alt="" />
                <div className="form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="radio" name="role" id="role-intern" value='intern' onClick={handleTypeChange} />
                        <label htmlFor="role-intern" checked="checked">Intern</label>
                        <input type="radio" name="role" id="role-startup" value='startup' onClick={handleTypeChange} />
                        <label htmlFor="role-startup">Startup</label><br/>
                        <label htmlFor="uname">Email</label><br/>
                        <input required type="text" name="username" className='textInput' id="uname" placeholder='John Doe' value={formData.username} onChange={handleInputChange} /><br/>
                        <label htmlFor="pswrd">Password</label><br/>
                        <input required type="password" name="password" className='textInput' id="pswrd" placeholder='Password' value={formData.password} onChange={handleInputChange} /><br/>
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label><br/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
