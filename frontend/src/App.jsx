import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>This is Home page</h1>} />
        <Route path="/about" element={<h1>This is About page</h1>} />
        <Route path="/register" element={<h1>This is Register page</h1>} />
        <Route path="/login" element={<h1>This is Login page</h1>} />
        <Route path="*" element={<h1>This is Error page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
