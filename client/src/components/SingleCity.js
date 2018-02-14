import React from 'react'

const SingleCity = (props) => {

    const handleClick = () => {
        if (window.confirm(`Are you sure you want to delete ${props.name}?`)) {
            props.deleteCity(props.id)
        }
    }
    
    return(
        <div >
            <div>{props.name}</div>
            <button type="submit" onClick={handleClick}>Delete</button>
        </div>
    )
    
}

export default SingleCity