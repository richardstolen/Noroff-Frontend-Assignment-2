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
      // const fetchUser = async () => {
      //   const data = await loginUser(usernameInput).then((user) => user);

      //   return data;
      // };
      // console.log(fetchUser());
      let getUser = await loginUser(usernameInput)
        .then((results) => {
          return results[0];
        })
        .catch((error) => {});

      if (!getUser) {
        getUser = await createUser(usernameInput).then((newUser) => {
          return newUser;
        });
        console.log(getUser);
      }
      setUser(getUser.username);
      sessionStorage.setItem("user", getUser.username);
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
