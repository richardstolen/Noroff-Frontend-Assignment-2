import React from "react";
import "./TranslationPage.css";
import "./NavigationHeader.css";
import { useUser } from "../../components/UserContext";
import "animate.css";
import { Link } from "react-router-dom";

/**
 * Component for the header that is used on the Translation-
 * and Profile page.
 * @param {*} props
 * @returns A header.
 */
function TranslationPageHeader(props) {
  const currentPage = props.currentPage;
  const { user } = useUser();
  return (
    <>
      <div className="translation-header-row ">
        <div className="translation-header-column-image animate__animated animate__bounce">
          <img
            id="translationPageHeaderBear"
            src={require("../../assets/bear_big.png")}
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
                <Link to="/" className="uil uil-arrow-right">
                  Home
                </Link>
                <Link to="/profile" className="uil uil-arrow-right">
                  Profile
                </Link>
                <Link to="/logout" className="uil uil-arrow-right">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TranslationPageHeader;
