// src/pages/index.jsx

import React from 'react';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
      </Helmet>
      
      <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Innovate <br/>
                      Mentor <br/>
                      Grow
                    </h1>
                    <p>
                      Blinc 360 is your partner in innovation, offering incubation services for startups and interns. We provide mentorship, training, and seed funding to help you succeed.
                    </p>
                    <div class="btn-box">
                      <a href="images/slider-img.png" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Empowering <br/>
                      Startups and Interns
                    </h1>
                    <p>
                      At Blinc 360, we provide a nurturing environment for startups and interns. Our goal is to support your journey with comprehensive training and mentorship.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Building <br/>
                      Future Leaders
                    </h1>
                    <p>
                      We offer skill development sessions tailored to industry trends. Our mission is to equip interns and co-founders with the knowledge and skills needed to lead in their fields.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>
    </section>
    <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            We provide a range of services to support startups and interns.
          </p>
        </div>
        <div class="row">
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="images/s1.png" alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  Startup Incubation
                </h5>
                <p>
                  A comprehensive incubation program that provides startups with mentorship, training, and seed funding.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="images/s2.png" alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  Intern Training
                </h5>
                <p>
                  Industry-specific training sessions to develop the skills of interns and prepare them for successful careers.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="images/s3.png" alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  Mentorship Programs
                </h5>
                <p>
                  Personalized mentorship for co-founders and interns to guide them through their professional journey.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <a href="">
            View All
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="about_section layout_padding">
    <div class="container  ">
      <div class="heading_container heading_center">
        <h2>
          About <span>Us</span>
        </h2>
        <p>
          Blinc 360 is an incubator for startups and interns, providing the resources and guidance needed to foster innovation and growth.
        </p>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
            <img src="images/about-img.png" alt=""/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <p>
              Our mission is to support startups and interns by offering a nurturing environment that encourages collaboration and learning. We provide mentorship, training, and seed funding to help you reach your full potential.
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Index;
