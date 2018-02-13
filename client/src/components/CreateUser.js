import React, { Component } from "react";
import styled from 'styled-components'

export default class CreateUser extends Component {
  render() {
    return (
      <div>
        <FormWrapper action="">
          <h2>User Create Form</h2>
          Name <input type="text" placeholder="Name" required />
          Current City <input type="text" placeholder="Current City" required />
          Default Photo <input type="text" placeholder="Photo Link" required />
          Gender{" "}
          <select name="gender" id="">
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>
          Relationship status{" "}
          <select name="relationship_status" id="">
            <option value="status">Single</option>
            <option value="status">Married</option>
            <option value="status">Divorced</option>
          </select>
          About Me{" "}
          <textarea
            type="textarea"
            placeholder="Tell us about yourself..."
            rows="10"
            cols="20"
            required
            maxlength="120"
          />
          <input type="submit">Submit</input>
        </FormWrapper>
      </div>
    );
  }
}


const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 12rem;

input[type="text"] {
    border: 1px solid;
    padding: 1rem;
    text-align: center;
    margin: 1px;
    border-radius: 3px;
    background-color: white;
    cursor: pointer;
    &:hover{
        background-color:#DDCA7E;
    }
}
select {
    height: 2rem;
    font-size: 18px;
    cursor:pointer;
}
textarea {
    font-size: .9rem;
    cursor:pointer;  
    &:hover{
        background-color:#DDCA7E;
    }
}
`
