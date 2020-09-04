import React from "react"
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';


export default function CV() {
  return (
    <Layout>
      <Container>
        <Row>
          <div className="mb-4 mt-4">
            <h1>About</h1>
            <h3>Bio</h3>
            <p> Lorem Ipsum </p>
            <h3>Job History</h3>
            <p> Lorem Ipsum </p>
            <h3>Skills</h3>
            <p> Lorem Ipsum </p>
            <h3>Hobbies</h3>
            <p> Lorem Ipsum </p>
          </div>
        </Row>
      </Container>
    </Layout>
  )
}
