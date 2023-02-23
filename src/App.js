import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useUser } from "./components/UserContext";
import TranslationPage from "./pages/Translation/TranslationPage";
import LoginPage from "./pages/Login/LoginPage";
import Logout from "./components/Logout";
import ProfilePage from "./pages/Profile/ProfilePage";
import "./App.css";

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
    }
  }, [user, sessionUser, setUser, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<TranslationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
