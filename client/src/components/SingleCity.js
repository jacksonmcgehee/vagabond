import React, { Component } from 'react'

import EditCity from './EditCity'

class SingleCity extends Component {

    state = {
        isOpenEditCity: false
    }

    toggleEditCityForm = () => {
        const isOpenEditCity = !this.state.isOpenEditCity
        this.setState({
            isOpenEditCity
        })
    }

    handleClick = () => {
        if (window.confirm(`Are you sure you want to delete ${this.props.name}?`)) {
            this.props.deleteCity(this.props.id)
        }
    }
    render() {
    
    return(
        <div >
            <div>{this.props.name}</div>
            <button type="submit" onClick={this.toggleEditCityForm}>Edit</button>
            <button type="submit" onClick={this.handleClick}>Delete</button>
            {
                this.state.isOpenEditCity ?
                    <EditCity 
                    city={this.props.city}/>  : null
            }
        </div>
    )
}
    
}

export default SingleCity