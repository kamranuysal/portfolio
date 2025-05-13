import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Red BULL",
      description: "Development & Design",
      imgUrl: null,
      url: "#",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}></Col>
        </Row>
      </Container>
    </section>
  );
};
