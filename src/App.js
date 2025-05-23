import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <Navbar/>
     
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
          <Route path="/project/:id" element={<Project />}>
            {" "}
          </Route>
        </Routes>
    
      <Footer/>
    </Router>
  );
}

export default App;
