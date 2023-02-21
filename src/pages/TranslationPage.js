import React, { useState } from "react";
import TranslateInput from "../components/TranslateInput";
import TranslateOutput from "../components/TranslateOutput";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TranslateAPI, { getTranslationByUsername } from "../api/TranslateAPI";
import { useUser } from "../components/UserContext";

function TranslationPage() {
  const [input, setInput] = useState("");
  const { user, setUser } = useUser();

  function submit(event, input) {
    event.preventDefault();
    if (input.length <= 40) {
      setInput(input);
      TranslateAPI(user, input);
    } else {
      alert("Max limit is 40 characters");
    }
  }
  return (
    <div>
      <TranslateInput input={input} submit={submit} />
      <TranslateOutput input={input} />
    </div>
  );
}

export default TranslationPage;
