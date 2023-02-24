import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./components/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </UserProvider>
  </React.StrictMode>
);
