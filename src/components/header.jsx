import React from "react";
import { Link } from "gatsby";
import { heroData } from '../mock/data';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  const links = heroData.links;

  return (
      <Navbar className="header" expand="lg">
        <Navbar.Brand > <Link to="/"> {heroData.title} </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {links.map(full_link => (
              <Nav.Link>
                 <Link to={full_link.link}>
                  {full_link.name}
                 </Link>
              </Nav.Link>

            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}
