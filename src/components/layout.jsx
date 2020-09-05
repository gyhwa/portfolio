import React from "react";
import { MDXProvider } from "@mdx-js/react"
import Header from './partials/header';
import Footer from './partials/footer';
import SEO from './seo';
import { Container, Row } from 'react-bootstrap';

const shortcodes = Header;

export default function Layout({ children }) {
  return (
    <div>
      <SEO />
      <Header />
        <MDXProvider components={shortcodes}>
         {children}
        </MDXProvider>
      <Footer />
    </div>
  )
}
