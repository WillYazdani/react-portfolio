import React from "react";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Folio from "./components/pages/Folio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
// import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return(
        <>
            <NavTabs />
            <div className="container">
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/" element={<Folio />} />
                    <Route path="/folio" element={<Folio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </>
        
    )
};