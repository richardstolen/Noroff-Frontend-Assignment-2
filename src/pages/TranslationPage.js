import React, { useState } from "react";
import TranslateInput from "../components/TranslateInput";
import TranslateOutput from "../components/TranslateOutput";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TranslationPage() {
  const [input, setInput] = useState("");

  function submit(input) {
    setInput(input);
  }
  return (
    <div>
      <TranslateInput input={input} submit={submit} />
      <TranslateOutput input={input} />
    </div>
  );
}

export default TranslationPage;
