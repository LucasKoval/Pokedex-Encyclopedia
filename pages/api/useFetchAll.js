import React, { useState, useEffect } from 'react';
import apiCall from './apiCall';

const useFetchAll = (BASE_API_URL, defaultValue) => {
    const [data, setData] = useState(defaultValue);
    const [pokemons, setPokemons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
   
    useEffect(() => {
        apiCall(BASE_API_URL + "?page=" + page)
        .then(response => {
            setData(response.data)
            setPokemons(response.data.results)
            setPreviousPage(response.data.previous)
            setNextPage(response.data.next)
        })
        .catch(error => {
            console.error("Error fetching api data: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
          })
    }, []);

    return { data, pokemons, loading, error, page, previousPage, nextPage };
}

export default useFetchAll;


/* BASE_API_POKEMON */