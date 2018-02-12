import React, {Component} from 'react'
import axios from 'axios';
// import {Link} from 'react-router'

class Home extends Component {
    state = {
        error: '',
        cities: []
    }
    componentWillMount(){
        this.fetchCities();
    }
    fetchCities = async () => {
        try {
            const respond = await axios.get('/api/cities');
            console.log('we have the response from the server and grabbed the data',respond)
            await this.setState({cities: respond.data});
            return respond.data;
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
            return err.message
        }

    }
    render(){
        if(this.state.error){
            return <div>{this.state.error}</div>
        }
        return(
            <div>
                <h1>All Cities</h1>
                {this.state.cities.map(city => (
                    <div key={city.id}>
                        <div>{city.name}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Home