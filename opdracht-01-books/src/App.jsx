import './App.css'

// import { useState } from 'react';
// import BookList from './components/Booklist';
// import Header from './components/Header';
// import Layout from './components/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Navigation from './Pages/Navigation';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
       </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
