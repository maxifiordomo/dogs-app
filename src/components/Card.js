import React from 'react'
import Spinner from './Spinner'

const Card = ({ dog, updateDog, loading }) => {

    if (loading) return <Spinner />

    return (
        <div className="card" onClick={() => updateDog(dog.breed.id)}>
            <img
                src={dog.image}
                alt="logo"
            />
            <p>{dog.breed.name}</p>

        </div>
    )
}

export default Card
