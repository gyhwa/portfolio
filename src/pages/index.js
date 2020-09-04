import React, {useState, useEffect } from "react"
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

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
    <Container fluid>
      <Row>
        <div className="title">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1> The name is Gina </h1>
            <h3> Forever Student, Marketer, and more </h3>
          </Fade>
        </div>
      </Row>
    </Container>

  </Layout>)
}
