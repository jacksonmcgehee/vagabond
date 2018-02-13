import React, { Component } from "react";
import styled from "styled-components";
export default class UserSignIn extends Component {
  render() {
    return (
      <div>
        <Form action="">
          <div className="container" />
          <h1>Login</h1>
          <p>Welcome back.</p>
          <hr />
          <label>
            <b>Email </b>
          </label>
          <input
            type="text"
            value="DanielleGoneWild@gmail.com"
            placeholder="Enter Email"
            name="email"
            
          />
          <label>
            <b>Password </b>
          </label>
          <input
            type="password"
            value="Rihanna"
            placeholder="Enter Password"
            name="psw"
          />
      
          <br />
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
          <p>
            By being a user you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <div>
            <CancelBtn type="button">Cancel</CancelBtn>
            <a href="/">
            <SignUp >
              Sign In
            </SignUp>
            </a>
          </div>
        </Form>
      </div>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 7px 0;
  input[type="text"] {
    width: 11rem;
    height: 2rem;
    background: #f1f1f1;
  }
  input[type="password"] {
    width: 11rem;
    height: 25px;
    background: #f1f1f1;
    
  }
`;
const CancelBtn = styled.button`
  padding: 14px 20px;
  background-color: #f44336;
  color: white;
  opacity: 0.9;
  width: 11rem;
  margin: 7px 0;
  &:hover {
    cursor: pointer;
  }
`;

const SignUp = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  cursor: pointer;
  opacity: 0.9;
  width: 11rem;
`;
