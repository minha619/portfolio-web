import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [categories] = useState([
    { name: 'projects', description: 'Project Lists'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Projects currentCategory={currentCategory}> </Projects>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects currentCategory={currentCategory}> </Projects>} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter >

  );
}



export default App;
