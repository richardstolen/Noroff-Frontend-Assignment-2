export async function getUser(input) {
  const apiURL = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  let result = [];
  await fetch(`${apiURL}/translations?username=${input}`)
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((results) => {
      result = results;
      // results will be an array of users that match the username of victor.
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
