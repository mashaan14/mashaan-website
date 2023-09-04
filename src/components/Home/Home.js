import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar.png";
import Particle from "../Particle";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid>
        
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Mashaan Alshammari</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row md={8} className="home-about-description">
            <p className="home-about-body">
            I currently work as a machine learning researcher. My research interests lie broadly in graph clustering and deep learning. I also do some artificial intelligence consultations for organizations in Saudi Arabia.
            <br /><br />
            I started my career back in 2010 as a system engineer 👨‍🔧 at <a href="https://www.sabic.com/en"><b>SABIC</b></a>. In 2013, I decided to pursue my career in academia. I got my M.S. degree in Computer Science from <a href="http://www.kfupm.edu.sa/"><b>King Fahd University of Petroleum and Minerals (KFUPM) 👨‍🎓</b></a> in 2016, and the Ph.D. degree in Computer Science from <a href="https://www.sydney.edu.au/"><b>University of Sydney 👨‍🎓</b></a> in 2021.
            </p>
        </Row>          
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:mashaan.awad@outlook.com"
                  className="icon-colour  home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <AiOutlineMail />
                </a>
              </li>              
              <li className="social-icons">
                <a
                  href="https://github.com/mashaan14"
                  className="icon-colour  home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/mashaan"
                  className="icon-colour  home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://youtube.com/@mashaan14"
                  className="icon-colour home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>          
        </Container>
      </Container>
    </section>
  );
}

export default Home;
