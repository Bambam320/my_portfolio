import { Routes, Route } from "react-router-dom";

import '../CSS/App.css';
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Technical from "./Technical";
import Skill from "./Skill";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
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
