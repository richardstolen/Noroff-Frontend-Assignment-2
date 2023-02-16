import React from "react";

function GetTranslationsAPI() {
  const apiURL = "https://rs-lost-in-translation-api-production.up.railway.app";
  const apiKey =
    "uaxHSSnPmAp7LlijwMDezv2WXYbg1zx25YSdlzdB7zrOc83KvXE09y2ueIm5QCtV";
  fetch(`${apiURL}/translations`, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "mega-mind",
      translations: [],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not create new user");
      }
      console.log(response.json());
    })
    .then((newUser) => {
      // newUser is the new user with an id
    })
    .catch((error) => {});

  return <div>GetTranslationsAPI</div>;
}

export default GetTranslationsAPI;
