import React, { useEffect } from "react";
import { useUser } from "./UserContext";

function Logout() {
  const { setUser } = useUser();

  useEffect(() => {
    console.log("logout");
    setUser(null);
    sessionStorage.clear();
  });

  return <></>;
}

export default Logout;
