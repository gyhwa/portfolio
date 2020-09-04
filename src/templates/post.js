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
    <Container>
      <Row>
      <div className="mt-4">
        <h1>{mdx.frontmatter.title}</h1>
        </div>
      </Row>
    </Container>

      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
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
