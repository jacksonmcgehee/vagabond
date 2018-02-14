import React, { Component } from 'react'
import axios from 'axios'

class AdminCrud extends Component {
    state = {
        error: '',
        cities: []
    }
    componentWillMount(){
        this.fetchCities();
    }

    fetchCities = async () => {
        try {
            const response = await axios.get('/api/cities');
            console.log('we have the response from the server and grabbed the data',response)
            await this.setState({cities: response.data});
            return response.data;
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
            return err.message
        }
    }


    render() {
        return (
            <div>
                {this.state.cities.map(city => (
                        <div key={city.id}  >
                            <div >{city.name}</div>
                        </div>
                ))}
            </div>
        )
    }
}

export default AdminCrud