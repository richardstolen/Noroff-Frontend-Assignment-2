import API from "./apiHelper.js";

/**
 * Translates user input and updates the translation history of the user.
 * @param {*} username - The username of the user whose translation history will be updated.
 * @param {*} input - The input text to be translated.
 * @returns - A promise that resolves when the translation and user update is complete, 
 * or returns nothing if no input is provided.
 */
async function TranslateAPI(username, input) {
  if (!input) {
    return;
  } else {
    const user = await API.getUser(username, input);
    await API.updateUser(user, input);
  }
}

export default TranslateAPI;
