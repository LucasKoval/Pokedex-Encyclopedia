import { BASE_API_URL, POKEMON_IMAGE_URL, queries } from '../config/baseURL';

export default async function getPokemon(query){
    try {
        const id = query.id;
        const number = ('00' + id).slice(-3);
        const response = await fetch(`${BASE_API_URL}${queries.pokemon}/${id}`);
        const pokemon = await response.json();
        const image = `${POKEMON_IMAGE_URL}${id}.png`;
        pokemon.number = number;    
        pokemon.image = image;        
        return {
            props: { 
                pokemon,
                id
            }
        }
    } catch (err) {
        console.error(`Error fetching the API: ${err}`);
        throw err;
    }
}