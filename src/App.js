import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "reat-router-dom";
import TranslationPage from "./pages/TranslationPage";

function App() {
  return (
    <BrowserRouter>
      <TranslationPage></TranslationPage>;
    </BrowserRouter>
  );
}

export default App;
