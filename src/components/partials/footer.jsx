import React from "react";
import { Link } from "gatsby";
import { footerData } from '../../mock/data';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const socials = footerData.socials;
  const year = new Date().getFullYear();
  return (
       <Container fluid className="footer">
        <Row>
          <Col>
            <p> {footerData.title} ©{year}</p>
          </Col>
          <Col md="auto">
          <ul className="list-unstyled list-inline text-center">
          {socials.map(social => (
            <li className="list-inline-item">
               <a href = {social.link}>
                {social.name}
               </a>
            </li>
          ))}
          </ul>
          </Col>
        </Row>
      </Container>
  )
}
