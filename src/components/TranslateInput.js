import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";

function TranslateInput(props) {
  const [input, setInput] = useState("");

  function click() {
    console.log(input);
  }
  return (
    <>
      <InputGroup>
        <Form.Control
          name="input"
          placeholder="What do you want to translate?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={() => props.submit(input)}
          variant="outline-secondary"
          id="button-addon2"
        >
          Button
        </Button>
      </InputGroup>
    </>
  );
}

export default TranslateInput;
