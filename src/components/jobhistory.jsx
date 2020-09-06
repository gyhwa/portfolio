import React from "react";
import { Link } from "gatsby";
import { cvData } from '../mock/data';
import { Container, Row, Col } from 'react-bootstrap';

export default function JobHistory() {
  const jobs = cvData.jobs;
  return (
       <Container fluid>
       <div className="pad">
          <Row>
            <Col>
              <h3>Experience</h3>
              {jobs.map(job => (
                <div>
                <h4>{job.name} </h4>
                {job.positions.map(position => (
                  <div>
                    <h5>{position.name}</h5>
                    <h6>{position.time}</h6>
                    <p>{position.responsibilities}</p>
                  </div>
                ))}
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
  )
}
