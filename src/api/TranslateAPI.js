import React, { useState } from "react";
import API from "./apiHelper.js";

const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

async function TranslateAPI(username, input) {
  if (!input || input === "") {
    return;
  }
  const user = await API.getUser(username, input);
  const returnData = await API.updateUser(user, input);
}

export default TranslateAPI;
