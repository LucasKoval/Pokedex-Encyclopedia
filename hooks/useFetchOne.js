import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { BASE_API_URL, query } from '../config/baseURL';
import apiCall from '../utils/apiCall';

const useFetchOne = () => {
    const [dataPkm, setDataPkm] = useState([]);
    const [loadingPkm, setLoadingPkm] = useState(true);
    const [errorPkm, setErrorPkm] = useState(null);
    const router = useRouter()
    const id = router.query.id

    useEffect(() => {
        apiCall(`${BASE_API_URL}${query.pokemon}/${id}`)
        .then(response => {
            setDataPkm(response.data)
        })
        .catch(error => {
            console.error("Error fetching the pokemon data: ", error);
            setErrorPkm(error);
        })
        .finally(() => {
            setLoadingPkm(false);
          })
    }, []);

    return { dataPkm, loadingPkm, errorPkm };
}

export default useFetchOne;