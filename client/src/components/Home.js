import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

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



    render(){
        if(this.state.error){
            return <div>{this.state.error}</div>
        }
        return(
            <div className="home-container">
                {this.state.cities.map(city => (
                    <Link to={`/cities/${city.id}`}>
                        <div key={city.id} className="city-preview" >
                            <img src={city.photo_url} alt="picture of city" className="city-img" />
                            <div className="city-name" >{city.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}

export default Home