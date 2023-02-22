import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import TranslationPage from "./pages/TranslationPage";
import LoginPage from "./pages/LoginPage";
import { useUser } from "./components/UserContext";
import Logout from "./components/Logout";

function App() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const sessionUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (!sessionUser) {
      setUser(sessionUser);

      navigate("/login");
    } else {
      setUser(sessionUser);
      navigate("/");
    }
  }, [user, sessionUser]);

  return (
    <div className="App">
      <Routes>
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<TranslationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
