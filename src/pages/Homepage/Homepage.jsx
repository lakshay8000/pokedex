import Pokemon from "../../components/Pokemon/Pokemon";

import { useState, useEffect } from "react";
import axios from "axios";


function Homepage() {
    const [pokemonList, setPokemonList] = useState([]);

    async function fetchPokemonList() {
        const response= await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log(response.data);
        const pokemonListArr= response.data.results;
         
        // add photos-
        let updatedArr= pokemonListArr.map(async (pokemon) => {
            const detailsLink= pokemon.url;
            const response= await axios.get(`${detailsLink}`);
            pokemon.pic = response.data.sprites.back_default;
            return pokemon;
        })
    
        updatedArr= await axios.all(updatedArr);
        setPokemonList([...updatedArr]);
    }

    useEffect(() => {
        fetchPokemonList();
    }, []);

    // console.log(pokemonList);


    return (
        <div className="homepage-wrapper">

            <div className="pokemons-list d-flex justify-content-evenly flex-wrap flex-row gap-5 ms-5 me-5 mb-5">
                {
                    pokemonList.length != 0 && 
                    pokemonList.map((pokemon) => <Pokemon 
                                                     key={pokemon.name} 
                                                     image= {pokemon.pic} 
                                                     name= {pokemon.name} 
                                                 />)
                }
            </div>

        </div>
    )
}

export default Homepage;