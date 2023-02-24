import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

function Logout() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("logout");
    setUser(null);
    sessionStorage.clear();
    navigate("/");
  });

  return <></>;
}

export default Logout;
