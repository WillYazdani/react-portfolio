import React from "react";
import NavTabs from "./components/NavTabs";
import Folio from "./components/pages/Folio";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return(
        <>
            <NavTabs />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/" element={<Folio />} /> */}
                    <Route path="/folio" element={<Folio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
        
    )
};