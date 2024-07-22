import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/startup.css';

const Startup = () => {
  return (
    <div id='startupWrapper'>
      <Helmet>
        <title>Startup Page</title>
        <meta name="description" content="This is the Startup page" />
      </Helmet>
      <div id="startup">
        <h1>We help <span className='highlighter'>Startups</span> grow</h1>
        <p id="headingCaption">
            We at Blinc 360, help Startups to achieve success
        </p>
        <div id="image">
            <img src="images/startup-bg.png" alt="" />
        </div>
      </div>

      <p id="headingStartup">
        Our Facilities
      </p>

      <section id="facilitySection">
        <div className="facility">
            <p className="facilityHeading">Physical Infrastructure</p>
            <div className="facilityBody">
                <div className="facilityCard">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <p className="facilityCardHeading">Office Space</p>
                    <p className="facilityCardBody">
                        Adequate and Flexible office space to accomodate multiple startups and interns.
                    </p>
                </div>
                <div className="facilityCard">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <p className="facilityCardHeading">Office Space</p>
                    <p className="facilityCardBody">
                        Adequate and Flexible office space to accomodate multiple startups and interns.
                    </p>
                </div>
                <div className="facilityCard">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <p className="facilityCardHeading">Office Space</p>
                    <p className="facilityCardBody">
                        Adequate and Flexible office space to accomodate multiple startups and interns.
                    </p>
                </div>
            </div>
        </div>
        <div className="facility">
            <p className="facilityHeading">Physical Infrastructure</p>
            <div className="facilityBody">
                <div className="facilityCard">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <p className="facilityCardHeading">Office Space</p>
                    <p className="facilityCardBody">
                        Adequate and Flexible office space to accomodate multiple startups and interns.
                    </p>
                </div>
                <div className="facilityCard">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <p className="facilityCardHeading">Office Space</p>
                    <p className="facilityCardBody">
                        Adequate and Flexible office space to accomodate multiple startups and interns.
                    </p>
                </div>
                <div className="facilityCard">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <p className="facilityCardHeading">Office Space</p>
                    <p className="facilityCardBody">
                        Adequate and Flexible office space to accomodate multiple startups and interns.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Startup;