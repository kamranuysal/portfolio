import { Col, Container, Row } from "react-bootstrap";
import redbullimg from "../assets/img/red-bull-img.png";
import movieapp from "../assets/img/Movie App.png";
import Pizzeria from "../assets/img/Pizza Love.png";
import CurrencyConverter from "../assets/img/currency exchanger.png";
import AIBot from "../assets/img/code.png";
import To_Do_App from "../assets/img/to-do-app.png";

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
      title: "figma",
      description: "Development",
      imgUrl: null,
      url: "https://www.figma.com/design/xVTxvw1EiVMJ076k6HTMkL/Untitled?node-id=0-1&t=u6WxQLmAQ1NKKHNb-1",
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
