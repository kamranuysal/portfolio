import Container from "react-bootstrap/Container";
import logo from "../assets/img/logo.png";
import { Facebook, Github, Linkedin } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import FooterBanner from "./FooterBanner";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row className="align-items-center">
          <FooterBanner />
          <Col xs={12} md={6} xl={6} className="text-center text-sm-start">
            <img src={logo} alt="Logo"></img>
          </Col>

          <Col xs={12} md={6} xl={6} className="text-center text-sm-end">
            <div className="icon">
              <div className="social-icon">
                <a href="#">
                  <Linkedin size={20} color="white" />
                </a>
                <a href="#">
                  <Facebook size={20} color="white" />
                </a>
                <a href="#">
                  <Github size={20} color="white" />
                </a>
              </div>
            </div>
            <div className="text">
              <h5>Copyright 2025. All Rights Reserved</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
