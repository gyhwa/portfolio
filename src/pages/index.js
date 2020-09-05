import React, {useState, useEffect } from "react"
import Layout from '../components/layout';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Project from '../components/project';

export default function Home() {


  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  if (window.innerWidth > 769) {
    setIsDesktop(true);
    setIsMobile(false);
  } else {
    setIsMobile(true);
    setIsDesktop(false);
  }
}, []);

  return(
  <Layout>
    <Container fluid className="light-grey">
      <Row>
        <Col>
        <div className="hero">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1> The name is Gina </h1>
            <h3> Forever Student, Marketer, and more </h3>
          </Fade>
        </div>
        </Col>
      </Row>
    </Container>
    <Project />



  </Layout>)
}
