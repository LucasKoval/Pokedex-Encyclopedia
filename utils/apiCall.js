import Axios from 'axios';
import { BASE_API_URL, queries } from '../config/baseURL';

const apiCall = async (pokemon) => {
    return await Axios(`${BASE_API_URL}${queries.pokemon}/${pokemon}`);
}

export default apiCall;