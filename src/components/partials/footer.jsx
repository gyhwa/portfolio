import React from "react";
import { Link } from "gatsby";
import { heroData } from '../../mock/data';
import { Container, Row } from 'react-bootstrap';

export default function Footer() {
  const links = heroData.links;

  return (
       <Container fluid className="footer">
        <Row>
          <div className="col-12 col-md-8">
            <h6> <Link to="/">{heroData.title} </Link></h6>
          </div>
          <div className="col-12 col-md-4">
            <p> I live in the footer </p>
          </div>
        </Row>
      </Container>
  )
}
