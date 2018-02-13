import React, { Component } from "react";
import styled from "styled-components";

class NavBar extends Component {
  render() {
    return (
      <NavBarStyle>
        <div>Jeans Jams: Travel Edition</div>
        <ButtonContainer>
          <a href="/signin">
            <button>Sign In</button>
          </a>
        </ButtonContainer>
      </NavBarStyle>
    );
  }
}

export default NavBar;

const NavBarStyle = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: #ffc476;
  /* color: #CBF3F0; */
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`



`;
