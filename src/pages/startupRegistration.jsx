import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import axios from 'axios';


export default function StartupRegistrationForm() {
        const [formData, setFormData] = useState({
            username : '',
            name: '',
            companyName: '',
            regPhoneNo: '',
            workEmail: '',
            companyCategory: '',
            companySize: '',
            password : '',
            facilities: {
                physicalAndVirtualInfrastructure: {
                    officeSpace: '',
                    noOfMeetingRooms : '',
                    itInfrastructure: {
                        computers : '',
                        printers : '',
                        others : '',
                    },
                    utilities : [], //Heating Cooling Maintenance 
                    remoteWorkTools: false,
                },
                HR: [], // Experienced mentors, Administrative staff,  HR professionals, Legal and Finance staff
                financialResources: false,
                supportServices: [], //Business development ,  Marketing and PR
                HRmanagement : [], //Recruitment and onboarding , Performance tracking , Compensation and benefits
                operationalToolsAndManagement: [], // Project management tools ,  Communication tools, HR management system
                insurance: false,
            },
        });

        
        const handleSubmit = async (event) => {
          event.preventDefault();
          console.log(formData);
          try {
            // const response = await axios.post('https://blinc360-backend.onrender.com/startup/register',formData);
            const response = await axios.post('http://localhost:4080/startup/register',formData);
            if(response.status===200){
                alert('Startup Registration Successful!');
                const token = response.data.token;
                localStorage.setItem('token',token);
            }else {
                alert('Unexpected status code: ' + response.status);
            }
          } catch (error) {
            console.error('Error in Registering:', error);
            alert(error.response.data);
            if (error.response) {
                alert('Error from server: ' + error.response.status + ' - ' + error.response.data);
            } else if (error.request) {
                alert('No response from the server');
            } else {
                alert('Error setting up the request: ' + error.message);
            }
          }
        };

        const handleChange = (event) => {
            
            const { name, value, type } = event.target;
            setFormData((prevState) => ({
              ...prevState,
              [name]: type === 'checkbox' ? event.target.checked : value,
            }));
        };

        const handleFinancialAndInsuranceChange = (event) => {
            const { name, checked } = event.target;
            const financialOrInsurance = name === 'financialResources' ? 'financialResources' : 'insurance'; 
          
            setFormData((prevData) => ({
              ...prevData,
              facilities: {
                ...prevData.facilities,
                [financialOrInsurance]: checked, 
              },
            }));
          };
          

      

          const handlePhysicalInfrastructureChange = (event) => {
            const { name, type, checked } = event.target; 

            let value;
            if (type === 'checkbox') {
              value = checked; 
            } else {
              value = event.target.value; 
            }
            setFormData((prevData) => ({
              ...prevData,
              facilities: {
                ...prevData.facilities,
                physicalAndVirtualInfrastructure: {
                  ...prevData.facilities.physicalAndVirtualInfrastructure,
                  [name]: value,
                },
              },
            }));
          };
          
          
          
          const handleITInfrastructureChange = (event) => {
            const { name, value } = event.target;
            if (!formData.facilities?.physicalAndVirtualInfrastructure?.itInfrastructure) {
              return;
            }
            setFormData((prevData) => ({
              ...prevData,
              facilities: {
                ...prevData.facilities,
                physicalAndVirtualInfrastructure: {
                  ...prevData.facilities.physicalAndVirtualInfrastructure,
                  itInfrastructure: {
                    
                    ...prevData.facilities.physicalAndVirtualInfrastructure.itInfrastructure,
                    [name]: value,
                  },
                },
              },
            }));
          };
          

        const handleUtilitiesChange = (event) => {
            const { name, checked } = event.target;
            setFormData((prevData) => ({
              ...prevData,
              facilities: {
                ...prevData.facilities,
                physicalAndVirtualInfrastructure: {
                  ...prevData.facilities.physicalAndVirtualInfrastructure,
                  utilities: checked
                    ? [...prevData.facilities.physicalAndVirtualInfrastructure.utilities, name] 
                    : prevData.facilities.physicalAndVirtualInfrastructure.utilities.filter(
                        (utility) => utility !== name 
                      ),
                },
              },
            }));
          };
          
      
        const handleHRChange = (event) => {
            const { name, checked } = event.target;
            
            setFormData((prevData) => ({
              ...prevData,
              facilities: {
                ...prevData.facilities,
                HR: checked
                  ? [...prevData.facilities.HR, name] 
                  : prevData.facilities.HR.filter((item) => item !== name), 
              },
            }));
          };
          
        
          const handleHrManagementChange = (event) => {
            const { name, checked } = event.target;
            
            setFormData((prevData) => ({
              ...prevData,
              facilities: {
                ...prevData.facilities,
                HRmanagement: checked
                  ? [...prevData.facilities.HRmanagement, name] 
                  : prevData.facilities.HRmanagement.filter((item) => item !== name), 
              },
            }));
          };
          
        
          const handleSupportServicesChange = (event) => {
            const { name, checked } = event.target;
           
            setFormData((prevData) => ({
              ...prevData,
              facilities: {
                ...prevData.facilities,
                supportServices: checked
                  ? [...prevData.facilities.supportServices, name] 
                  : prevData.facilities.supportServices.filter((item) => item !== name), 
              },
            }));
          };
          

        
          const handleOperationalToolsAndManagementChange = (event) => {
            const { name, checked } = event.target;
           
            setFormData((prevData) => ({
              ...prevData,
              facilities: {
                ...prevData.facilities,
                operationalToolsAndManagement: checked
                  ? [...prevData.facilities.operationalToolsAndManagement, name] 
                  : prevData.facilities.operationalToolsAndManagement.filter((item) => item !== name), 
              },
            }));
          };
          
        return (
            <>
            <div style={{ background: `linear-gradient(to bottom, #3042e3 0%,  #3042e3 50%, white 50% , white 100%)`, height: '250vh' }}>
            <h1 className='text-center text-white pt-3'>Ready to Join Us</h1>
            <Row className=' d-flex justify-content-center' >
              <Col className='col-6 bg-white border border-black my-5 p-3'>
              <Helmet>
                <title>Blinc360 Start-Up Registration Form</title>
                <meta name="description" content="Blinc360 Start-Up Registration Form" />
              </Helmet>
    
              <Form onSubmit={handleSubmit} className='mx-44'>
                <Row className="my-3">
                  <Form.Group as={Col} controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name..." />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter the Company Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formUsername">
                    <Form.Label>Company UserName</Form.Label>
                    <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter a unique Company username" />
                  </Form.Group>
                </Row>
                
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formRegisteredPhoneNo">
                    <Form.Label>Registered Phone Number</Form.Label>
                    <Form.Control type="number" name="regPhoneNo" value={formData.regPhoneNo} onChange={handleChange} placeholder="6969696969" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formWorkEmail">
                    <Form.Label>Work Email</Form.Label>
                    <Form.Control type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} placeholder="example@abc.com" />
                  </Form.Group>
                </Row>
                
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formCompanyCategory">
                    <Form.Label>Enter Company Category</Form.Label>
                    <Form.Select name="companyCategory" value={formData.companyCategory} onChange={handleChange}>
                        <option value="">Select Company Category</option>
                        <option value="it">IT</option>
                        <option value="sales">Sales</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formCompanySize">
                    <Form.Label>Enter Size of Company</Form.Label>
                    <Form.Control type="number" name="companySize" value={formData.companySize} onChange={handleChange} placeholder="10000" />
                  </Form.Group>
                </Row>

                
                
                <h3 className='text-center'>Facilities</h3>

                <br /><br /><br />

                <h5 className='text-center'>Physical And Virtual Infrastructure</h5>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formOfficeSpace">
                    <Form.Label>Enter Office Space</Form.Label>
                    <Form.Control type="number" name="officeSpace" value={formData.facilities.physicalAndVirtualInfrastructure.officeSpace} onChange={handlePhysicalInfrastructureChange} placeholder="10000" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formNumberOfMeetingRooms">
                    <Form.Label>Enter Number of meeting rooms...</Form.Label>
                    <Form.Control type="number" name="noOfMeetingRooms" value={formData.facilities.physicalAndVirtualInfrastructure.noOfMeetingRooms} onChange={handlePhysicalInfrastructureChange} placeholder="10000" />
                  </Form.Group>
                </Row>


                <br />

                <h6 className='text-center'>IT Infrastructure</h6>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formComputers">
                    <Form.Label>Enter Computers</Form.Label>
                    <Form.Control type="number" name="computers" value={formData.facilities.physicalAndVirtualInfrastructure.itInfrastructure.computers} onChange={handleITInfrastructureChange} placeholder="10000" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formPrinters">
                    <Form.Label>Enter Printers</Form.Label>
                    <Form.Control type="number" name="printers" value={formData.facilities.physicalAndVirtualInfrastructure.itInfrastructure.printers} onChange={handleITInfrastructureChange} placeholder="10000" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="others">
                    <Form.Label>Others</Form.Label>
                    <Form.Control type="text" name="others" value={formData.facilities.physicalAndVirtualInfrastructure.itInfrastructure.others} onChange={handleITInfrastructureChange} placeholder="others..." />
                  </Form.Group>
                </Row>

                

                <hr /><br />

                <h6 className='text-center'>Utilities</h6>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Heating"
                      name="heating"
                      onChange={handleUtilitiesChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Cooling"
                      name="cooling"
                      onChange={handleUtilitiesChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Maintenance"
                      name="maintenance"
                      onChange={handleUtilitiesChange}
                    />
                  </Form.Group>
                </Row>

                
                <hr /><br />
                <Row className="mb-3 col-1">
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="RemoteWorkTools"
                      name="remoteWorkTools"
                      selected={formData.facilities.physicalAndVirtualInfrastructure.remoteWorkTools}
                      onChange={handlePhysicalInfrastructureChange}
                    />
                  </Form.Group>
                </Row>

                <hr /><br />

                <h5 className='text-center'>HR</h5>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Experienced Mentors"
                      name="experiencedMentors"
                      onChange={handleHRChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Administrative Staff"
                      name="administrativeStaff"
                      onChange={handleHRChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="HR Professionals"
                      name="HrProfessionals"
                      onChange={handleHRChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Legal and Finance staff"
                      name="legalAndFinanceStaff"
                      onChange={handleHRChange}
                    />
                  </Form.Group>
                </Row>


                <Row className="mb-3">
                  
                </Row>


                <hr /><br />

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="FinancialResources"
                      name="financialResources"
                      selected={formData.financialResources}
                      onChange={handleFinancialAndInsuranceChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Insurance"
                      name="insurance"
                      selected = {formData.facilities.insurance}
                      onChange={handleFinancialAndInsuranceChange}
                    />
                  </Form.Group>
                </Row>

                <hr /><br />

                <h5 className='text-center'>Support Services</h5>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Business Development"
                      name="businessDevelopment"
                      onChange={handleSupportServicesChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Marketing and PR"
                      name="marketingAndPR"
                      onChange={handleSupportServicesChange}
                    />
                  </Form.Group>
                </Row>

             

                <hr /><br />

                <h5 className='text-center'>HR Management</h5>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Recruitment and onboarding"
                      name="recruitmentAndOnboarding"
                      onChange={handleHrManagementChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Performance tracking"
                      name="performanceTracking"
                      onChange={handleHrManagementChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Compensation and benefits"
                      name="compensationAndBenefits"
                      onChange={handleHrManagementChange}
                    />
                  </Form.Group>
                </Row>

              

                <hr /><br />

                <h5 className='text-center'>Operational Tools and Management</h5>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Project management tools"
                      name="projectManagementTools"
                      onChange={handleOperationalToolsAndManagementChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="Communication Tools"
                      name="communicationTools"
                      onChange={handleOperationalToolsAndManagementChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="checkbox"
                      label="HR management system"
                      name="hrManagementSystem"
                      onChange={handleOperationalToolsAndManagementChange}
                    />
                  </Form.Group>
                </Row>

                <br /><br /><hr />

                <Row className="my-3">
                  <Form.Group as={Col} controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Cook some strong password..." />
                  </Form.Group>
                </Row>





               
                <div className='d-grid gap-2 col-12 mx-auto mb-3'>
                <Button variant="primary" type="submit" className='btn btn-dark'>
                  Register
                </Button>
                </div>
               
              </Form>
              </Col>
              </Row>
              </div>
            </>
          );
          
}