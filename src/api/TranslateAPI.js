import React, { useState } from "react";

const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

async function TranslateAPI(username, input) {
  if (!input || input === "") {
    return;
  }
  const user = await getTranslationByUsername(username);
  await fetch(`${apiURL}/translations/${user.id}`, {
    method: "PATCH",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      translations: [...user.translations, input],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not update translations history");
      }
      return response.json();
    })
    .then((updatedUser) => {})
    .catch((error) => {});
}

async function getTranslationByUsername(username) {
  let result = [];
  await fetch(`${apiURL}/translations?username=${username}`)
    .then((response) => response.json())
    .then((results) => {
      console.log(results);
      result = results[0];
      // results will be an array of users that match the username of victor.
    })
    .catch((error) => {});

  return result;
}

export default TranslateAPI;
