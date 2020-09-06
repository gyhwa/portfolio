import React from "react";
import { MDXProvider } from "@mdx-js/react"
import Header from './partials/header';
import Footer from './partials/footer';

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
