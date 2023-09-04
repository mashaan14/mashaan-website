import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Experiencecard from "./ExperienceCard";
import freelance from "../../Assets/freelance.png";
import UOH from "../../Assets/UOH.png";
import SPI from "../../Assets/SPI.png";
import SABIC from "../../Assets/SABIC.png";
import ARAMCO from "../../Assets/ARAMCO.png";

function Experience() {
  return (
    <Container className="Experience-section">
      <Container>
      <Experiencecard
              imgPath={SPI}
              title="Curriculum Development Collaborator"
              location="Sydney Polytechnic Institute, Sydney, Australia"
              description="I was invited to participate in designing a new undergraduate program offered by SPI. My tasks include writing an outline and a planner documents for courses as per the Australian Qualifications Framework (AQF)."
              time="2023 - present"
      />
      <br/> 
      <Experiencecard
              imgPath={freelance}
              title="Machine learning researcher"
              location="Freelance, Riyadh, Saudi Arabia"
              description="Working on machine learning research with researchers from the University of Sydney and KFUPM. Our research focuses on Graph Convolutional Networks (GCNs) and Unsupervised Domain Adaptation (UDA). I Designed the experiments using python ML libraries (scikit-learn, PyTorch, seaborn, and others)."
              time="2022 - present"
      />
      <br/>        
      <Experiencecard
              imgPath={UOH}
              title="Assistant professor"
              location="University of Hail, Hail, Saudi Arabia"
              description="Participated in lecturing, laboratory teaching, and curriculum design for multiple undergrad and grad computer science courses."
              time="2021 - 2022"
      />
      <br/>        
      <Experiencecard
              imgPath={SPI}
              title="Curriculum Development Collaborator"
              location="Sydney Polytechnic Institute, Sydney, Australia"
              description="SPI invited me to participate in curriculum development for a Master of Data Science. I designed lecture slides, assignments, practical sessions, and exams for courses like: (Mathematics for data science) and (Artificial Intelligence and Innovation)."
              time="2020 - 2021"
      />
      <br/>        
      <Experiencecard
              imgPath={SABIC}
              title="System Engineer"
              location="SABIC, Jubail, Saudi Arabia"
              description="I was in charge of securing and maintaining the plant network components. We completed an upgraded for the obsolete network components during online operation."
              time="2010 - 2012"
      />
      <br/>
      <Experiencecard
              imgPath={ARAMCO}
              title="Intern"
              location="Saudi Aramco, Dhahran, Saudi Arabia"
              description="I completed an internship at ARAMCO's EXPEC ARC (Advanced Research Center). I developed a GUI interface that populates the simulator output, large text files, into a database for easier data access."
              time="2009 - 2010"
      />
      </Container>
    </Container>
  );
}

export default Experience;
