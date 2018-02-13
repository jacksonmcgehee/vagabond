import React, {Component} from 'react'
import axios from 'axios'


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
            const response = await axios.get(`/api/cities/${cityId}`)
            this.setState({city: response.data})
        }
        catch (err) {
            console.log(err)
        }
    }

    getAllPosts = () => {
        
    }

    render() {

        return(
            <div>
                
            </div>
        )
    }
}

