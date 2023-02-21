import API from "./apiHelper";

const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export async function loginUser(input) {
  let user = await API.getUser(input);

  if (!user) {
    // If no user exists with the given username, create a new user
    user = await API.createUser(input);
  }

  return user;
}

// async function createUser(input) {
//   const response = await fetch(`${apiURL}/translations`, {
//     method: "POST",
//     headers: {
//       "X-API-Key": apiKey,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: input,
//       translations: [],
//     }),
//   });

//   if (response.ok) {
//     const user = await response.json();
//     return user;
//   }
// }

// export async function getUser(username) {
//   const response = await fetch(`${apiURL}/translations?username=${username}`);
//   if (response.ok) {
//     const user = await response.json();
//     return user[0];
//   }
// }
