import React from "react";

const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

async function createUser(input) {
  const response = await fetch(`${apiURL}/translations`, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: input,
      translations: [],
    }),
  });

  if (response.ok) {
    const user = await response.json();
    return user;
  }
}

async function getUser(username) {
  const response = await fetch(`${apiURL}/translations?username=${username}`);
  if (response.ok) {
    const user = await response.json();
    return user[0];
  }
}

const apiHelper = {
  getUser,
  createUser,
};

export default apiHelper;
