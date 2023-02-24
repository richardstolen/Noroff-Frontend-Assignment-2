import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

function Logout() {
  const { setUser } = useUser();

  useEffect(() => {
    console.log("logout");
    setUser(null);
    sessionStorage.clear();
  });

  return <Link to="/"></Link>;
}

export default Logout;
