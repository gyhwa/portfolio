import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Container, Row, Col, Card, ButtonGroup, Button } from 'react-bootstrap';


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: "all"};
  }

  handleClick = value => () =>{
    this.setState(() => ({
      filter: value
    }));
  };


  render() {
    const filter = this.state.filter;
    return (
      <StaticQuery
        query={graphql`
          query project {
            allMdx(
              sort: {
                fields: [frontmatter___date]
                order: DESC
              }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    featuredImage
                    summary
                    tag
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
          <Container fluid>
            <Container fluid>
              <div className="pad">
                <Row className="mb-4 mt-4">
                  <Col>
                  <h1> Projects </h1>
                  </Col>
                  <Col md="auto">
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary" onClick={this.handleClick("all")}>All</Button>
                      <Button variant="secondary" onClick={this.handleClick("art")}>Art</Button>
                      <Button variant="secondary" onClick={this.handleClick("code")}>Code</Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </div>
            </Container>

          <Container fluid>
            <div className="pad">
              <Row xs={1} md={2}>
                {data.allMdx.edges.filter(({ node: post}) => post.frontmatter.tag.includes(filter)).map(({ node: post }) => (
                  <Col className="mb-2">
                    <Card>
                      <Card.Img variant="top" src={post.frontmatter.featuredImage} />
                      <Card.Body>
                        <Card.Title>{post.frontmatter.title}</Card.Title>
                        <Card.Text>
                          {post.frontmatter.summary}
                        </Card.Text>
                        <Button variant="primary"><Link to={post.fields.slug} style={{ textDecoration: 'none' }, {color: "#f6f5f5"}}>
                          Read More
                          </Link></Button>
                      </Card.Body>
                    </Card>
                  </Col>

                ))}
            </Row>
          </div>
        </Container>


        </Container>
        )}
      />
    )
  }
}

export default Project;
