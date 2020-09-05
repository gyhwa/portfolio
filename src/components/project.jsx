import React from "react";
import { StaticQuery } from "gatsby";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


export default function Project() {
  return (
    <StaticQuery
      query={graphql`
        query project {
          allMdx {
            edges {
              node {
                id
                excerpt
                frontmatter {
                  title
                  featuredImage
                  summary
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Container>
          <Container>
            <Row className="mb-4 mt-4">
              <Col>
              <h1> Here is what I have been up to: </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row xs={1} md={2}>
              {data.allMdx.edges.map(({ node: post }) => (
                <Col className="mb-2">
                  <Card>
                    <Card.Img variant="top" src={post.frontmatter.featuredImage} />
                    <Card.Body>
                      <Card.Title>{post.frontmatter.title}</Card.Title>
                      <Card.Text>
                        {post.frontmatter.summary}
                      </Card.Text>
                      <Button variant="primary" href={post.fields.slug}>Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              // key={post.id}
              ))}
          </Row>
        </Container>
      </Container>
      )}
    />
  )
}
