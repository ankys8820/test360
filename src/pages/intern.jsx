import React, { useState } from "react";
import waveInvert from "../Images/wave-invert.png";
import upperImage from "../Images/upper-image.svg";
import wave from "../Images/wave.png";
import lowerImage from "../Images/lower.svg";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    collegeName: "",
    semester: "",
    state: "",
    internship: "",
    availability6Months: false,
    paidInternship: false,
    password: "",
    username: "",
    source: "",
  });

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const sources = [
    "Facebook",
    "Linked-In",
    "Internshala",
    "College",
    "Friend",
    "Some News",
  ];

  const sems = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
  ];

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? event.target.checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://3.110.125.138:4080/intern/register",
        formData
      );

      if (response.status === 200) {
        alert("Intern Registration Successful!");
        navigate("/internonboard", formData.name);
        const token = response.data.token;
        localStorage.setItem("token", token);
      } else {
        alert(response);
      }
    } catch (error) {
      console.error("Error in Registering:", error);
      alert( `${error.name} -> ${error.message}`);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  return (
    <div>
      <div
        class="container-fluid"
        style={{
          background: `url(${waveInvert})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "800px",
        }}
      >
        <div class="row h-100">
          <div class="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 class="text-white text-center p-5">
              Ready to Join <b style={{ color: "#00bbf0" }}>Us</b>
            </h1>
            <img src={upperImage} class="mt-2" alt="" />
          </div>
        </div>
      </div>

      <div id="intern">
        <Helmet>
          <title>Service Page</title>
          <meta name="description" content="This is the service page" />
        </Helmet>
        <h1 className="text-center mb-5">Join our Internship Program</h1>
        <div
          className="formSection mx-5 border border-dark p-5"
          style={{ boxShadow: "0 -5px 10px #232424", borderRadius: "50px" }}
        >
          <Form onSubmit={handleSubmit} className="mx-5">
            <Row className="my-3">
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ankit Mishra"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your email..."
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formWhatsapp">
                <Form.Label>WhatsApp Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formCollegeName">
                <Form.Label>College Name</Form.Label>
                <Form.Control
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  placeholder="My Great College"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formSemester">
                <Form.Label>Semester</Form.Label>
                <Form.Select
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Semester</option>
                  {sems.map((sem) => (
                    <option key={sem} value={sem}>
                      {sem}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formSource">
                <Form.Label>Where did you hear about us?</Form.Label>
                <Form.Select
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Source</option>
                  {sources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formInternship">
                <Form.Label>Internship applied for?</Form.Label>
                <Form.Select
                  name="internship"
                  value={formData.internship}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Internship</option>
                  <option value="Full Stack Web Development">
                    Full Stack Web Development
                  </option>
                  <option value="Python Automation">Python Automation</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value=" Business Development">
                    {" "}
                    Business Development
                  </option>
                  <option value="Artificial Intelligence/Machine Learning">
                    Artificial Intelligence/Machine Learning
                  </option>
                  <option value="Data Anlyst">Data Anlyst</option>
                  <option value="Human Resources">Human Resources</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className="mt-5">
                <Form.Check
                  type="checkbox"
                  label="Are you available for next 6 months?"
                  name="availability6Months"
                  checked={formData.availability6Months}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Cook some strong Password...."
                  required
                />
              </Form.Group>
              <Form.Group as={Col} className="mt-5">
                <Form.Check
                  type="checkbox"
                  label="Are you interested in paid internship?"
                  name="paidInternship"
                  checked={formData.paidInternship}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Row>

            <div className="d-grid gap-2 col-6 mx-auto mb-3">
              <Button
                variant="primary"
                type="submit"
                className="btn"
                style={{ backgroundColor: "#00bbf0" }}
              >
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <div
        class="container-fluid"
        style={{
          background: `url(${wave})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "900px",
          width: "100%",
          marginTop: "0px",
        }}
      >
        <div class="position-relative h-100">
          <img
            src={lowerImage}
            class="position-absolute"
            style={{ left: "50%", transform: "translateX(-50%)", top: "380px" }}
            height="400px"
            alt=""
          />
          <h1
            class="text-white position-absolute text-center w-100"
            style={{ top: "320px" }}
          >
            Expectations from Interns
          </h1>
          <div class="position-absolute w-100" style={{ top: "820px" }}>
            <div class="d-flex flex-wrap justify-content-center">
              <div
                class="px-3 border border-1 border-dark rounded m-2"
                style={{ backgroundColor: "#00bbf0" }}
              >
                <p class="text-white">Available for next 6 months</p>
              </div>
              <div
                class="px-3 border border-1 border-dark rounded m-2"
                style={{ backgroundColor: "#00bbf0" }}
              >
                <p class="text-white">Available for 4 hours a day</p>
              </div>
              <div
                class="px-3 border border-1 border-dark rounded m-2"
                style={{ backgroundColor: "#00bbf0" }}
              >
                <p class="text-white">Available for 5 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
