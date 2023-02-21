import React, { useContext, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { useUser } from "../components/UserContext";
import { createUser, loginUser } from "../api/LoginAPI";

function LoginPage() {
  const { user, setUser } = useUser();

  const [input, setInput] = useState("");

  async function login(e, usernameInput) {
    e.preventDefault();
    if (usernameInput) {
      let userObject = await loginUser(usernameInput);

      if (!userObject) {
        alert("Something went wrong, try again!");
      } else {
        setUser(userObject.username);
        sessionStorage.setItem("user", userObject.username);
      }
    } else {
      alert("Invalid input");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        login(e, input);
      }}
    >
      <InputGroup>
        <Form.Control
          name="input"
          placeholder="What's your name?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={(e) => login(e, input)}
          variant="outline-secondary"
          id="button-addon2"
        >
          <span id="arrow">&#x2192;</span>
        </Button>
      </InputGroup>
    </form>
  );
}

export default LoginPage;
