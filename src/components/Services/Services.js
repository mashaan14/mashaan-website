import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JournalReviewer from "./JournalReviewer";
import Conference from "./Conference";
import Consultation from "./Consultation";
import Particle from "../Particle";


function Services() {
  return (
    <Container fluid className="project-section">
      <Container>

      <Row style={{ justifyContent: "center"}}>
        <Col md={4} className="project-card">
          <h2 className="Services-heading">
            <strong>Journal Reviewer</strong>
          </h2>
          <JournalReviewer />
        </Col>
        <Col md={4} className="project-card">
          <h2 className="Services-heading">
            <strong>Conference Organization</strong>
          </h2>
          <Conference />
        </Col>
        <Col md={4} className="project-card">
          <h2 className="Services-heading">
            <strong>Consultation Services</strong>
          </h2>
          <Consultation />
        </Col>                
      </Row>


      </Container>
    </Container>
  );
}

export default Services;
