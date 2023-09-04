import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SPI from "./SPI";
import UOH from "./UOH";
import Particle from "../Particle";


function Teaching() {
  return (
    <Container fluid className="project-section">
      <Container>

      <Row style={{ justifyContent: "center"}}>
        <Col md={4} className="project-card">
          <h3 className="Services-heading">
            <strong>Sydney Polytechnic Institute</strong>
          </h3>
          <SPI />
        </Col>
        <Col md={4} className="project-card">
          <h3 className="Services-heading">
            <strong>University of Hail</strong>
          </h3>
          <UOH />
        </Col>              
      </Row>


      </Container>
    </Container>
  );
}

export default Teaching;
