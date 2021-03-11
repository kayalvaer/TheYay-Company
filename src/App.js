import React from "react";
import "../src/sass/style.scss";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './components/home/Home';
import News from './components/news/News';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import SearchInput from "./components/SearchInput";
import Contact from './components/contact/Contact';

function App() {
    return (
        <>
        <Router>
        <div className="bg-light">
        <Container>
        <Navbar bg="light-gray" expand="lg">
        <Navbar.Brand href="#home" className="text-primary font-italic font-weight-bold">The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav mb-sm-3">
          <Nav className="mr-auto text-muted">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/news" className="nav-link">News</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>
            <SearchInput />
            </Navbar.Collapse>
            </Navbar>
        </Container>
        </div>

            {/*  A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time */}
      
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
    
  </>

  );
}

export default App;
