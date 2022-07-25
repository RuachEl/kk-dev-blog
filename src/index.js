import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./Container/Home/home.jsx";
import Archive from "./Container/Archive/archive.jsx";
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />        
      </Route>
    </Routes>
  </BrowserRouter>
);