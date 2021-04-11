import { useState, useEffect } from 'react';
import { BASE_API_URL, query } from '../config/baseURL';
import apiCall from '../utils/apiCall';

const useFetchAll = () => {
    const [pokemons, setPokemons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        apiCall(`${BASE_API_URL}${query.pokemon}/${query.all}`)
        .then(response => {
            setPokemons(response.data.results)
        })
        .catch(error => {
            console.error("Error fetching all pokemons: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
          })
    }, []);

    return { pokemons, loading, error };
}

export default useFetchAll;