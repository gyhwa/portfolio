import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Container, Row, Col} from 'react-bootstrap';


class Blog extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query blog {
            allMdx(
              sort: {
                fields: [frontmatter___date]
                order: DESC
              },
              filter: {
                frontmatter: {tag: {eq: "blog"}}
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
            <div className="pad">
              <Row xs={1} md={1}>
                {data.allMdx.edges.map(({ node: post }) => (
                  <Col className="mb-2">
                        <h2><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h2>
                        <p>{post.frontmatter.summary} </p>
                  </Col>

                ))}
            </Row>
          </div>
        </Container>

        )}
      />
    )
  }
}

export default Blog;
