import React from "react";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <div className="header_banner">
              <h1 className="des">
                Kerala's Leading Web
                <br />
                Design Company
              </h1>
              <p className="des_para">
                Global Web Designing Company That Provides Full-cycle Software
                Development Services, E-commerce & Mobile App Development
                Services.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
