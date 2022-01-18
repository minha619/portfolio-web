import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [categories] = useState([
    { name: 'projects', description: 'Project thumbnails'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects currentCategory={currentCategory}> </Projects>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter >

  );
}



export default App;
