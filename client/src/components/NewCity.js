import React, { Component } from 'react';

class componentName extends Component {
    state = {
        newCity: {}
    }


    handleNewCityChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const newCity = {...this.state.newCity}

        newCity[attributeName] = attributeValue

        this.setState({newCity})
    }

    addNewCity = (event) => {
        event.preventDefault()
        const blankCity = {}
        this.props.addCity(this.state.newCity)
        this.setState({newCity: blankCity})
    }


    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.addNewCity}>
                    {/* <div>
                        <input value="Jackson"/>
                    </div> */}
                    <div>
                        <label >Name: </label>
                        <input onChange={this.handleNewCityChange} name="name" value={this.state.newCity.name} />
                    </div>
                    <div>
                        <label >Nickname: </label>
                        <input onChange={this.handleNewCityChange} name="nickname" value={this.state.newCity.nickname} />
                    </div>
                    <div>
                        <label >Photo URL: </label>
                        <input onChange={this.handleNewCityChange} name="photo_url" value={this.state.newCity.photo_url} />
                    </div>
                    <div>
                        <label >Summary: </label>
                        <input onChange={this.handleNewCityChange} name="summary" value={this.state.newCity.summary} />
                    </div>
                    <div>
                        <label >State: </label>
                        <input onChange={this.handleNewCityChange} name="state" value={this.state.newCity.state} />
                    </div>
                    <div>
                        <label >Country: </label>
                        <input onChange={this.handleNewCityChange} name="country" value={this.state.newCity.country} />
                    </div>
                    <div>
                        <label >Population: </label>
                        <input onChange={this.handleNewCityChange} name="population" value={this.state.newCity.population} />
                    </div>
                    <div>
                        <label >City Type: </label>
                        <input onChange={this.handleNewCityChange} name="city_type" value={this.state.newCity.city_type} />
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>

                </form>
            </div>
                
            </div>
        );
    }
}

export default componentName;