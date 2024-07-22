import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    contact: '',
    department: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState, 
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:4080/admin/register', formData);
      if (response.status === 200) {
        alert('Admin Registration Successful!');
      } else {
        alert('Unexpected status code: ' + response.status);
      }
    } catch (error) {
      console.error('Error in Registering:', error);
      alert('Error in Registering: ' + error.message);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Admin Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your username" 
            name="username" 
            value={formData.username} 
            onChange={handleInputChange} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Contact</Form.Label>
           <Form.Control
             type="tel"
             placeholder="Enter your Contact"
             name="contact"
             value={formData.Contact}
             onChange={handleInputChange}
             required
           />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control 
            as="select" 
            name="department" 
            value={formData.department} 
            onChange={handleInputChange} 
            required
          >
            <option value="" disabled>Select department</option>
            <option value="startupIncubation">Startup Incubation</option>
            <option value="internIncubation">Intern Incubation</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter your password" 
            name="password" 
            value={formData.password} 
            onChange={handleInputChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default AdminSignup;