import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Project/>} />
      <Route path="/algorithms" element={<Algorithms/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;
