import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs='2' className=".App__logo">
            <img />
          </Col>
          <Col xs='4' className=".App__heading">
            <h1>Klint's Dev Blog</h1>
          </Col>
          <Col xs='6' className=".App__links">
            <nav>
              <Link to="/">Home</Link> |{" "}
              <Link to="/archive">Archive</Link>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}