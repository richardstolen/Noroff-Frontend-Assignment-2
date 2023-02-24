import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../App.css";

import { useUser } from "../../components/UserContext";
import { loginUser } from "../../api/LoginAPI";
import LoginPageHeader from "./LoginPageHeader";
import { useNavigate } from "react-router";

/**
 * Component for rendering the login page.
 * Includes a input form and a header.
 * @returns Login Page.
 */
function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [input, setInput] = useState("");

  // Function for logging in
  async function login(e, usernameInput) {
    e.preventDefault();
    if (usernameInput) {
      let userObject = await loginUser(usernameInput);
      if (!userObject) {
        alert("Something went wrong, try again!");
      } else {
        setUser(userObject.username);
        sessionStorage.setItem("user", userObject.username);
        navigate("/");
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
