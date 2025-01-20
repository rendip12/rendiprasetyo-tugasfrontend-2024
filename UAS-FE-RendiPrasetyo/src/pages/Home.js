import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../styles/Home.css"; // Mengimpor file CSS

function Home() {
  return (
    <Container fluid className="home-container">
      <Row className="my-5">
        <Col>
          <h1 className="home-title">Welcome to My Website</h1>
          <p className="home-description">
            Discover amazing features and learn React-Bootstrap styling!
          </p>
          <Button variant="outline-primary" className="custom-button">
            Get Started
          </Button>
        </Col>
      </Row>

      <Row className="card-row">
        <Col md={4}>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Feature 1</Card.Title>
              <Card.Text>Learn React with Bootstrap integration.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Feature 2</Card.Title>
              <Card.Text>Build responsive websites faster!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Feature 3</Card.Title>
              <Card.Text>Enjoy seamless design components.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
