const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

/**
 * Creates a new user with the given username and an empty translations array.
 * @param {string} input - The username of the new user to create.
 * @returns - User-object (if the request was successful)
 */
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


/**
 * Fetches a user with the specified username from the API.
 * @param {string} username - The username of the user to fetch.
 * @returns - User-object
 */
async function getUser(username) {
  const response = await fetch(`${apiURL}/translations?username=${username}`);
  if (response.ok) {
    const user = await response.json();
    return user[0];
  }
}


/**
 * Update translations history for a user.
 * @param {object} user - The user object
 * @param {string} input - The translation input
 */
async function updateUser(user, input) {
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


/**
 * Clears the translation history of a user. If the user has less than 10 translations in 
 * their history, the entire history is cleared. Otherwise, the last 10 translations are removed.
 * @param {*} user - The user whose history should be cleared
 */
async function clearHistory(user) {
  if (user.translations.length < 10) {
    user.translations = [];
  } else {
    user.translations.splice(user.translations.length - 10, 10);
  }

  await fetch(`${apiURL}/translations/${user.id}`, {
    method: "PATCH",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      translations: [...user.translations],
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


const apiHelper = {
  getUser,
  createUser,
  updateUser,
  clearHistory,
};

export default apiHelper;
