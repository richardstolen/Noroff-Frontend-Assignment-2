import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./components/UserContext";
import TranslationPage from "./pages/TranslationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const setAuth = (data) => {
  if (data) {
    sessionStorage.setItem("username", data.username);
    sessionStorage.setItem("isAdmin", data.isAdmin);
    console.log("Data in setAuth: ", data);
  } else {
    sessionStorage.setItem("username", null);
    sessionStorage.setItem("isAdmin", null);
  }
};
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
