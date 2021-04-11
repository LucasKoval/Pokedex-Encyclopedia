import { BASE_API_URL, query } from '../config/baseURL';
import apiCall from './apiCall';

const searchPokemon = (pokemon) => {
    console.log(`SEARCH:${BASE_API_URL}${query.pokemon}/${pokemon}`);
    return apiCall(`${BASE_API_URL}${query.pokemon}/${pokemon}`);
}

export default searchPokemon;