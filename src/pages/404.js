import React from "react"
import Layout from '../components/layout';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../components/project';


export default function Cv() {
  return (
    <Layout>
      <Container fluid className="light-grey">
      <div className="hero">
        <Row>
          <Col>
            <h1 className="large">404 </h1>
            <h3>Check these out instead:</h3>
          </Col>
        </Row>
        </div>
      </Container>
      <Project />
    </Layout>
  )
}
