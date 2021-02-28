import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/">
          <img alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container maxwidth="sm">
        <Row>
          <Col className="description">
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
