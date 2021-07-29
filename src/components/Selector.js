import React, { useEffect, useState } from 'react'
import getBreeds from '../helpers/getBreeds'
import Error from './Error'

const initialBreeds = [
    {
        id: 1,
        breed: 'Rottwailer'
    },
    {
        id: 2,
        breed: 'Pitbull'
    }
]


const Selector = ({ updateDog }) => {

    const [breeds, setBreeds] = useState(initialBreeds)
    const [error, setError] = useState(null)


    useEffect(() => {
        updateBreeds();
    }, []);

    const updateBreeds = () => {
        getBreeds()
            //como argumento lo que retornó getBreeds (es decir, data)
            .then((fetchedBreeds) => {
                setBreeds(fetchedBreeds);
            }).catch((error) => {
                setError("Error al cargar las razas");
            })
    }

    return (
        <>
            <select onChange={(e) => updateDog(e.target.value)}>
                {
                    breeds.map(breed => (
                        <option value={breed.id} key={breed.id}>{breed.name}</option>
                    ))
                }
            </select>
            {error && <Error error={error} />}
        </>
    )
}

export default Selector
