import API from "./apiHelper.js";

async function TranslateAPI(username, input) {
  if (!input) {
    return;
  } else {
    const user = await API.getUser(username, input);
    await API.updateUser(user, input);
  }
}

export default TranslateAPI;
