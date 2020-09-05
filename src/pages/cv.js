import React from "react"
import Layout from '../components/layout';
import { Container, Row, Col } from 'react-bootstrap';

export default function CV() {
  return(
  <Layout>
    <Container fluid className="mb-4 mt-4">
      <Row>
        <Col>
          <div className="pad">
            <h1>About Me + CV:</h1>
          </div>
          </Col>
        </Row>
      </Container>

    <Container fluid className="light-grey">
      <Row>
        <Col>
        <div className="pad">
          <h3>Bio</h3>
          <p> Lorem Ipsum </p>
        </div>
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row>
        <Col>
          <div className="pad">
            <h3>Job History</h3>
            <p> Lorem Ipsum </p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid className="light-grey">
    <div className="pad">
      <Row>
        <Col>
            <h3>Skills</h3>
            <p> Lorem Ipsum </p>
        </Col>
      </Row>
      </div>
    </Container>
    <Container fluid>
      <Row>
        <div className="pad">
          <Col>
            <h3>Hobbies</h3>
            <p> Lorem Ipsum </p>
          </Col>
        </div>
      </Row>
    </Container>
  </Layout>)
}
