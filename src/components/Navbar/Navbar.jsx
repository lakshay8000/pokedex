import "./Navbar.css";

import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";


function Navbar() {
    const navigate= useNavigate();
    const [searchText, setSearchText] = useState("");
    const [searchError, setSearchError] = useState(false);

    async function fetchSearchResult() {
        try {
            const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
            
            setSearchError(false);
            if (searchText != "") {
                navigate(`/pokemon/${searchText}`);
            }
        }
        catch (error) {
            setSearchError(true);
        }
    }

    useEffect(() => {
        fetchSearchResult()
    }, [searchText]);

    const debouncedCallback= useDebounce((e) => setSearchText(e.target.value), 2000);


    return (
        <div className="navbar-wrapper d-flex justify-content-around align-items-center">
            <div className="navbar-title" onClick= {() => navigate("/")} >
                POKEDEX
            </div>
            <input 
                className= {searchError? "form-control error" : "form-control" }
                type= "text"
                placeholder= "Which Pokemon are you looking for?"
                onChange= {(e) => debouncedCallback(e)}
                spellCheck= {false}
            />

            {searchError && <div className= "error-text"> Pokemon not found </div>}
        </div>
    );
}

export default Navbar;