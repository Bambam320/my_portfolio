import '../CSS/App.css';

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
