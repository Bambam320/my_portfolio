import { Routes, Route } from "react-router-dom";

import '../CSS/App.css';
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Navbar from "./Navbar";
import Skill from "./Skill";
import Technical from "./Technical";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
