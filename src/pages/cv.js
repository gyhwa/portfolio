import React from "react"
import Layout from '../components/layout';
import { Container, Row, Col } from 'react-bootstrap';
import JobHistory from '../components/jobhistory';
import Skills from '../components/skills';
import SEO from '../components/seo';

export default function CV() {
  return(
  <Layout>
    <SEO title="Gina's CV" description="Digital Marketing centered CV for Gina" />
    <Container fluid className="mb-4 mt-4">
      <Row>
        <Col>
          <div className="pad">
            <h1>CV</h1>
          </div>
          </Col>
        </Row>
      </Container>

    <Container fluid className="light-grey">
      <Row>
        <Col>
        <div className="pad">
          <h3>Bio</h3>
          <p> Experienced digital media account manager with more than five years of experience. Experienced in creating quarterly and yearly marketing planning, working with large data sets and asset creation. </p>
          <p>Greatest strengths lie in my flexibility and learning potential. </p>
        </div>
        </Col>
      </Row>
    </Container>

    <JobHistory />

    <Skills />

    <Container fluid>
    <div className="pad">
      <Row>
        <Col>
            <h3>Education</h3>
            <h4> University of California - Berkeley </h4>
            <h6> May 2011 - May 2015 </h6>
            <p> Molecular Cell Biology, BA </p>
        </Col>
      </Row>
      </div>
    </Container>

    <Container fluid className="light-grey">
      <Row>
        <div className="pad">
          <Col>
            <h3>Hobbies</h3>
            <ul>
              <li>Games - Slay the Spire, Hearthstone, Overwatch</li>
              <li>Drawing</li>
              <li>Running</li>
            </ul>
          </Col>
        </div>
      </Row>
    </Container>
  </Layout>)
}
