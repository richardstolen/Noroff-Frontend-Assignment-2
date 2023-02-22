import React from "react";
import "./TranslationPage.css";
import "./NavigationHeader.css";
import { useUser } from "./UserContext";
import "animate.css";

function TranslationPageHeader(props) {
  const currentPage = props.currentPage;
  const { user } = useUser();
  return (
    <>
      <div className="translation-header-row ">
        <div className="translation-header-column-image animate__animated animate__bounce">
          <img
            id="translationPageBear"
            src={require("../assets/bear_big.png")}
            alt="not found"
          />
        </div>
        <div className="translation-header-column-text">
          <div className="row-1">Lost in translation</div>
        </div>
        <div className="translation-header-column-username">{user}</div>
        <div className="translation-header-column-navbar">
          <div className="sec-center">
            <input
              className="dropdown"
              type="checkbox"
              id="dropdown"
              name="dropdown"
            />
            <label className="for-dropdown" htmlFor="dropdown">
              <p className="uil uil-arrow-down">&#9776;</p>
            </label>
            {currentPage === "translation" && (
              <div className="section-dropdown">
                <a href="/">
                  Profile <i className="uil uil-arrow-right"></i>
                </a>
                <a href="/logout">
                  Logout <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TranslationPageHeader;
