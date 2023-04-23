import React from "react";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Contact.css";
import Button from "react-bootstrap/Button";
const ContactUs = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <div>
              <div className="contact_sec">
                <br />
                <p>
                  We offer all kinds of IT services that ensure your success
                </p>
              </div>
              <div className="button_info">
                <Button variant="outline-info" style={{ fontSize: "20px" }}>
                  <img
                    width="30px"
                    src="https://img.icons8.com/ios/50/null/phone-disconnected.png"
                  />
                  Contact us
                </Button>
                <Button variant="outline-info" style={{ fontSize: "20px" }}>
                  <img
                    width="30px"
                    src="https://img.icons8.com/ios/50/null/speech-bubble--v1.png"
                  />
                  Let's Talk
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
