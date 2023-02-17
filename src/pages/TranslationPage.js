import React, { useState } from "react";
import TranslateInput from "../components/TranslateInput";
import TranslateOutput from "../components/TranslateOutput";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TranslationPage() {
  const [input, setInput] = useState("");

  function submit(event, input) {
    event.preventDefault();
    if (input.length <= 40) {
      setInput(input);
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
