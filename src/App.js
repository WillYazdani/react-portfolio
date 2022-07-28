import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return(
        <>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
        
    )
};