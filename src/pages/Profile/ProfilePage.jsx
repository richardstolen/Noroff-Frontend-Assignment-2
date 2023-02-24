import React, { useState } from "react";
import { useUser } from "../../components/UserContext";
import API from "../../api/apiHelper";
import { useEffect } from "react";
import TranslationPageHeader from "../Translation/TranslationPageHeader.jsx";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import "animate.css";

/**
 * Component for rendering the Profile Page.
 * Includes the history for the user.
 * @returns ProfilePage
 */
function ProfilePage() {
  const [userObject, setUserObject] = useState();

  // Getting the user object
  useEffect(() => {
    (async () => {
      const getUser = await GetUser(sessionStorage.getItem("user"));
      setUserObject(getUser);
    })();
  }, []);

  if (!userObject)
    return (
      <>
        <TranslationPageHeader currentPage={"translation"} />
        <div className="delete-button">Loading...</div>
      </>
    );

  return (
    <>
      <TranslationPageHeader currentPage={"translation"} />
      <ProfileHistory user={userObject}></ProfileHistory>
    </>
  );
}

/**
 * Component for displaying the history,
 * and displaying the delete history button.
 * @param {*} props - the User.
 * @returns
 */
const ProfileHistory = (props) => {
  const user = props.user;
  const navigate = useNavigate();

  // Mapping the list of translations to p tags and reversing to get the latest first
  const translationsList = user.translations.map((t, i) => <p key={i}>{t}</p>);
  translationsList.reverse();

  // Function to clear history
  const onDelete = async (e) => {
    e.preventDefault();
    await API.clearHistory(user);
    navigate("/profile");
  };
  return (
    <>
      <div className="delete-button animate__animated animate__fadeIn">
        <form onSubmit={(e) => onDelete(e)}>
          <button>Delete history</button>
        </form>
      </div>
      <div className="profile-page animate__animated animate__fadeIn">
        <div className="history">
          <h3>Here are your 10 latest translations</h3>
          <div className="history-element">{translationsList.slice(0, 10)}</div>
        </div>
      </div>
    </>
  );
};

async function GetUser(username) {
  return await API.getUser(username);
}

export default ProfilePage;
