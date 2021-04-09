import { useState, useEffect } from 'react';
import apiCall from '../utils/apiCall';

const useFetchOne = (BASE_API_URL, defaultValue) => {
    const [dataPK, setdataPK] = useState(defaultValue);
    const [loadingPK, setloadingPK] = useState(true);
    const [errorPK, setErrorPK] = useState(null);
   
    useEffect(() => {
        apiCall(BASE_API_URL)
        .then(response => {
            setdataPK(response.data)
        })
        .catch(error => {
            console.error("Error fetching api data: ", error);
            setErrorPK(error);
        })
        .finally(() => {
            setloadingPK(false);
          })
    }, []);

    return { dataPK, loadingPK, errorPK };
}

export default useFetchOne;


/* pokemon[0].url */