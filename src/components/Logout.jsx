import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

/**
 * Component for clearing user from storage
 * @returns Redirects to login page
 */
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
