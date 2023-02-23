import React, { useState } from "react";
import { useUser } from "../../components/UserContext";
import TranslateInput from "./TranslateInput.jsx";
import TranslateOutput from "./TranslateOutput";
import TranslateAPI from "../../api/TranslateAPI";
import TranslationPageHeader from "./TranslationPageHeader.jsx";

function TranslationPage() {
  const [input, setInput] = useState("");
  const { user } = useUser();

  function submit(event, input) {
    event.preventDefault();
    let regex = /^[a-zA-Z ]*$/;
    if (!regex.test(input) || !/\S/.test(input)) {
      alert("Invalid input");
      return;
    }
    if (input.length <= 40) {
      setInput(input);
      TranslateAPI(user, input);
    } else {
      alert("Max limit is 40 characters");
    }
  }
  return (
    <div>
      <TranslationPageHeader currentPage={"translation"} />
      <TranslateInput input={input} submit={submit} />
      <TranslateOutput input={input} />
    </div>
  );
}

export default TranslationPage;
