import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import "animate.css";
import Skills from "./components/Skills";
import "react-circular-progressbar/dist/styles.css";
import "react-multi-carousel/lib/styles.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
