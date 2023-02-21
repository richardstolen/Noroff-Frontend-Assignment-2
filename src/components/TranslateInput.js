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

  return (
    <form onSubmit={(e) => props.submit(e, input)}>
      <InputGroup>
        <Form.Control
          name="input"
          placeholder="What do you want to translate?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={(e) => props.submit(e, input)}
          variant="outline-secondary"
          id="button-addon2"
        >
          <span id="arrow">&#x2192;</span>
        </Button>
      </InputGroup>
    </form>
  );
}

export default TranslateInput;
