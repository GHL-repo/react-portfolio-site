import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Nav />
        <Routes>
            <Route path="/" exact element={<AboutUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    </div>
  );
}

export default App;
