import React from "react";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Services.css";

const Services = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <div className="serv">
              <center>
                <br />
                <br />
                <p>SERVICES WE DELIVERED</p>
              </center>
              <center>
                <br />
                <h1>
                  Preparing for your success, we provide truly prominent IT
                  solutions.
                </h1>
                <br />
                <br />
                <div className="serv_details">
                  <div className="wd">
                    <img src="https://woxro.com/public/assets/png/services/webdesigning.png" />
                    <h6>Web Designing</h6>
                    <p>
                      We create impressive interfaces. Usability + user
                      experience are created based on a study of preferences and
                      user behavior, using the latest web design trends, our
                      experience, and achievements.
                    </p>
                  </div>

                  <div className="wa">
                    <img src="https://woxro.com/public/assets/png/services/webapplication.png" />
                    <h6>Web Application</h6>
                    <p>
                      We have completed projects in full-cycle web applications
                      including CRM, HRM, and project management solutions. Look
                      no further if you are in search of a professional partner
                      who can develop stunning web applications.
                    </p>
                  </div>

                  <div className="md">
                    <img src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png" />
                    <h6>Mobile App Development</h6>
                    <p>
                      We develop high-quality and effective applications for
                      your business. Our expertise and knowledge help us create
                      reliable mobile applications for iOS and Android and
                      cross-platform solutions.
                    </p>
                  </div>

                  <div className="ed">
                    <img src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png" />
                    <h6>Ecommerce Development</h6>
                    <p>
                      For some of you, our involvement as an eCommerce
                      development and consulting partner will mean a powerful
                      business launch with the right technology stack. For
                      others - a possibility to give their business a fresh
                      start.
                    </p>
                  </div>

                  <div className="dm">
                    <img src="https://woxro.com/public/assets/png/services/digitalmarketing.png" />
                    <h6>Digital Marketing</h6>
                    <p>
                      We bring together expertise in digital marketing and
                      sustainability to design and implement ideas in branding.
                      We also bring brand purpose to life by communicating great
                      stories. Now Maximize your online visibility.
                    </p>
                  </div>

                  <div className="gd">
                    <img src="https://woxro.com/public/assets/png/services/graphic.png" />
                    <h6>Graphic Designing</h6>
                    <p>
                      For some of you, our involvement as an eCommerce
                      development and consulting partner will mean a powerful
                      business launch with the right technology stack. For
                      others - a possibility to give their business a fresh
                      start.
                    </p>
                  </div>
                </div>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
