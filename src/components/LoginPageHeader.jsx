import React from "react";
import "./LoginPageHeader.css";

function LoginPageHeader() {
  return (
    <div className="login-header-row">
      <div className="login-header-column-image animate__animated animate__bounceInLeft">
        <img
          id="loginPageBear"
          src={require("../assets/bear_big.png")}
          alt="not found"
        />
      </div>
      <div className="login-header-column-text animate__animated animate__fadeIn">
        <div className="row-1">Lost in translation</div>

        <div className="row-2">Get started</div>
      </div>
    </div>
  );
}

export default LoginPageHeader;
