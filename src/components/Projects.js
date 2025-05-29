import { Col, Container, Row } from "react-bootstrap";
import redbullimg from "../assets/img/red-bull-img.png";
import movieapp from "../assets/img/Movie App.png";
import Pizzeria from "../assets/img/Pizza Love.png";
import CurrencyConverter from "../assets/img/currency exchanger.png";
import AIBot from "../assets/img/code.png";
import To_Do_App from "../assets/img/to-do-app.png";
import figma from "../assets/img/figma.png";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Red BULL",
      description: "Development & Design",
      imgUrl: redbullimg,
      url: "https://github.com/kamranuysal/Red-BULL",
    },
    {
      title: "Movie App",
      description: "Development",
      imgUrl: movieapp,
      url: "https://github.com/kamranuysal/Movie-App",
    },
    {
      title: "Pizzeria",
      description: "Development & Design",
      imgUrl: Pizzeria,
      url: "https://github.com/kamranuysal/Pizzeria",
    },
    {
      title: "Currency-Converter",
      description: "Development",
      imgUrl: CurrencyConverter,
      url: "https://github.com/kamranuysal/Currency-Converter",
    },
    {
      title: "AI-Bot",
      description: "Development",
      imgUrl: AIBot,
      url: "https://github.com/kamranuysal/AI-Bot",
    },
    {
      title: "To_Do_App",
      description: "Development",
      imgUrl: To_Do_App,
      url: "https://github.com/kamranuysal/To_Do_App",
    },
    {
      title: "Figma",
      description: "Development",
      imgUrl: figma,
      url: "https://www.figma.com/design/xVTxvw1EiVMJ076k6HTMkL/Untitled?node-id=0-1&t=u6WxQLmAQ1NKKHNb-1",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              My name is kamranuysal, and I’m excited to present some of the
              front-end development projects I’ve been working on. These
              projects showcase my skills in HTML, CSS, and JavaScript—the core
              technologies of modern web development.
            </p>
            <Row>
              {projects.map((item, index) => {
                return (
                  <ProjectCard
                    key={index}
                    url={item.url}
                    title={item.title}
                    description={item.description}
                    imgUrl={item.imgUrl}
                  />
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
