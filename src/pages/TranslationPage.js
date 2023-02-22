import React, { useState } from "react";
import TranslateInput from "../components/TranslateInput.jsx";
import TranslateOutput from "../components/TranslateOutput";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TranslateAPI, { getTranslationByUsername } from "../api/TranslateAPI";
import { useUser } from "../components/UserContext";
import TranslationPageHeader from "../components/TranslationPageHeader.jsx";

function TranslationPage() {
  const [input, setInput] = useState("");
  const { user, setUser } = useUser();

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
