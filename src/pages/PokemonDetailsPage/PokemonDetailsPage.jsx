import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";
import Navbar from "../../components/Navbar/navbar";



function PokemonDetailsPage() {
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const urlParams= useParams();   // for getting url params
    // console.log(urlParams);

    async function fetchPokemonInfo() {
        const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${urlParams.pokemonName}`);
        setPokemonInfo(response.data);
    }

    useEffect(() => {
        fetchPokemonInfo();
    }, []);

    // console.log(pokemonInfo);

    
    return (
        <>
        <Navbar />
        <div className= "pokemon-details-page-wrapper d-flex justify-content-center mt-5">
            {
                pokemonInfo? 
                <PokemonDetails 
                    pic= {pokemonInfo.sprites.other.home.front_default} 
                    id= {pokemonInfo.id} 
                    name= {pokemonInfo.forms[0].name} 
                    exp= {pokemonInfo.base_experience} 
                    height= {pokemonInfo.height} 
                    order= {pokemonInfo.order} 
                    weight= {pokemonInfo.weight} 
                />
                :
                <Spinner animation="border" variant="success" />
            }
        </div>
        </>
    )
}

export default PokemonDetailsPage;