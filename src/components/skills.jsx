import React from "react";
import { cvData } from '../mock/data';
import { Container, Row, Col,Table  } from 'react-bootstrap';

export default function Skills() {
  const skills = cvData.skills;
  return (
       <Container fluid className="light-grey">
       <div className="pad">
          <Row>
            <Col>
              <h3>Skills</h3>
              <Table striped className="markdown">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
              {skills.map(skill => (
                <tr>
                  <td>{skill.name}</td>
                  <td>{skill.rating}</td>
                </tr>
              ))}
              </tbody>
            </Table>
            </Col>
          </Row>
        </div>
      </Container>
  )
}
