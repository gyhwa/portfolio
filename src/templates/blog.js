import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from '../components/pagination';
import SEO from '../components/seo';

export default function PageTemplate({ data,  pageContext: { numPages, currentPage }}) {
  return (
    <Layout>
    <SEO title="Gina's Blog" description="Blog post about digital marketing and other items" />
    <Container fluid>
      <div className="pad">
        <Row>
          <Col>
            <h1> Blog </h1>
          </Col>
        </Row>
      </div>
    </Container>
    <Container fluid>
      <div className="pad">
        <Row xs={1} md={1}>

             {data.allMdx.edges.map((edge, index) => {
                 return (
                   <Col className="mb-2" ey={index}>
                         <h2><Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link></h2>
                         <p className="date-grey">{edge.node.frontmatter.date} </p>
                         <p>{edge.node.frontmatter.summary} </p>
                         <p className="tag-grey"> tags: &nbsp;
                         {edge.node.frontmatter.tag.filter(tag => tag !== "blog").map((tag) => {
                           return( `${tag} `)
                         })} </p>
                   </Col>
                 )
             })}
             <Pagination numPages={numPages} currentPage={currentPage} />
         </Row>
      </div>
      </Container>
    </Layout>
  )
}


export const pageQuery = graphql`
  query PostQuery($skip: Int!, $limit: Int!) {
    allMdx(
		sort: { fields: [frontmatter___date], order: DESC},
    filter: {
      frontmatter: {tag: {eq: "blog"}}
    },
		limit: $limit,
		skip: $skip){
      edges {
        node {
          frontmatter {
            title
            summary
            tag
            date
          }
          fields {
				    slug
				   }
        }
      }
    }
  }
`
