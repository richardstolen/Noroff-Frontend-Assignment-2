import React, { useState } from "react";

async function TranslateAPI(input) {
  const apiURL = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  const user = await getTranslationByUsername();
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

async function getTranslationByUsername() {
  const apiURL = "https://rs-lost-in-translation-api-production.up.railway.app";
  const username = "dewaldels";
  let result = [];
  await fetch(`${apiURL}/translations?username=${username}`)
    .then((response) => response.json())
    .then((results) => {
      result = results[0];
      // results will be an array of users that match the username of victor.
    })
    .catch((error) => {});

  return result;
}

export default TranslateAPI;
