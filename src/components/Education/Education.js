import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
import SABIC from "../../Assets/SABIC.png";

function Education() {
  return (
    <Container className="Experience-section">
      <Container>
        <EducationCard />
      </Container>
    </Container>
  );
}

export default Education;
