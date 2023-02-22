import API from "./apiHelper";

export async function loginUser(input) {
  let user = await API.getUser(input);

  if (!user) {
    // If no user exists with the given username, create a new user
    user = await API.createUser(input);
  }

  return user;
}
