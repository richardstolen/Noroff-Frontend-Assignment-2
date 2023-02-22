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

const apiHelper = {
  getUser,
  createUser,
  updateUser,
};

export default apiHelper;
