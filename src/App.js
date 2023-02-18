import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TranslationPage from "./pages/TranslationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TranslationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
