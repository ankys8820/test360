import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section class="info_section layout_padding2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 info_col">
              <div class="info_contact">
                <h4>Address</h4>
                <div class="contact_link_box">
                  <i class="fa fa-map-marker p-2 mb-2" aria-hidden="true" >
                  <span style={{fontFamily:'sans-serif'}}>
                    &nbsp; Location : BLINC 360 , H-182 , sec 63 Noida-201301
                    </span>
                    
                  </i>

                  <i class="fa fa-phone mb-2 p-2" aria-hidden="true">
                  <span style={{fontFamily:'sans-serif'}}>
                    &nbsp; Call 7060372107
                    </span>
                  </i>

                  <i class="fa fa-envelope p-2" aria-hidden="true" >
                    <Link to="mailto:Contactus@blinc360.co.in" style={{fontFamily:'sans-serif'}}>
                      &nbsp;Contactus@blinc360.co.in
                    </Link>
                  </i>
                </div>
              </div>
              <div class="info_social">
                  <i class="fa fa-facebook px-2" aria-hidden="true"></i>
                  <i class="fa fa-twitter px-2" aria-hidden="true"></i>
                  <i class="fa fa-linkedin px-2" aria-hidden="true"></i>
                  <i class="fa fa-instagram px-2" aria-hidden="true"></i>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info_col">
              <div class="info_detail">
                <h4>Info</h4>
                <p>
                  We offer skill development sessions tailored to industry
                  trends. Our mission is to equip interns and co-founders with
                  the knowledge and skills needed to lead in their fields.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mx-auto info_col">
              <div class="info_link_box">
                <h4>Links</h4>
                <div class="info_links">
                  <Link class="active" to="/">
                    Home
                  </Link>
                  <Link class="" to="/about">
                    About
                  </Link>
                  <Link class="" to="/service">
                    Services
                  </Link>
                  <Link class="" to="/why">
                    Why Us
                  </Link>
                  <Link class="" to="/team">
                    Team
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="footer_section">
        <div class="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By &nbsp;
            <Link to="/">Blinc360</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
