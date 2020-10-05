import React from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import Button from "@material-ui/core/Button";
// import Footer from "./Footer";
import Input from "@material-ui/core/Input";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/Register");
  };
  return (
    <div className="login">
      <Navbar />
      <div className="login__body">
        <div className="load__formBody">
          <h1> SIGN IN</h1>
          <h2>Email Address</h2>
          <Input
            className="inputclass"
            placeholder="Enter email"
            type="email"
            inputProps={{
              style: {
                fontSize: 14,
                fontFamily: "Nunito, sans-serif",
                background: "#F1F3F8",
                color: "#393B44",
                marginTop: 5,
                padding: 10,
                width: "40vh"
              }
            }}
          />
          <h2>Password</h2>
          <Input
            className="input__pwd"
            placeholder="Enter password"
            type="password"
            inputProps={{
              style: {
                width: "40vh",
                fontSize: 14,
                fontFamily: "Nunito, sans-serif",
                background: "#F1F3F8",
                color: "#393B44",
                marginTop: 5,
                padding: 10
              }
            }}
          />
          <br />

          <Button> SIGN IN</Button>
          <p>Don't have an account yet ?</p>
          <h4 onClick={handleClick}>Create one</h4>
        </div>
        <div className="login__bodyRight">{/* <h1> I am right</h1> */}</div>
      </div>
    </div>
  );
}

export default Login;
