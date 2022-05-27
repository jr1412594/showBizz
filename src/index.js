import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./Episodes";
import Episode from "./Episode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='episodes/' element={<Episodes />}>
                <Route path=':showId' element={<Episode />} />
            </Route>
        </Routes>
    </BrowserRouter>
    // </React.StrictMode>
);
