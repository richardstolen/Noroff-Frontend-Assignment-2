import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TranslationPage from "./pages/TranslationPage";
import LoginPage from "./pages/LoginPage";
import { useUser } from "./components/UserContext";

function App() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const sessionUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (sessionUser) {
      setUser(sessionUser);
    }
    if (!user) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<TranslationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
