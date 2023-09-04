import React from "react";
import Grid from '@mui/material/Grid';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ResearchCards from "./ResearchCards";
import {
  SiOrcid,
  SiGooglescholar,
  SiScopus,
  SiPublons,  
} from "react-icons/si";

function Home() {
  return (
    <section>
      <Container fluid>
        <Container className="research-content">

        <Grid container spacing={2}
              alignItems="center"
              justifyContent="center">
          <Grid item xs={2}>
            <p>
              <a
                href="https://orcid.org/0000-0002-7864-0011"
                className="research-icons"
                target="_blank" 
                rel="noopener noreferrer"                  
              >
                <SiOrcid className="research-icons"/>
              </a>
            </p>
          </Grid>
          <Grid item xs={2}>
            <p>
              <a
                href="https://scholar.google.com/citations?user=V3YkUVgAAAAJ&hl=en"
                className="research-icons"
                target="_blank" 
                rel="noopener noreferrer"                  
              >
                <SiGooglescholar className="research-icons"/>
              </a>
            </p>
          </Grid>
          <Grid item xs={2}>
            <p>
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=55827556900"
                className="research-icons"
                target="_blank" 
                rel="noopener noreferrer"                  
              >
                <SiScopus className="research-icons"/>
              </a>
            </p>
          </Grid>
          <Grid item xs={2}>
            <p>
              <a
                href="https://www.webofscience.com/wos/author/rid/AAQ-7726-2021"
                className="research-icons"
                target="_blank" 
                rel="noopener noreferrer"                  
              >
                <SiPublons className="research-icons"/>
              </a>
            </p>
          </Grid>                              
        </Grid>

        <br></br> <br></br>

        <h1 className="project-heading">
          <strong>Recent Preprints</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ResearchCards 
              author = "M. Alshammari, J. Stavrakakis, A. F. Ahmed and M. Takatsuka"
              title = "Graph Construction using Principal Axis Trees for Simple Graph Convolution"
              journal = "arXiv:2302.12000, 2023."
              Button1Text = "arXiv preprint"
              Button1Link = "https://doi.org/10.48550/arXiv.2302.12000"
              Button2Text = "GitHub"
              Button2Link = "https://github.com/mashaan14/PAtree-SGC"
            />
          </Col>
        </Row>

        <br></br> <br></br>

        <h1 className="project-heading">
          <strong>Journal Articles</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari, J. Stavrakakis, A. F. Ahmed and M. Takatsuka"
                title = "Random Projection Forest Initialization for Graph Convolutional Networks"
                journal = "MethodsX, Volume 11, 2023"
                Button1Text = "Open access paper"
                Button1Link = "https://www.sciencedirect.com/science/article/pii/S2215016123003126"
                Button2Text = "GitHub"
                Button2Link = "https://github.com/mashaan14/RPTree-GCN"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari, J. Stavrakakis, A. F. Ahmed and M. Takatsuka"
                title = "Random Projection Tree Similarity Metric for SpectralNet"
                journal = "Array, Volume 15, 2023"
                Button1Text = "Open access paper"
                Button1Link = "https://doi.org/10.1016/j.array.2022.100274"
                Button2Text = "GitHub"
                Button2Link = "https://github.com/mashaan14/RPTree-SpectralNet"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari, J. Stavrakakis, A. F. Ahmed and M. Takatsuka"
                title = "The Effect of Points Dispersion on the k-nn Search in Random Projection Forests"
                journal = "IEEE Access, Volume 10, 2022"
                Button1Text = "Open access paper"
                Button1Link = "https://doi.org/10.1109/ACCESS.2022.3195488"
                Button2Text = "GitHub"
                Button2Link = "https://github.com/mashaan14/RPTree"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari, J. Stavrakakis and M. Takatsuka"
                title = "A Parameter-Free Graph Reduction for Spectral Clustering and Spectralnet"
                journal = "Array, Volume 15, 2022"
                Button1Text = "Open access paper"
                Button1Link = "https://doi.org/10.1016/j.array.2022.100192"
                Button2Text = "GitHub"
                Button2Link = "https://github.com/mashaan14/SC-parameter-free"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari and M. Alshayeb"
                title = "The Effect of the Dataset Size on the Accuracy of Software Defect Prediction Models: An Empirical Study"
                journal = "Inteligencia Artificial, 2021"
                Button1Text = "Open access paper"
                Button1Link = "http://www.journal.iberamia.org/index.php/intartif/article/view/638"
              />
            </Col>     
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari, J. Stavrakakis and M. Takatsuka"
                title = "Refining a k-nearest neighbor graph for a computationally efficient spectral clustering"
                journal = "Pattern Recognition, Volume 114, 2021"
                Button1Text = "Paper"
                Button1Link = "https://doi.org/10.1016/j.patcog.2021.107869"
                Button2Text = "arXiv preprint"
                Button2Link = "https://doi.org/10.48550/arXiv.2302.11296"
                Button3Text = "GitHub"
                Button3Link = "https://github.com/mashaan14/Spectral-Clustering"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari and M. Takatsuka"
                title = "Approximate spectral clustering density-based similarity for noisy datasets"
                journal = "Pattern Recognition Letters, Volume 128, 2019"
                Button1Text = "Paper"
                Button1Link = "https://doi.org/10.1016/j.patrec.2019.08.020"
                Button2Text = "arXiv preprint"
                Button2Link = "https://doi.org/10.48550/arXiv.2302.11298"
                Button3Text = "GitHub"
                Button3Link = "https://github.com/mashaan14/ASC-noisy"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari and M. Takatsuka"
                title = "Approximate spectral clustering with eigenvector selection and self-tuned k"
                journal = "Pattern Recognition Letters, Volume 122, 2019"
                Button1Text = "Paper"
                Button1Link = "https://doi.org/10.1016/j.patrec.2019.02.006"
                Button2Text = "arXiv preprint"
                Button2Link = "https://doi.org/10.48550/arXiv.2302.11297"
                Button3Text = "GitHub"
                Button3Link = "https://github.com/mashaan14/ASC-self-tuned-k"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "U. Baroudi, M. Bin-Yahya, M. Alshammari, U. Yaqoub"
                title = "Ticket-Based QoS Routing Optimization using Genetic Algorithm for WSN Applications in Smart Grid"
                journal = "Journal of Ambient Intelligence and Humanized Computing, 2018."
                Button1Text = "Paper"
                Button1Link = "https://link.springer.com/article/10.1007%2Fs12652-018-0906-0"
                Button2Text = "GitHub"
                Button2Link = "https://github.com/mashaan14/GA-WSN-SmartGrid"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "E. S. M. El-Alfy, M. Alshammari"
                title = "Towards scalable rough set based attribute subset selection for intrusion detection using parallel genetic algorithm in MapReduce"
                journal = "Simulation Modelling Practice and Theory, Volume 64, 2016"
                Button1Text = "Paper"
                Button1Link = "https://doi.org/10.1016/j.simpat.2016.01.010"
              />
            </Col>            
        </Row>


        <br></br> <br></br>

        <h1 className="project-heading">
          <strong>Conference Papers</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ResearchCards 
              author = "M. Alshammari and M. Takatsuka"
              title = "Approximate Spectral Clustering using Topology Preserving Methods and Local Scaling"
              journal = "The 25th International Conference on Neural Information Processing (ICONIP 2018), 2018."
              Button1Text = "Paper"
              Button1Link = "https://link.springer.com/chapter/10.1007%2F978-3-030-04212-7_10"
            />
          </Col>
          <Col md={4} className="project-card">
            <ResearchCards 
              author = "M. Alshammari, E. S. M. El-Alfy"
              title = "MapReduce implementation for minimum reduct using parallel genetic algorithm"
              journal = "6th International Conference on Information and Communication Systems (ICICS), 2015"
              Button1Text = "Paper"
              Button1Link = "https://ieeexplore.ieee.org/document/7103194/?arnumber=7103194&newsearch=true&queryText=mashaan%20alshammari"
            />
          </Col>            
        </Row>

        <br></br> <br></br>


          <h1 className="project-heading">
            <strong>Technical Reports</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari and M. Takatsuka"
                title = "Image Segmentation via Adaptive Smoothing Controlled by Orthogonal Projection"
                journal = "Technical Report 978-1-74210-418-8, School of Computer Science, University of Sydney, 2017."
                Button1Text = "Report"
                Button1Link = "https://catalogue.nla.gov.au/catalog/7422748"
              />
            </Col>
            <Col md={4} className="project-card">
              <ResearchCards 
                author = "M. Alshammari and M. Takatsuka"
                title = "Image Segmentation via Self-Organizing Map Approximate and Spectral Clustering"
                journal = "Technical Report 978-1-74210-420-1, School of Computer Science, University of Sydney, 2017."
                Button1Text = "Report"
                Button1Link = "https://catalogue.nla.gov.au/catalog/7465152"
              />
            </Col>
          </Row>          
        
        </Container>
      </Container>
    </section>
  );
}

export default Home;
