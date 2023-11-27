import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>This is Home page</h1>} />
        <Route path="/about" element={<h1>This is About page</h1>} />
        <Route path="/service" element={<h1>This is Service page</h1>} />
        <Route path="/register" element={<h1>This is Register page</h1>} />
        <Route path="/login" element={<h1>This is Login page</h1>} />
        <Route path="*" element={<h1>This is Error page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
