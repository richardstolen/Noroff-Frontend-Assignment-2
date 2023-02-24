import API from "./apiHelper";

/**
 * Attempts to retrieve a user with the given input username from the API.
 * If a user with the username does not exist, a new user is created with the input data.
 * @param {object} input - The user input object containing the user's username and password.
 * @returns - A promise that resolves with the user object retrieved from or created by the API.
 */
export async function loginUser(input) {
  let user = await API.getUser(input);

  if (!user) {
    // If no user exists with the given username, create a new user
    user = await API.createUser(input);
  }

  return user;
}
