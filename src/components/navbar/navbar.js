import "./navbar.css";
import favicon from './Circle-n.png';

import {Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AboutComponent from "../about/about.js";
import ContactComponent from "../contact/contact";
import ProjectComponent from "../projects/projects"

function NavBarComponent() {

    return (
        <div>
        <BrowserRouter>
        <div id="navbarDiv">
        <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" bg="light" style={{"opacity":"0.7"}}>
            <Container>
                <Navbar.Brand id="nav-link" >
                  <img
                    src= {favicon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                    style = {{"margin":"0px 1vw"}}
                  />
                  Neely Mann
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                      <Link to="/about"><Button variant="light" id="nav-link" size="lg">About</Button></Link>
                      <Link to="/skills"><Button variant="light" id="nav-link" size="lg">Skills</Button></Link>
                      <Link to="/contact"><Button variant="light" id="nav-link" size="lg">Contact</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
      <div id="browserDiv">
            <Routes>
                <Route index element={<AboutComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="/skills" element={<ProjectComponent />} />
                <Route path="*" element={<AboutComponent />} />
            </Routes>
      </div>
      </BrowserRouter>
      </div>
    );
  }
  
  export default NavBarComponent;