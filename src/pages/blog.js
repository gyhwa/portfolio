import React, {useState, useEffect } from "react"
import Layout from '../components/layout';
import { Container, Row, Col } from 'react-bootstrap';
import Blog from '../components/blog';

export default function Home() {


  return(
  <Layout>
    <Container fluid>
      <div className="pad">
        <Row>
          <Col>
            <h1> Blog </h1>
          </Col>
        </Row>
      </div>
    </Container>
    <Blog />



  </Layout>)
}
