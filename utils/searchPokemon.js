import Axios from 'axios';
import { BASE_API_URL, query } from '../config/baseURL';
import apiCall from './apiCall';

const searchPokemon = async (pokemon) => {
    return await Axios(`${BASE_API_URL}${query.pokemon}/${pokemon}`);
}

export default searchPokemon;