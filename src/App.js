import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/company" element={<Company />}>
            {" "}
          </Route>
          <Route path="/projects" element={<Projects />}>
            {" "}
          </Route>
          <Route path="/contact" element={<Contact />}>
            {" "}
          </Route>
          <Route path="/newproject" element={<NewProject />}>
            {" "}
          </Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
