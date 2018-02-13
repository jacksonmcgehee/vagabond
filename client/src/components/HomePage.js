import React, { Component } from "react";
import axios from "axios";
// import {Link} from 'react-router'
import styled from "styled-components";

class Home extends Component {
  state = {
    error: "",
    cities: []
  };
  componentWillMount() {
    this.fetchCities();
  }
  fetchCities = async () => {
    try {
      const respond = await axios.get("/api/cities");
      console.log(
        "we have the response from the server and grabbed the data",
        respond
      );
      await this.setState({ cities: respond.data });
      return respond.data;
    } catch (err) {
      console.log(err);
      await this.setState({ error: err.message });
      return err.message;
    }
  };
  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div>
        <h1>All Cities</h1>
        {this.state.cities.map(city => (
          <div key={city.id}>
            <div>
              <FormWrapper action="">
                <h2>User Create Form</h2>
                Name <input type="text" placeholder="Name" required />
                Current City <input type="text" placeholder="Current City" required />
                Default Photo <input type="text" placeholder="Photo Link" required />
                Gender <select name="gender" id="">
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                </select>
                Relationship status <select name="relationship_status" id="">
                  <option value="status">Single</option>
                  <option value="status">Married</option>
                  <option value="status">Divorced</option>
                </select>
                About Me <textarea
                  type="textarea" 
                  placeholder="Tell us about yourself..."
                  rows="10"
                  cols="20"
                  required maxlength="120">
                  
                </textarea>
                {/* <input type="submit">Submit</input> */}
              </FormWrapper>
            </div>

            <div>{city.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;

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


;
