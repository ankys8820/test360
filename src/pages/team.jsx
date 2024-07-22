import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <Helmet>
        <title>Teams Page</title>
        <meta name="description" content="This is the teams page" />
      </Helmet>
      <section className="team_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2 className="">
              Our <span> Team</span>
            </h2>
          </div>

          <div className="team_container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/team-1.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Joseph Brown</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/team-2.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Nancy White</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/team-3.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Earl Martinez</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/team-4.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Josephine Allard</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
