import React, { Component } from 'react'
import styled from 'styled-components'

class NavBar extends Component {

    render(){

        return(
            <NavBarStyle>
                <div>Jeans Jams: Travel Edition</div>
            </NavBarStyle>
        )
    }
}

export default NavBar

const NavBarStyle = styled.div`
    width: 100vw;
    height: 8vh;
    background-color: goldenrod;
`