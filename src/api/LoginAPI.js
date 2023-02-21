import { getUser } from "./GetUserAPI";

const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export async function loginUser(input) {
  const user = await getTranslationByUsername(input);
  console.log(user);
  let a = false;
  if (!user & a) {
    await fetch(`${apiURL}/translations`, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: input,
        translations: [],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not create new user");
        }
        return response.json();
      })
      .then((newUser) => {
        console.log(newUser);
        user = newUser;
      })
      .catch((error) => {});
  }
  return user;
}

export async function createUser(input) {
  return await fetch(`${apiURL}/translations`, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: input,
      translations: [],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not create new user");
      }
      return response.json();
    })

    .catch((error) => {});
}

async function getTranslationByUsername(username) {
  let result = [];
  return await fetch(`${apiURL}/translations?username=${username}`).then(
    (response) => response.json()
  );

  return result;
}
