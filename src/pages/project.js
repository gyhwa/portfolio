import React from "react";
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import { Container, Row, Card, Button } from 'react-bootstrap';


export default function Project({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <Container>
        <Row className="mb-4 mt-4">
          <h1> Here is what I have been up to: </h1>
        </Row>
      </Container>
      <Container>
        <Row className="mb-4 mt-4">
          {posts.map(({ node: post }) => (
            <div className="col-12 col-md-6">
              <Card>
                <Card.Img variant="top" src={post.frontmatter.featuredImage} />
                <Card.Body>
                  <Card.Title>{post.frontmatter.title}</Card.Title>
                  <Card.Text>
                    {post.excerpt}
                  </Card.Text>
                  <Button variant="primary" href={post.fields.slug}>Read More</Button>
                </Card.Body>
              </Card>
            </div>
          // key={post.id}
          ))}
      </Row>
    </Container>
    </Layout>
  )
}


export const pageQuery = graphql`
  query project {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            featuredImage
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
