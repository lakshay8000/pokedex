import {Routes, Route} from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage/PokemonDetailsPage";


function PokedexRoutes() {
    return (
        <>
        <Routes>
            <Route path= "/" element= {<Homepage />} />
            <Route path= "/pokemon/:pokemonName" element= {<PokemonDetailsPage />} />
        </Routes>
        </>
    )
}

export default PokedexRoutes;