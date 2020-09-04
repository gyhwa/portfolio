import React from "react";
import { MDXProvider } from "@mdx-js/react"
import Header from './header';
import Footer from './footer';
import { Container, Row } from 'react-bootstrap';

const shortcodes = Header;

export default function Layout({ children }) {
  return (
    <div>
      <Header />
        <MDXProvider components={shortcodes}>
         {children}
        </MDXProvider>
      <Footer />
    </div>
  )
}
