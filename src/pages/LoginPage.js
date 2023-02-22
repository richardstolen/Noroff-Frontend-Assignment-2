import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { useUser } from "../components/UserContext";
import { loginUser } from "../api/LoginAPI";
import LoginPageHeader from "../components/LoginPageHeader";

function LoginPage() {
  const { setUser } = useUser();

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
    <>
      <LoginPageHeader />
      <form
        onSubmit={(e) => {
          login(e, input);
        }}
      >
        <InputGroup className="animate__animated animate__fadeIn">
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
            <div className="arrow"></div>
          </Button>
        </InputGroup>
      </form>
    </>
  );
}

export default LoginPage;
