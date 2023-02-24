import React, { useState } from "react";
import { useUser } from "../../components/UserContext";
import API from "../../api/apiHelper";
import { useEffect } from "react";
import TranslationPageHeader from "../Translation/TranslationPageHeader.jsx";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import "animate.css";

export const storageSave = (key, value) => {
  //validateKey(key);

  if (!value) {
    throw new Error("storageSave: No value provided for " + key);
  }
  sessionStorage.setItem(key, JSON.stringify(value)); //Stringify fordi application<localstorage<key: value - value kan bare være string, ikke object
};

function ProfilePage(props) {
  const [userObject, setUserObject] = useState();

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

const ProfileActions = () => {
  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      // add logic to handle logout
    }
  };
};

const handleClearHistoryClick = async () => {
  if (!window.confirm("Are you sure\nThis cannot be undone.")) {
    return;
  }
  //const [clearError] = await orderClearHistory(user.id)
  //if (clearError !== null) {
  //    return
  //}

  //   const updatedUser = {
  //     ...user,
  //     orders: [],
  //   };
  //   storageSave(updatedUser);
  //   setUser(updatedUser);
};

const ProfileHistory = (props) => {
  const user = props.user;
  const navigate = useNavigate();

  const translationsList = user.translations.map((t, i) => <p key={i}>{t}</p>);
  translationsList.reverse();

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
