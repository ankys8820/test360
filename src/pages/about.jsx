// src/pages/about.jsx

import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="This is the about page" />
      </Helmet>
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Magni quod blanditiis non minus sed aut voluptatum illum quisquam
              aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are Finexo</h3>
                <p classNameName="text-wrap">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <p>
                  Molestiae odio earum non qui cumque provident voluptates,
                  repellendus exercitationem, possimus at iste corrupti officiis
                  unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                  ab omnis quasi expedita.
                </p>
                <Link to="/about">Read more...</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
