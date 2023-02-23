import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../App.css";
import "animate.css";

function TranslateInput(props) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => props.submit(e, input)}
      className="animate__animated animate__fadeInUp"
    >
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
          <div className="arrow"></div>
        </Button>
      </InputGroup>
    </form>
  );
}

export default TranslateInput;
