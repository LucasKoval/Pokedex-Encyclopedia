import { BASE_API_URL, POKEMON_IMAGE_URL, QUERIES } from '../config/baseURL';

export default async function getAllPokemons(){
    try {
        const response = await fetch(`${BASE_API_URL}${QUERIES.pokemon}${QUERIES.all}`);
        const { results } = await response.json();
        const pokemons = results.map((pokemon, index) => {
            const key = index;
            const id = index+1;
            const number = ('00' + id).slice(-3);
            const image = `${POKEMON_IMAGE_URL}${id}.png`;
            return {
                id,
                number,
                ...pokemon,
                image
            };
        }) 
        return {
            props: { pokemons }
        }
    } catch (err) {
        console.error(err);
    }
}