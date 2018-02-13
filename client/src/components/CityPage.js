import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class CityPage extends Component {
    state = {
        city: {},
        posts: []
    }

    componentWillMount = () => {
        this.getCity()
    }

    getCity = async () => {
        try {
            const cityId = this.props.match.params.id
            const response = await axios.get(`/api/cities/${cityId}/`)
            this.setState({ city: response.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    getAllPosts = () => {
    }


    render() {

        return (
            <div>
                <div>
                    <img width="500" src={this.state.city.photo_url} alt={this.state.city.name}/>
                </div>
                <div>
                    {this.state.city.name}
                </div>
                <div>
                    {this.state.city.nickname}
                </div>
                <div>
                    Population: {this.state.city.population}
                </div>
                <div>
                    Type: {this.state.city.city_type}
                </div>
                <div>
                    Summary: {this.state.city.summary}
                </div>
                <div>
                    <Link to="/"><button>Back to Cities</button></Link>
                </div>
            </div>
        )
    }
}

