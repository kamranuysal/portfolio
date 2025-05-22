import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { CircularProgressbar } from "react-circular-progressbar";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}></Col>
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>
              A front-end developer must be proficient in HTML, CSS, and
              JavaScript, as these core technologies enable them to structure
              content, style layouts, and implement interactivity essential for
              creating dynamic, user-friendly web applications.
            </p>
            <Carousel
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
              responsive={responsive}
            >
              <div className="item">
                <CircularProgressbar
                  value={70}
                  text={`70%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>React</h5>
              </div>

              <div className="item">
                <CircularProgressbar
                  value={85}
                  text={`85%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>Css</h5>
              </div>

              <div className="item">
                <CircularProgressbar
                  value={95}
                  text={`95%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>Js</h5>
              </div>

              <div className="item">
                <CircularProgressbar
                  value={100}
                  text={`100%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>HTML</h5>
              </div>

              <div className="item">
                <CircularProgressbar
                  value={80}
                  text={`80%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>C#</h5>
              </div>

              <div className="item">
                <CircularProgressbar
                  value={100}
                  text={`100%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>Typescript</h5>
              </div>

              <div className="item">
                <CircularProgressbar
                  value={90}
                  text={`90%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>Nodejs</h5>
              </div>

              <div className="item">
                <CircularProgressbar
                  value={100}
                  text={`100%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>Git</h5>
              </div>

              <div className="item">
                <CircularProgressbar
                  value={99}
                  text={`99%`}
                  className="circular-progress-bar"
                ></CircularProgressbar>
                <h5>Figma</h5>
              </div>
            </Carousel>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
