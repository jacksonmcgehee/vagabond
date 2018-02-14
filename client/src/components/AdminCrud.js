import React, { Component } from 'react'
import axios from 'axios'
import NewCity from './NewCity'
import SingleCity from './SingleCity';

class AdminCrud extends Component {
    state = {
        error: '',
        cities: [],
        isOpenAddForm: false
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

    toggleAddCityForm = () => {
        const isOpenAddForm = !this.state.isOpenAddForm
        this.setState({
            isOpenAddForm
        })
    }

    

    // resetForm = () => {

    // }

    addCity = (newCity) => {
        
        console.log('This is newCity from the main call: ', newCity)
        
        axios.post(`/api/cities`, {
            city: newCity
        }).then((res) => {
            
            const cities = [...this.state.cities]
            cities.push(res.data)
            this.setState({cities: cities, isOpenAddForm: false})
      })
    }

    deleteCity = async (city) => {
        try {
            
            const response = await axios.delete(`/api/cities/${city}`)
            this.setState({
                cities: response.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <div>
                {this.state.cities.map(city => (
                        <div key={city.id}  >
                            <SingleCity 
                            name={city.name}
                            id={city.id}
                            deleteCity={this.deleteCity}/>
                        </div>
                ))}
                <button onClick={this.toggleAddCityForm}>
                                    Add New City
                                </button>
                {
                    this.state.isOpenAddForm ?
                        <NewCity addCity={this.addCity} /> : null
                }
                
            </div>
        )
    }
}

export default AdminCrud

