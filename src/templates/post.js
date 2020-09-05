import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from '../components/Layout';
import { Container, Row } from 'react-bootstrap';


const shortcodes = { Link } // Provide common components here
export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
    <Container fluid>
      <Row>
      <div className="pad">
        <h1>{mdx.frontmatter.title}</h1>
        </div>
      </Row>
    </Container>
      <div className="mb-4">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
